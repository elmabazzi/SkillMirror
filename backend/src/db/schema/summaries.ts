import { sql } from "drizzle-orm";
import { check, foreignKey, integer, sqliteTable, text, unique } from "drizzle-orm/sqlite-core";
import { careerPaths, skillAreas } from "./content";
import { users } from "./users";

// Career readiness summary, next steps and share links (Journey 3, BR-7 to BR-9, BR-12).

export const readinessSummaries = sqliteTable(
  "readiness_summaries",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    careerPathId: integer("career_path_id")
      .notNull()
      .references(() => careerPaths.id),
    // BR-9: the student chooses the sections. Raw code, snapshot answers and full
    // feedback are never included unless the student explicitly ticks them.
    includeGapAnalysis: integer("include_gap_analysis", { mode: "boolean" }).notNull().default(true),
    includeNextSteps: integer("include_next_steps", { mode: "boolean" }).notNull().default(true),
    includeSnapshotAnswers: integer("include_snapshot_answers", { mode: "boolean" })
      .notNull()
      .default(false),
    includeFullFeedback: integer("include_full_feedback", { mode: "boolean" })
      .notNull()
      .default(false),
    includeCode: integer("include_code", { mode: "boolean" }).notNull().default(false),
    generatedAt: integer("generated_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (t) => [
    unique("readiness_summaries_user_path_unique").on(t.userId, t.careerPathId),
    // Target for the next_steps composite foreign key.
    unique("readiness_summaries_id_path_unique").on(t.id, t.careerPathId),
  ],
);

export const nextStepKinds = ["gap", "blind_spot", "stretch"] as const;

// BR-8: exactly three next steps. Positions 1, 2 and 3 MUST be inserted together in one
// transaction, and a summary is not complete unless all three exist. The database
// guarantees at most three; "all three exist" is enforced in application code.
export const nextSteps = sqliteTable(
  "next_steps",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    summaryId: integer("summary_id").notNull(),
    // Stored so the database can check that the skill area belongs to the summary's path.
    careerPathId: integer("career_path_id").notNull(),
    position: integer("position").notNull(),
    kind: text("kind", { enum: nextStepKinds }).notNull(),
    skillAreaId: integer("skill_area_id").notNull(),
    action: text("action").notNull(),
    outcome: text("outcome").notNull(), // "You're done when..."
    timeEstimate: text("time_estimate").notNull(),
    resource: text("resource"),
  },
  (t) => [
    unique("next_steps_position_unique").on(t.summaryId, t.position),
    foreignKey({
      name: "next_steps_summary_fk",
      columns: [t.summaryId, t.careerPathId],
      foreignColumns: [readinessSummaries.id, readinessSummaries.careerPathId],
    }).onDelete("cascade"),
    foreignKey({
      name: "next_steps_skill_area_fk",
      columns: [t.skillAreaId, t.careerPathId],
      foreignColumns: [skillAreas.id, skillAreas.careerPathId],
    }),
    check("next_steps_position_check", sql`position BETWEEN 1 AND 3`),
    check("next_steps_kind_check", sql`kind IN ('gap', 'blind_spot', 'stretch')`),
  ],
);

// BR-9: revocable, optionally expiring share links. Only a hash of the token is stored.
export const shareLinks = sqliteTable(
  "share_links",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    summaryId: integer("summary_id")
      .notNull()
      .references(() => readinessSummaries.id, { onDelete: "cascade" }),
    tokenHash: text("token_hash").notNull().unique(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
    expiresAt: integer("expires_at", { mode: "timestamp" }), // null = no expiry
    revokedAt: integer("revoked_at", { mode: "timestamp" }),
  },
  () => [
    check("share_links_expiry_check", sql`expires_at IS NULL OR expires_at > created_at`),
  ],
);
