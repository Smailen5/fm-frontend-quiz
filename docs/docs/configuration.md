---
title: Configurazione
description: Variabili d'ambiente, configurazione di Vite, Tailwind CSS e strumenti di sviluppo
sidebar_label: Configurazione
slug: /configuration
---

# Configurazione

## Variabili d'ambiente

Al momento il progetto **non utilizza variabili d'ambiente**. Non è presente alcun file `.env` e non ci sono riferimenti a `import.meta.env` nel codice sorgente.

Tutti i dati dell'applicazione (domande, risposte, icone) sono hard-coded in `src/data.json`.

## Configurazione Vite

Il file `vite.config.ts` configura il plugin React e il plugin SVG:

```typescript
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
});
```

- **`@vitejs/plugin-react`**: supporto JSX e Fast Refresh
- **`vite-plugin-svgr`**: permette di importare file SVG come componenti React con il suffisso `?react`

## Configurazione TypeScript

Il progetto utilizza TypeScript con due configurazioni separate:

| File | Utilizzo |
|------|----------|
| `tsconfig.json` | Configurazione radice con riferimenti alle sotto-configurazioni |
| `tsconfig.app.json` | Configurazione per il codice dell'applicazione (`src/`) |
| `tsconfig.node.json` | Configurazione per i file Node.js (`vite.config.ts`, `tailwind.config.js`) |

```json
// tsconfig.json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

## Configurazione Tailwind CSS

Il file `tailwind.config.js` definisce la palette colori, i font e la modalità dark:

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pureWhite: "var(--clr-pureWhite)",
      lightGrey: "var(--clr-lightGrey)",
      lightBluish: "var(--clr-lightBluish)",
      greyNavy: "var(--clr-greyNavy)",
      navy: "var(--clr-navy)",
      darkNavy: "var(--clr-darkNavy)",
      purple: "var(--clr-purple)",
      purpleLight: "var(--clr-purple-light)",
      purpleUltraLight: "var(--clr-purple-ultraLight)",
      green: "var(--clr-green)",
      red: "var(--clr-red)",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  darkMode: "selector",
};
```

:::note
`darkMode: "selector"` attiva la modalità dark tramite la classe CSS `.dark` applicata via JavaScript, anziché basarsi sulla preferenza di sistema del browser.
:::

## Configurazione ESLint

ESLint utilizza la flat config (`eslint.config.js`) con le seguenti estensioni:

- `@eslint/js` — regole base
- `typescript-eslint` — regole TypeScript
- `eslint-plugin-react-hooks` — regole per React Hooks
- `eslint-plugin-react-refresh` — regole per React Fast Refresh

```bash
pnpm lint
```

## Configurazione Prettier

La formattazione del codice è gestita da Prettier con il plugin `prettier-plugin-tailwindcss` per ordinare automaticamente le classi Tailwind:

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "printWidth": 80,
  "tabWidth": 2
}
```

## Script disponibili

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

| Script | Azione |
|--------|--------|
| `pnpm dev` | Avvia il dev server con HMR |
| `pnpm build` | Typecheck + build di produzione |
| `pnpm lint` | Analisi statica del codice |
| `pnpm preview` | Server locale per la build |

## Dipendenze principali

### Produzione

| Pacchetto | Versione | Scopo |
|-----------|----------|-------|
| `react` | ^18.3.1 | Libreria UI |
| `react-dom` | ^18.3.1 | Rendering DOM |
| `react-router-dom` | ^6.30.4 | Routing |
| `tailwind-merge` | ^2.6.1 | Merge di classi Tailwind |

### Sviluppo

| Pacchetto | Versione | Scopo |
|-----------|----------|-------|
| `vite` | ^5.4.21 | Bundler |
| `typescript` | ^5.9.3 | Type checking |
| `tailwindcss` | ^3.4.19 | Utility CSS |
| `eslint` | ^9.39.4 | Linting |
| `prettier` | ^3.8.3 | Formattazione |
| `@svgr/webpack` | ^8.1.0 | SVGR loader |
| `vite-plugin-svgr` | ^4.5.0 | Plugin Vite per SVG |
