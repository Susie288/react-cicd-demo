# Susan Darke — Portfolio

A Vite + React portfolio for Susan Seyram Darke, Cloud Engineer & Web Developer.

## Stack

- Vite + React (JavaScript, function components + hooks)
- Plain CSS: one global stylesheet for design tokens/reset (`src/styles/index.css`), one CSS Module per component
- Icons from `lucide-react`
- No backend — fully static, deployable to Vercel/Netlify as-is

## Design concept

The whole site is framed as a deploy pipeline: sections map to real CI/CD
stages (`INIT → BUILD → SHIP → RUN → CONNECT`), reflected in the vertical
"pipeline rail" that runs down the left margin on desktop and tracks scroll
position with a traveling pulse. The hero replays an actual `deploy.sh` log
as a typewriter animation.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/          Content — profile, nav/pipeline stages, experience, projects, skills
  hooks/         useReveal, useScrollProgress, useTypewriter
  components/
    layout/      Header, Footer, PipelineRail (site chrome)
    sections/    Hero, About, Experience, Projects, Skills, Contact
    ui/          Reveal, SectionHeading, StatusPill (shared primitives)
  styles/        Global tokens + CSS reset
  App.jsx
  main.jsx
```

## Deploying

This is a static Vite build — push `dist/` (after `npm run build`) to
Vercel, Netlify, GitHub Pages, or any static host. No environment variables
or backend services are required.
