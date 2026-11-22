import { sql } from "drizzle-orm";
import { check, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Registered accounts. Visitors and summary viewers have no account (rules-and-flows §2).
// No name or other profile fields: no rule needs them (data minimisation).
// No credentials yet: the login method is decided with the authentication feature.
export const userRoles = ["student", "content_author", "administrator"] as const;

export const users = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    email: text("email").notNull().unique(),
    role: text("role", { enum: userRoles }).notNull().default("student"),
    // BR-2: users must confirm they are at least 18.
    ageConfirmedAt: integer("age_confirmed_at", { mode: "timestamp" }).notNull(),
    // Journey 1: terms and privacy notice accepted at sign-up.
    termsAcceptedAt: integer("terms_accepted_at", { mode: "timestamp" }).notNull(),
    // BR-12: deletion completes within 30 days; share links stop working immediately.
    deletionRequestedAt: integer("deletion_requested_at", { mode: "timestamp" }),
  },
  () => [check("users_role_check", sql`role IN ('student', 'content_author', 'administrator')`)],
);
