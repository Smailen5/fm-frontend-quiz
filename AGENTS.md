# AGENTS.md — Frontend Quiz App

## Stack & struttura
- Vite + React 18 + TypeScript + Tailwind CSS v3
- React Router v6, `vite-plugin-svgr` (SVG → React component), `tailwind-merge`
- Single package, gestito con **npm** (`package-lock.json`)
- Atomic Design: `src/components/{atoms,molecules,organisms}/`
- Quiz data-driven da `src/data.json`

## Comandi
| Comando | Cosa fa |
|---------|---------|
| `npm run dev` | Avvia dev server Vite |
| `npm run build` | `tsc -b && vite build` (typecheck + build) |
| `npm run lint` | `eslint .` (TS/TSX soltanto) |
| `npm run preview` | Preview della build |

Non ci sono test (nessun test framework installato).

## Architettura
- Entrypoint: `src/main.tsx` → `src/App.tsx` → `src/routes/routes.tsx`
- Route: `/` (Home), `/{html,css,javascript,accessibility}-quiz`, `/score`, `*` (404)
- Ogni pagina-quiz usa `useQuiz({ selectedQuiz })` da `src/utils/useQuiz.ts` — **può restituire `null`**, gestire il caso.
- Dark mode: Tailwind `selector` strategy + `DarkModeProvider` in `src/utils/darkModeContext.tsx`
- `useSearchQuiz`, `handleSubmitAnswer`, `handleNextQuestion` in `src/utils/quizUtils.ts`

## Convenzioni
- **Commit:** Conventional Commits **senza scope**. Prefissi: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`. Messaggi in italiano.
- **PR:** Usare template in `.github/pull_request_template.md`
- **Branch:** `feat/`, `fix/`, `docs/`, `chore/`, `refactor/`, `test/` + descrizione
- **Release:** automatica via `release-please.yml` (push su `main`)
