---
title: Guide
description: Guide pratiche per lo sviluppo e la personalizzazione del progetto
sidebar_label: Panoramica Guide
slug: /guides
---

# Guide

Le seguenti guide ti aiuteranno a comprendere e personalizzare i vari aspetti dell'applicazione.

## Aggiungere un nuovo topic al quiz

I quiz sono definiti in `src/data.json`. Per aggiungere un nuovo topic:

1. Apri `src/data.json`
2. Aggiungi un nuovo oggetto all'array `quizzes`:

```json
{
  "title": "React",
  "icon": "IconReact",
  "questions": [
    {
      "question": "What is JSX?",
      "options": [
        "A JavaScript extension for XML",
        "A template engine",
        "A CSS framework",
        "A database"
      ],
      "answer": "A JavaScript extension for XML"
    }
  ]
}
```

3. Aggiungi l'icona SVG corrispondente in `src/assets/images/`
4. Registra l'icona nell'oggetto `iconMaps` in `src/assets/images/index.ts`
5. Aggiungi il colore di sfondo in `iconsBackground` in `molecules/IconQuiz.tsx`
6. Crea una nuova pagina in `src/pages/` seguendo il pattern esistente (es. `ReactPage.tsx`)
7. Aggiungi la route in `src/routes/routes.tsx`

## Aggiungere una nuova icona SVG

Le icone SVG possono essere importate in due modi:

**Come componente React** (per icone cliccabili/interattive):

```tsx
import MyIcon from "./my-icon.svg?react";

const Component = () => <MyIcon className="size-6" aria-label="My icon" />;
```

**Come URL diretto** (per immagini di sfondo o decorative):

```typescript
import myBg from "./my-background.svg";

const url = myBg; // stringa URL
```

## Personalizzare la dark mode

Le variabili CSS per i colori sono definite in `src/index.css`:

```css
:root {
  --clr-purple: hsl(277, 91%, 56%);
  --clr-purple-light: hsl(277, 91%, 80%);
  --clr-green: hsl(151, 70%, 50%);
  --clr-red: hsl(0, 82%, 63%);
}
```

Il tema scuro/chiaro è gestito dalla classe `.dark` su `<body>`. Tailwind è configurato con `darkMode: "selector"` per utilizzare le varianti `dark:`.

## Aggiungere domande a un topic esistente

1. Apri `src/data.json`
2. Individua il topic (es. `"title": "HTML"`)
3. Aggiungi un nuovo oggetto all'array `questions`:

```json
{
  "question": "What is the correct HTML element for inserting a line break?",
  "options": ["<break>", "<lb>", "<br>", "<newline>"],
  "answer": "<br>"
}
```

Non è necessario alcun altro cambiamento: il componente `QuizForm` gestisce dinamicamente qualsiasi numero di domande.
