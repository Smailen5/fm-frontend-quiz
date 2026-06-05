---
title: Panoramica del Progetto
description: Introduzione a Frontend Quiz App, un'applicazione React interattiva per testare le conoscenze sui fondamenti del frontend
sidebar_label: Panoramica
slug: /overview
---

# Panoramica del Progetto

**Frontend Quiz App** è un'applicazione web interattiva che mette alla prova le conoscenze degli utenti sui fondamenti dello sviluppo frontend: HTML, CSS, JavaScript e Accessibilità. Il progetto è stato sviluppato come challenge [Frontend Mentor](https://www.frontendmentor.io/) con l'obiettivo di fornire un'esperienza quiz completa e responsive.

## Tech Stack

| Tecnologia | Versione | Ruolo |
|-----------|----------|-------|
| **React** | ^18.3.1 | Libreria UI per la costruzione dell'interfaccia |
| **TypeScript** | ^5.9.3 | Tipizzazione statica per codice più sicuro e manutenibile |
| **Vite** | ^5.4.21 | Bundler e dev server veloce con HMR |
| **Tailwind CSS** | ^3.4.19 | Utility-first CSS per styling rapido e consistente |
| **React Router** | ^6.30.4 | Routing lato client per navigazione SP |
| **tailwind-merge** | ^2.6.1 | Merge intelligente delle classi Tailwind |
| **vite-plugin-svgr** | ^4.5.0 | Import degli SVG come componenti React |

## Struttura delle Route

| Percorso | Pagina | Descrizione |
|----------|--------|-------------|
| `/` | `HomePage` | Schermata iniziale con selezione del topic |
| `/html-quiz` | `HtmlPage` | Quiz su HTML (10 domande) |
| `/css-quiz` | `CssPage` | Quiz su CSS (10 domande) |
| `/javascript-quiz` | `JsPage` | Quiz su JavaScript (10 domande) |
| `/accessibility-quiz` | `AccessibilityPage` | Quiz su Accessibilità (10 domande) |
| `/score` | `ScorePage` | Pagina score (attualmente inutilizzata) |
| `*` | `ErrorPage` | Pagina 404 personalizzata |

## Dati

I quiz sono **data-driven**: tutte le domande, le opzioni e le risposte corrette sono definite in `src/data.json`. Questo file JSON contiene 4 topic con 10 domande ciascuno, per un totale di 40 domande.

## Feature principali

- **Dark mode** con persistenza su `localStorage` e rispetto delle preferenze di sistema
- **Design responsivo** con breakpoint mobile, tablet e desktop
- **Pattern di sfondo** adattivi per tema chiaro/scuro e viewport
- **Icone SVG** importabili sia come componenti React (inline) che come URL diretti
- **Navigazione** tra domande con feedback immediato su risposte corrette/errate
- **Punteggio** finale con possibilità di rigiocare
