# AGENTS.md — Frontend Quiz App

## Stack & struttura
- Vite + React 18 + TypeScript + Tailwind CSS v3 (`darkMode: "selector"`)
- React Router v6 (`createBrowserRouter`), `vite-plugin-svgr`, `tailwind-merge`
- Atomic Design: `src/components/{atoms,molecules,organisms}/`
- Quiz data-driven da `src/data.json` (4 topic: HTML, CSS, JavaScript, Accessibility)
- Gestito con **pnpm** (`pnpm-lock.yaml`)

## Comandi
| Comando | Cosa fa |
|---------|---------|
| `pnpm dev` | Avvia dev server Vite |
| `pnpm build` | `tsc -b && vite build` (typecheck + build) |
| `pnpm lint` | `eslint .` (flat config, solo TS/TSX) |
| `pnpm preview` | Preview della build |

Nessun test framework installato.

## Architettura
- Entrypoint: `src/main.tsx` → `src/App.tsx` → `src/routes/routes.tsx`
- Route: `/` (Home), `/{html,css,javascript,accessibility}-quiz`, `/score`, `*` (404)
- Ogni pagina-quiz (es. `HtmlPage`) chiama `useSearchQuiz({ selectedQuiz: "HTML" })` da `src/utils/quizUtils.ts` — **può restituire `null`**, gestire il caso.
- `src/utils/useQuiz.ts` è duplicato di `quizUtils.ts` — usa `useSearchQuiz` invece.
- La route `/score` (pagina `ScorePage`) è **inutilizzata**: lo score è renderizzato da `QuizForm` → `Score` internamente.
- Dark mode: `darkMode: "selector"` in tailwind + `DarkModeProvider` in `src/utils/darkModeContext.tsx`. Applica classe `.dark` su `<body>`.
- `twMerge` da `tailwind-merge` usato direttamente in `ButtonAnswer` (no wrapper `cn()`).

## Quirk & gotcha
- **`ProgressBarr.tsx`** — typo nel nome file (doppia `r`). Il componente è `ProgressBar`, ma il file è `ProgressBarr.tsx`. L'import in `components/index.ts` usa `ProgressBarr`.
- **`useDarkModeContext`** — naming con `d` minuscola (non `useDarkModeContext` con la D). Hook esportato accanto a `DarkModeProvider`.
- **SVG import** due modalità: con `?react` (es. `icon-html.svg?react`) per componenti React inline; import URL diretto (es. `pattern-background-desktop-light.svg`) per immagini sfondo.
- **`iconMaps`**: oggetto stringa→componente in `src/assets/images/index.ts` per risolvere dinamicamente le icone quiz da `data.json`.
- **PR template** in `.github/pull_request_template.md`
- `package.json` script: `dev`, `build`, `lint`, `preview` (invocabili con `pnpm <script>`)

## Convenzioni
- **Commit:** Conventional Commits **senza scope**. Prefissi: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`. Messaggi in italiano.
- **PR:** Usare template in `.github/pull_request_template.md`
- **Branch:** `<tipo>/<descrizione>` con tipi: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`
- **Release:** automatica via `.github/workflows/release-please.yml` (push su `main`)
