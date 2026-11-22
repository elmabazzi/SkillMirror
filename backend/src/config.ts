import path from "node:path";

// Settings come from environment variables, with defaults so a fresh clone runs without setup.
// Relative paths are resolved from the backend folder (npm scripts run there).
export const config = {
  port: Number(process.env.PORT ?? 3000),
  databasePath: path.resolve(process.env.DATABASE_PATH ?? "data/skillmirror.db"),
  migrationsFolder: path.resolve("drizzle"),
};
