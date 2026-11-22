# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

SkillMirror: a career exploration tool where CS/IT students try three realistic Junior Frontend Developer tasks, get rubric-based AI-assisted feedback, and leave with a readiness summary and exactly three next steps.

**Current state: Weekend 2.** Built so far:
- `frontend/`: the landing page only
- `backend/`: `GET /health` only
- the SQLite schema for all v1 tables, with migration `0000_initial_schema`

All other journeys (sign-up, onboarding, snapshot, dashboard, simulations, submissions, feedback, gap analysis, summary, sharing, admin) are **documented in `docs/rules-and-flows.md` but not built**. Do not build them unless the user explicitly asks for that feature.

## Commands

Run from the repository root. Frontend and backend are separate npm projects; there is no root `package.json`.

```powershell
npm ci --prefix backend; npm ci --prefix frontend   # install
npm run dev --prefix backend                        # API on :3000 (runs migrations first)
npm run dev --prefix frontend                       # website on :5173 (second terminal)

npm run typecheck --prefix backend
npm run db:generate --prefix backend -- --name <change>   # after editing the schema
npm run db:check --prefix backend
npm run build --prefix frontend                     # includes the TypeScript check
npm run lint --prefix frontend                      # Oxlint
```

The user works on Windows. Commands shown to the user must work in Windows PowerShell 5.1: no `&&`, use `;` or separate lines.

Node.js 26 LTS is recommended (minimum 22.12, set in both `package.json` files).

## Layout

- `frontend/src/pages/`: one component per screen. `App.tsx` renders `LandingPage` directly; add a router only when a second page exists.
- `frontend/src/components/`: reusable UI.
- `frontend/src/styles/tokens.css`: brand design tokens. `global.css`: base styles.
- `frontend/public/brand/`: unmodified copies of `docs/brand/logo/*.svg`.
- `backend/src/db/schema/`: Drizzle tables (`users`, `content`, `snapshots`, `submissions`, `summaries`) and `relations.ts`.
- `backend/src/models/`: types inferred from the schema. Never hand-write duplicate types.
- `backend/src/db/client.ts`: better-sqlite3 + Drizzle connection. `migrate.ts`: migration runner.
- `backend/drizzle/`: generated SQL migrations. `backend/data/`: the database file (git-ignored).

## Documentation (read before product work)

- `docs/rules-and-flows.md`: roles, journeys, business rules BR-1 to BR-14, MVP scope
- `docs/business.md`: problem, customers, business model
- `docs/brand-book.md`: logo, colours, typography, voice
- `docs/data-model.md`: database diagram and which integrity rules the database vs the code enforces
- `docs/stack.md`: technology choices

**Do not modify `docs/business.md`, `docs/rules-and-flows.md`, `docs/brand-book.md` or `docs/brand/`** unless the user explicitly asks.

## Product rules that must never be broken

- **BR-4:** All AI feedback is labelled "AI-assisted" and as an estimate, not a grade. No hire/no-hire verdicts, "job-ready" certificates or numerical employability scores, anywhere (UI, API, database).
- **BR-8:** Exactly three next steps. Positions 1, 2 and 3 must be inserted together **in one transaction**, and a summary is not complete unless all three exist.
- **BR-9:** Summaries are private by default. Raw code, snapshot answers and full feedback are never shared unless the student ticks them. Share links can expire and be revoked; only a hash of the token is stored.
- **BR-10:** No employer accounts, candidate search, ranking or recruitment features. Ever.
- **BR-12:** Students can export and delete their data. A deletion request deactivates all share links immediately.
- **BR-14:** Fictional companies, people and data only in simulations.
- Respect the scope in `rules-and-flows.md` §7 ("What version 1 will NOT do").

## Database rules

- Every connection must run `PRAGMA foreign_keys = ON` (done in `client.ts`). The composite foreign keys depend on it.
- Several rules are enforced by composite foreign keys (feedback criteria belong to the submission's exact rubric version; ratings and next steps stay inside one career path). Keep the extra columns and composite unique keys that make this work.
- The rules the database cannot enforce are listed in `docs/data-model.md` §4. Each must be implemented in code by the feature that writes that data.
- Schema changes: edit `src/db/schema/`, run `db:generate` with a descriptive `--name`, review the SQL, commit it, and update `docs/data-model.md`. Never edit a committed migration.
- No speculative fields: every column must trace back to a documented rule or flow.

## Frontend and brand rules

- Use the CSS variables in `tokens.css`. No raw hex colours in components.
- Text must meet WCAG 2.1 AA contrast. Teal (`#14A394`) is for graphics or large text only on white; Spark Amber is never text on white.
- Colour is never the only signal: pair it with an icon and a text label.
- Skill gaps use neutral framing and Warning Ochre, not Error Red.
- Use the logo files as they are: no recolouring, stretching or effects; the light version is never used on dark backgrounds. Full logo at least 240 px wide.
- Fonts: Manrope (headings), Inter (body). Body text is never smaller than 14 px.
- Every interactive element is keyboard-operable with a visible focus outline. Respect `prefers-reduced-motion`.
- Copy follows the brand voice: honest, encouraging, clear. No invented statistics, testimonials or job guarantees.
- Do not link to screens that do not exist yet.

## Code conventions

- TypeScript strict mode in both projects. Backend imports are extensionless (`moduleResolution: bundler`).
- The backend has no build step: `tsx` runs it, `tsc` only type-checks.
- Configuration comes from environment variables with defaults in `backend/src/config.ts`. No secrets in the repository.

## Git

- Work on a feature branch, never directly on `main`.
- Do not merge into `main` or push to GitHub without the user's explicit approval.
- Never commit `.db` files, `node_modules/` or `.env` files.
