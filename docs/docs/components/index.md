---
title: Componenti
description: Documentazione dei componenti React organizzati secondo l'Atomic Design
sidebar_label: Panoramica Componenti
slug: /components
---

# Componenti

I componenti sono organizzati secondo il pattern **Atomic Design**, che suddivide l'interfaccia in tre livelli di complessità crescente: atomi, molecole e organismi.

## Architettura dei componenti

```
components/
├── index.ts          # Barrel export di tutti i componenti
├── atoms/            # Componenti base e riutilizzabili
│   ├── Button.tsx
│   ├── Page.tsx
│   ├── ProgressBarr.tsx
│   └── ToggleButton.tsx
├── molecules/        # Combinazioni di atomi
│   ├── ButtonAnswer.tsx
│   ├── ButtonsSection.tsx
│   ├── ButtonSubmit.tsx
│   ├── IconQuiz.tsx
│   ├── IconsAnswer.tsx
│   ├── Navbar.tsx
│   └── QuizAnswer.tsx
└── organisms/        # Sezioni complesse dell'interfaccia
    ├── Header.tsx
    ├── Hero.tsx
    ├── QuizForm.tsx
    └── Score.tsx
```

## Atomi

### `Button`

Componente base per i pulsanti di selezione del topic nella home page. Riceve `title` e `icon` e renderizza un `IconQuiz` al suo interno.

```tsx
<Button icon="IconHtml" title="HTML" />
```

### `Page`

Layout principale dell'applicazione. Gestisce lo sfondo adattivo (tema chiaro/scuro, viewport mobile/tablet/desktop) e il contenitore centrale.

```tsx
<Page>
  <RouterProvider router={router} />
</Page>
```

### `ProgressBar` (da `ProgressBarr.tsx`)

Barra di progresso che indica l'avanzamento nel quiz. Accetta `value` (domanda corrente) e `maxValue` (totale domande).

```tsx
<ProgressBar value={3} maxValue={10} />
```

**Nota**: il file si chiama `ProgressBarr.tsx` (doppia `r`), ma il componente è esportato come `ProgressBar`.

### `ToggleButton`

Toggle per la dark mode. Utilizza `useDarkModeContext` per leggere e modificare lo stato del tema.

```tsx
<ToggleButton />
```

## Molecole

### `ButtonAnswer`

Pulsante di risposta nei quiz. Mostra l'indice della risposta in formato lettera (A, B, C, D) tramite `indexToLetters()` e applica stili diversi in base allo stato (selezionato, corretto, errato).

```tsx
<ButtonAnswer
  optionIndex={0}
  option="Hyper Text Markup Language"
  onClick={() => setSelectedAnswer("Hyper Text Markup Language")}
  isSelected={selectedAnswer === "Hyper Text Markup Language"}
  classButton="border-2 border-green"
  classIndex="bg-green text-pureWhite"
>
  <IconsAnswer showCorrectIcon={true} showErrorIcon={false} />
</ButtonAnswer>
```

### `ButtonsSection`

Sezione che renderizza i bottoni di selezione dei topic nella home page. Legge i dati dall'array `quizzes` e crea un link per ogni topic.

### `ButtonSubmit`

Pulsante di invio/navigazione nel quiz. Mostra "Submit Answer" o "Next Question" a seconda dello stato. Gestisce anche il messaggio di errore quando nessuna risposta è selezionata.

### `IconQuiz`

Renderizza l'icona di un topic con il nome corrispondente. Utilizza `iconMaps` per la risoluzione dinamica dell'icona e `iconsBackground` per il colore di sfondo.

```tsx
<IconQuiz title="HTML" icon="IconHtml" />
```

### `IconsAnswer`

Mostra l'icona di risposta corretta (check) o errata (X) dopo l'invio.

### `Navbar`

Barra di navigazione superiore. Nella home page mostra solo il toggle dark mode; nelle pagine quiz mostra anche l'icona e il titolo del topic corrente.

### `QuizAnswer`

Renderizza le opzioni di risposta per la domanda corrente. Gestisce la logica di styling per risposte corrette/errate dopo l'invio.

## Organismi

### `Hero`

Sezione principale della home page con il titolo "Welcome to the Frontend Quiz!" e i bottoni di selezione del topic.

### `QuizForm`

Componente centrale del quiz. Gestisce tutto lo stato del gioco (domanda corrente, risposta selezionata, risposte corrette, completamento) e orchestra i sotto-componenti.

```tsx
<QuizForm title="HTML" icon="IconHtml" questions={questions} />
```

Stati gestiti:
- **Domanda corrente**: traccia l'indice della domanda attuale
- **Risposta selezionata**: stringa o `null` se nessuna risposta
- **Risposta non selezionata**: booleano per il messaggio di errore
- **Risposta inviata**: booleano per il feedback visivo
- **Quiz completato**: booleano per la transizione allo score

### `Score`

Pagina di riepilogo con il punteggio ottenuto e il pulsante "Play Again" per ricominciare.

```tsx
<Score
  title="HTML"
  icon="IconHtml"
  correctAnswers={8}
  questionLength={10}
/>
```

### `Header`

Componente placeholder attualmente non utilizzato.
