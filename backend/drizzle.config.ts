import { defineConfig } from "drizzle-kit";

// Drizzle Kit reads the schema and writes SQL migrations to ./drizzle.
// Generate a migration after changing the schema: npm run db:generate -- --name <change>
export default defineConfig({
  dialect: "sqlite",
  schema: "./src/db/schema/index.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_PATH ?? "data/skillmirror.db",
  },
  strict: true,
  verbose: true,
});
