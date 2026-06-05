---
title: Guida Introduttiva
description: Come configurare l'ambiente di sviluppo e avviare il progetto localmente
sidebar_label: Guida Introduttiva
slug: /getting-started
---

# Guida Introduttiva

Questa guida ti mostrerà come configurare l'ambiente di sviluppo per **Frontend Quiz App** e avviare il progetto in locale.

## Prerequisiti

- **Node.js** >= 18.x (consigliata la versione LTS)
- **pnpm** >= 9.x (incluso con Node.js)
- Un editor di codice (es. VS Code)

## Installazione

Clona il repository e installa le dipendenze:

```bash
git clone https://github.com/Smailen5/fm-frontend-quiz.git
cd fm-frontend-quiz
pnpm install
```

## Comandi disponibili

| Comando | Descrizione |
|---------|-------------|
| `pnpm dev` | Avvia il dev server Vite con hot module replacement |
| `pnpm build` | Esegue il typecheck (`tsc -b`) e la build di produzione |
| `pnpm lint` | Esegue ESLint su tutto il progetto (solo file `.ts`/`.tsx`) |
| `pnpm preview` | Avvia un server locale per visualizzare la build di produzione |

## Avvio rapido

```bash
# Sviluppo
pnpm dev

# Build di produzione
pnpm build

# Anteprima della build
pnpm preview
```

Il server di sviluppo sarà disponibile all'indirizzo `http://localhost:5173`.

## Struttura delle cartelle

```
fm-frontend-quiz/
├── public/             # Asset statici (favicon, ecc.)
├── src/
│   ├── assets/         # Font, immagini, icone SVG
│   │   ├── fonts/
│   │   └── images/
│   ├── components/     # Componenti React (Atomic Design)
│   │   ├── atoms/      # Componenti atomici di base
│   │   ├── molecules/  # Componenti molecolari
│   │   └── organisms/  # Componenti organismi
│   ├── pages/          # Pagine dell'applicazione
│   ├── routes/         # Configurazione del routing
│   ├── utils/          # Utility e hook personalizzati
│   ├── App.tsx         # Componente radice
│   ├── data.json       # Dati dei quiz (domande e risposte)
│   ├── index.css       # Stili globali e variabili CSS
│   └── main.tsx        # Entry point dell'applicazione
├── index.html          # HTML template
├── vite.config.ts      # Configurazione Vite
├── tailwind.config.js  # Configurazione Tailwind CSS
├── tsconfig.json       # Configurazione TypeScript
└── package.json        # Dipendenze e script
```
