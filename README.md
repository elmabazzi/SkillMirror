# SkillMirror

**See your career before you choose it.**

SkillMirror is a career exploration tool for Computer Science and IT students. Students try realistic Junior Frontend Developer tasks, get honest feedback against clear criteria, and leave with three concrete next steps.

This repository contains the **Weekend 2** build:

- a **landing page** (React + TypeScript + Vite)
- an **API** with one endpoint, `GET /health` (Node.js + Express + TypeScript)
- a **SQLite database** with the full v1 data model and its first migration (better-sqlite3 + Drizzle ORM)

The rest of the product (sign-up, career snapshot, simulations, feedback, readiness summary) is documented in [`docs/`](docs/) but **not built yet**.

---

## Requirements

| | Version |
|---|---|
| **Node.js** | **26 LTS (recommended)**. Minimum 22.12. Check with `node -v` |
| **npm** | Comes with Node.js |
| **Git** | Any recent version |

**Tested on:** Node.js v26.13.0, npm 11.20.0, Windows 11 Home, Windows PowerShell 5.1. Other versions from 22.12 upward meet every package's requirements but have not been tested.

If you use a Node version manager, the repository's [`.nvmrc`](.nvmrc) selects Node 26.

## Quick start: three commands

The frontend and backend are separate projects, each with its own `package.json`. Run every command **from the repository root** (the `SkillMirror` folder). `--prefix` tells npm which project to use, so you never need to `cd` into them.

First, clone the repository and go into it:

```powershell
git clone <repository-url> SkillMirror
cd SkillMirror
```

Then:

**1. Install both projects** (once, and again after pulling changes to a `package-lock.json`):

```powershell
npm ci --prefix backend; npm ci --prefix frontend
```

**2. Terminal 1: start the API.** This creates or updates the database first, then starts the server.

```powershell
npm run dev --prefix backend
```

**3. Terminal 2: start the website.** Open a **second** terminal in the same folder:

```powershell
npm run dev --prefix frontend
```

### Two terminals are required

Commands 2 and 3 each start a server that keeps running until you stop it with **Ctrl+C**. Run them in two separate terminal windows or tabs, both opened in the repository root. In VS Code, use **Terminal → New Terminal** twice, or the **Split Terminal** button.

### What you should see

| Open | Result |
|---|---|
| http://localhost:5173 | The SkillMirror landing page |
| http://localhost:3000/health | `{"status":"ok","database":"ok"}` |

### Which terminal to use

| Terminal | Works as written? |
|---|---|
| **Windows PowerShell 5.1** (the default on Windows) | Yes, tested |
| PowerShell 7, Git Bash, macOS Terminal, Linux shells | Yes: the `;` in command 1 separates two commands in all of these |
| Windows Command Prompt (`cmd.exe`) | Command 1 only: `cmd` does not treat `;` as a separator. Run `npm ci --prefix backend` and `npm ci --prefix frontend` as two separate lines, or use PowerShell |

Do not use `&&` in Windows PowerShell 5.1. It is a syntax error there.

---

## Project structure

```
SkillMirror/
├── CLAUDE.md            Instructions for Claude Code
├── README.md            This file
├── docs/                Business, product rules, brand book, stack, data model
├── frontend/            Website: React + TypeScript + Vite
│   ├── public/brand/    Approved logo and icon (copies of docs/brand/logo)
│   └── src/
│       ├── pages/       One file per screen (Weekend 2: LandingPage only)
│       ├── components/  Reusable UI
│       └── styles/      tokens.css (brand design tokens), global.css
└── backend/             API: Node.js + Express + TypeScript
    ├── drizzle/         SQL migrations (committed)
    ├── data/            SQLite database file (created locally, not in Git)
    └── src/
        ├── routes/      HTTP endpoints (Weekend 2: health only)
        ├── models/      Data model types inferred from the schema
        └── db/          Connection, migration runner, schema/
```

## Scripts

Run any of these from the repository root with `npm run <script> --prefix <project>`, for example `npm run build --prefix frontend`.

| Project | Script | What it does |
|---|---|---|
| backend | `dev` | Applies migrations, then starts the API and restarts it when files change |
| backend | `db:migrate` | Applies pending migrations to the database |
| backend | `db:generate` | Creates a new migration after a schema change (see below) |
| backend | `db:check` | Checks the migration files are consistent |
| backend | `typecheck` | Type-checks the backend |
| frontend | `dev` | Starts the website with hot reload |
| frontend | `build` | Type-checks and builds the production site into `frontend/dist/` |
| frontend | `preview` | Serves the production build locally |
| frontend | `lint` | Lints the frontend with Oxlint |

## Database

- The database is a single file, `backend/data/skillmirror.db`. It is created automatically and is **excluded from Git**.
- The schema is defined in `backend/src/db/schema/` and explained, with a diagram, in [`docs/data-model.md`](docs/data-model.md).
- **Reset the database:** stop the API, delete `backend/data/skillmirror.db` (plus any `-wal` / `-shm` files next to it), then start the API again.
- **Change the schema:** edit the files in `backend/src/db/schema/`, then run:

  ```powershell
  npm run db:generate --prefix backend -- --name describe_the_change
  ```

  Review the new SQL file in `backend/drizzle/` and commit it. Never edit a migration that has already been committed.

## Configuration

No configuration is needed. To override the defaults, set environment variables before starting the API:

| Variable | Default | Meaning |
|---|---|---|
| `PORT` | `3000` | Port for the API |
| `DATABASE_PATH` | `data/skillmirror.db` | Database file, relative to `backend/` |

```powershell
# Windows PowerShell
$env:PORT = "3001"; npm run dev --prefix backend
```

```bash
# Git Bash, macOS, Linux
PORT=3001 npm run dev --prefix backend
```

## Troubleshooting

| Problem | Fix |
|---|---|
| `npm : File ... npm.ps1 cannot be loaded because running scripts is disabled` | PowerShell is blocking npm's launcher script. Run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, or type `npm.cmd` instead of `npm` |
| `npm warn install-scripts ... esbuild` during install | Harmless. Recent npm versions ask before running install scripts; esbuild works without them |
| `EADDRINUSE` / port already in use | Another program uses port 3000 or 5173. Stop it, or set `PORT` (API) as shown above. Vite picks the next free port automatically and prints it |
| `/health` returns `503` | The database is missing or not migrated. Run `npm run db:migrate --prefix backend` and check the API terminal for the error |
| `EBADENGINE` / "Unsupported engine" warning | Your Node.js is older than 22.12. Install Node 26 LTS |

## Documentation

| Document | Contents |
|---|---|
| [docs/business.md](docs/business.md) | Problem, customers, market and business model |
| [docs/rules-and-flows.md](docs/rules-and-flows.md) | User roles, journeys, business rules and MVP scope |
| [docs/brand-book.md](docs/brand-book.md) | Logo, colours, typography and tone of voice |
| [docs/stack.md](docs/stack.md) | Technology stack |
| [docs/data-model.md](docs/data-model.md) | Database diagram, tables and integrity rules |
