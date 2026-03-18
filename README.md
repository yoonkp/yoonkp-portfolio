# Yoonkyung Park Portfolio

Hiring-focused portfolio for a front-end UI systems developer.

## Focus

- Replace a self-introduction style landing page with a proof-first hiring narrative.
- Reframe project detail pages as case studies built around context, constraints, decisions, and outcomes.
- Emphasize system design, Admin UI, data-heavy interfaces, and cross-functional execution.

## Structure

```text
src/
  components/
    case/
    home/
    layout/
  content/
    caseStudies.ts
    experience.ts
    proofMetrics.ts
    siteMeta.ts
  pages/
    CaseStudyPage.tsx
    HomePage.tsx
  types/
    portfolio.ts
```

## Routes

- `/`
- `/case/:slug`
- `/project-detail/:id` redirects legacy numeric links to slug-based case routes

## Run

```bash
npm run dev
npm run lint
npm run build
```

## Notes

- This rebuild uses the previous `my-home-main` repository as a content source, not as a codebase to port.
- Public content is organized to support future migration to another framework if needed.
