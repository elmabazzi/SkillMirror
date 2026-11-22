// Applies every migration in backend/drizzle/ that has not run yet.
// Run with `npm run db:migrate` (also runs automatically before `npm run dev`).
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { config } from "../config";
import { db, sqlite } from "./client";

try {
  migrate(db, { migrationsFolder: config.migrationsFolder });
  console.log(`Database is up to date: ${config.databasePath}`);
} catch (error) {
  console.error("Migration failed:", error);
  process.exitCode = 1;
} finally {
  sqlite.close();
}
