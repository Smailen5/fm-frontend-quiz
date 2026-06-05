---
title: Utility e Hook
description: Documentazione delle utility, hook personalizzati e funzioni di supporto
sidebar_label: Panoramica Utility
slug: /utils
---

# Utility e Hook

## Panoramica

Le utility e gli hook personalizzati si trovano nella cartella `src/utils/` e forniscono funzionalità trasversali all'applicazione.

```
src/utils/
├── quizUtils.ts        # Hook e funzioni per la logica dei quiz
├── useQuiz.ts          # DUPLICATO di quizUtils.ts (da non usare)
├── darkModeContext.tsx  # Contesto e provider per la dark mode
└── indexUtils.ts       # Funzioni di utilità generiche
```

## `quizUtils.ts`

Contiene la logica principale per la gestione dei quiz. È il file da utilizzare per tutte le operazioni relative ai quiz.

### `useSearchQuiz()`

Cerca un quiz specifico in `data.json` in base al titolo e restituisce l'oggetto quiz completo (o `null` se non trovato).

```typescript
import { useSearchQuiz } from "../utils/quizUtils";

const quiz = useSearchQuiz({ selectedQuiz: "HTML" });

if (!quiz) {
  return <div>Quiz not found</div>;
}

const { title, icon, questions } = quiz;
```

**Attenzione**: `useSearchQuiz` può restituire `null`. Verifica sempre il valore prima di accedere alle sue proprietà.

### `handleSubmitAnswer()`

Verifica la risposta selezionata: controlla se è stata selezionata una risposta, incrementa il contatore delle risposte corrette e aggiorna lo stato di invio.

```typescript
handleSubmitAnswer(
  selectedAnswer,      // string | null
  question,            // { question, options, answer }
  correctAnswers,      // number
  setCorrectAnswers,   // setter state
  setIsAnswerSubmitted,// setter state
  setNoSelectedAnswer  // setter state
);
```

### `handleNextQuestion()`

Passa alla domanda successiva o segna il quiz come completato se si è raggiunta l'ultima domanda.

```typescript
handleNextQuestion(
  currentQuestionIndex,  // number
  questions,             // Question[]
  setCurrentQuestionIndex,
  setSelectedAnswer,
  setIsAnswerSubmitted,
  setIsQuizCompleted
);
```

## `darkModeContext.tsx`

### `DarkModeProvider`

Provider del contesto per la dark mode. Avvolge l'applicazione e gestisce lo stato del tema.

```tsx
import { DarkModeProvider } from "../utils/darkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}
```

### `useDarkModeContext()`

Hook per accedere al contesto della dark mode. Restituisce un oggetto con `darkMode` (boolean) e `toggleDarkMode` (funzione).

```tsx
import { useDarkModeContext } from "../utils/darkModeContext";

const { darkMode, toggleDarkMode } = useDarkModeContext();
```

### Comportamento

1. All'avvio, controlla `localStorage` per una preferenza salvata
2. Se non presente, usa `prefers-color-scheme` di sistema
3. Applica o rimuove la classe `.dark` sul `<body>`
4. Salva la scelta su `localStorage` quando l'utente cambia tema

## `indexUtils.ts`

### `indexToLetters()`

Converte un indice numerico in una lettera (0 → A, 1 → B, 25 → Z, 26 → AA, ecc.). Utilizzata per etichettare le opzioni di risposta nei quiz.

```typescript
import { indexToLetters } from "../utils/indexUtils";

indexToLetters(0);  // "A"
indexToLetters(1);  // "B"
indexToLetters(25); // "Z"
indexToLetters(26); // "AA"
```

## `useQuiz.ts` (DUPLICATO)

Il file `src/utils/useQuiz.ts` contiene esattamente la stessa logica di `quizUtils.ts`. **Non utilizzarlo**: preferisci sempre `useSearchQuiz` da `quizUtils.ts`. Le pagine `CssPage`, `JsPage` e `AccessibilityPage` lo usano ancora, ma è in fase di dismissione.
