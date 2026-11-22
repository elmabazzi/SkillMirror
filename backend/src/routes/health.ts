import { sql } from "drizzle-orm";
import { Router } from "express";
import { db, sqlite } from "../db/client";

export const healthRouter = Router();

// GET /health — confirms the API is running and the database is really usable.
// A plain `SELECT 1` is not enough: better-sqlite3 silently creates an empty file,
// so instead this reads Drizzle's migrations table (proving the schema was applied)
// and checks that foreign-key enforcement is on for this connection.
healthRouter.get("/health", (_req, res) => {
  try {
    const migrations = db.get<{ count: number }>(
      sql`SELECT count(*) AS count FROM __drizzle_migrations`,
    );
    const foreignKeysOn = sqlite.pragma("foreign_keys", { simple: true }) === 1;

    if (!migrations || migrations.count < 1 || !foreignKeysOn) {
      throw new Error("Database is not migrated or foreign keys are off");
    }

    res.status(200).json({ status: "ok", database: "ok" });
  } catch (error) {
    // Details go to the server log only; the response never exposes them.
    console.error("Health check failed:", error);
    res.status(503).json({ status: "error", database: "unavailable" });
  }
});
