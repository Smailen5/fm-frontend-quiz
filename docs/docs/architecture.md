---
title: Architettura
description: Architettura generale del progetto, flusso dei dati e struttura dei componenti
sidebar_label: Architettura
slug: /architecture
---

# Architettura

## Panoramica

L'applicazione segue il pattern a componenti basato su **Atomic Design**, con una separazione netta tra componenti UI, pagine e utility. Il flusso dei dati è unidirezionale: i dati JSON vengono importati staticamente e passati dall'alto verso il basso tramite props.

## Flusso dell'applicazione

```
main.tsx
  └─ App.tsx
       ├─ DarkModeProvider (contesto per il tema scuro/chiaro)
       └─ Page (layout con sfondo adattivo)
            └─ RouterProvider (router di React Router v6)
                 ├─ HomePage
                 │    ├─ Navbar (toggle dark mode)
                 │    └─ Hero
                 │         └─ ButtonsSection
                 │              └─ Button (×4: HTML, CSS, JS, A11y)
                 ├─ {Topic}Page (es. HtmlPage)
                 │    ├─ Navbar (con titolo e icona del quiz)
                 │    └─ QuizForm
                 │         ├─ ProgressBar
                 │         ├─ QuizAnswer
                 │         │    └─ ButtonAnswer (× opzioni)
                 │         │         └─ IconsAnswer (corretto/errato)
                 │         └─ ButtonSubmit / Next Question
                 │         └─ [al completamento] Score
                 │              └─ IconQuiz
                 ├─ ScorePage (inutilizzata - deposito)
                 └─ ErrorPage (404)
```

## Atomic Design

| Livello | Cartella | Esempi |
|---------|----------|--------|
| **Atoms** | `atoms/` | `Button`, `Page`, `ProgressBarr`, `ToggleButton` |
| **Molecules** | `molecules/` | `ButtonAnswer`, `ButtonsSection`, `ButtonSubmit`, `IconQuiz`, `IconsAnswer`, `Navbar`, `QuizAnswer` |
| **Organisms** | `organisms/` | `Header`, `Hero`, `QuizForm`, `Score` |

## Flusso dei dati nei quiz

1. Ogni pagina-quiz (es. `HtmlPage`) chiama `useSearchQuiz()` con il nome del topic
2. L'hook cerca il quiz corrispondente in `src/data.json`
3. Il quiz (o `null`) viene restituito: se non trovato, viene renderizzato un messaggio di fallback
4. Le props `title`, `icon` e `questions` vengono passate a `QuizForm`
5. `QuizForm` gestisce lo stato interno: domanda corrente, risposta selezionata, risposte corrette
6. Le funzioni `handleSubmitAnswer` e `handleNextQuestion` gestiscono la logica di navigazione
7. Al termine del quiz, viene renderizzato il componente `Score` con il punteggio

```typescript
// Esempio: HtmlPage.tsx
export const HtmlPage = () => {
  const quiz = useSearchQuiz({ selectedQuiz: "HTML" });

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const { title, icon, questions } = quiz;

  return (
    <>
      <Navbar quizzes={{ title, icon }} />
      <QuizForm title={title} icon={icon} questions={questions} />
    </>
  );
};
```

## Gestione della dark mode

Il contesto `DarkModeProvider` gestisce il tema scuro/chiaro con tre fonti di verità:

1. **localStorage** — persiste la preferenza tra sessioni
2. **`prefers-color-scheme`** — rispetta la preferenza di sistema
3. **Classe `.dark`** — applicata su `<body>` per attivare le varianti `dark:` di Tailwind

```typescript
// src/utils/darkModeContext.tsx
const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // ...
};
```

## Gestione delle icone SVG

Le icone vengono importate in due modi:

- **Come componenti React** (con `?react`): per icone inline nei bottoni e nella navbar
- **Come URL diretti**: per immagini di sfondo e icone di risposta

```typescript
// src/assets/images/index.ts
import IconHtml from "./icon-html.svg?react";          // componente React
import desktopLight from "./pattern-background-desktop-light.svg"; // URL

export const iconMaps = {
  IconCss,
  IconHtml,
  IconJavascript,
  IconAccessibility,
};
```

## Avvertenze e quirk

### `useQuiz.ts` è duplicato

Il file `src/utils/useQuiz.ts` contiene la stessa logica di `src/utils/quizUtils.ts`. **Utilizza sempre `useSearchQuiz` da `quizUtils.ts`** per la ricerca dei quiz.

### `ProgressBarr.tsx` — typo nel nome file

Il file si chiama `ProgressBarr.tsx` (con doppia `r`), ma il componente esportato è `ProgressBar`. L'import in `components/index.ts` usa correttamente `ProgressBarr` come percorso di importazione.

### Pagina `/score` inutilizzata

La route `/score` e il componente `ScorePage` non sono utilizzati attivamente: lo score viene renderizzato internamente da `QuizForm` tramite il componente `Score`.
