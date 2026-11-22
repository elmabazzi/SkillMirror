# SkillMirror — Technology Stack

| | |
|---|---|
| **Version** | 1.0 |
| **Date** | 22 November 2026 |
| **Related documents** | [business.md](business.md) · [rules-and-flows.md](rules-and-flows.md) · [brand-book.md](brand-book.md) |
| **Scope** | Weekend 2: technology decisions for Version 1 (MVP). No application code has been written yet. |

---

## Why this stack

We chose one TypeScript-based stack across frontend and backend, with a file-based SQLite database, so a small team can build, run and change the MVP quickly with one language, minimal setup and no paid infrastructure.

## Frontend

| Technology | Role |
|---|---|
| **React** | UI library for the student-facing website |
| **TypeScript** | Typed JavaScript for all frontend code |
| **Vite** | Development server and production build tool |
| **Plain CSS** | Styling, with no CSS framework. Colours and fonts follow the [brand book](brand-book.md) |

## Backend

| Technology | Role |
|---|---|
| **Node.js** | JavaScript runtime for the server |
| **Express** | Web framework for the HTTP API |
| **TypeScript** | Typed JavaScript for all backend code |

## Database

| Technology | Role |
|---|---|
| **SQLite** | Relational database stored in a single local file |
| **better-sqlite3** | Node.js driver used by the backend to access SQLite |
| **Drizzle ORM** | Schema definitions in TypeScript, type-safe queries and database migrations |

## Runtime and supporting tools

| Technology | Role |
|---|---|
| **Node.js 26 LTS** | Recommended runtime for both projects (minimum 22.12, set in each `package.json`). See the README for the tested version |
| **npm** | Package manager; each project has its own `package-lock.json` |
| **Drizzle Kit** | Generates and checks the SQL migrations from the Drizzle schema |
| **tsx** | Runs the backend's TypeScript directly during development |
| **Oxlint** | Linting for the frontend, from the official Vite React + TypeScript template |

## Project structure

- **One GitHub repository** contains both the frontend and the backend.
- The **frontend** and **backend** are **separate projects** within that repository, each with its own dependencies and configuration.
