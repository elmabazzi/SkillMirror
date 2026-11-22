import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { config } from "../config";
import * as schema from "./schema";

fs.mkdirSync(path.dirname(config.databasePath), { recursive: true });

export const sqlite = new Database(config.databasePath);

// SQLite ignores foreign keys unless every connection turns them on.
// The composite foreign keys in the schema depend on this (docs/data-model.md §3).
sqlite.pragma("foreign_keys = ON");
// Write-ahead logging: better concurrency for a web server.
sqlite.pragma("journal_mode = WAL");

export const db = drizzle(sqlite, { schema });
