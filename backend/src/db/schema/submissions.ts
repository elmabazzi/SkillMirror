import { sql } from "drizzle-orm";
import { check, foreignKey, integer, sqliteTable, text, unique } from "drizzle-orm/sqlite-core";
import { simulationVersionCriteria, simulationVersions } from "./content";
import { users } from "./users";

// Submissions, rubric feedback, human review and admin access logging
// (Journey 2, BR-3 to BR-6, BR-11, BR-13).

// One evaluated attempt. Uploads rejected by automatic validation are never stored,
// so they never use an attempt (BR-5).
export const submissions = sqliteTable(
  "submissions",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    // The attempt limit counts per simulation, across versions (BR-5).
    simulationId: integer("simulation_id").notNull(),
    simulationVersionId: integer("simulation_version_id").notNull(),
    attemptNumber: integer("attempt_number").notNull(),
    repoUrl: text("repo_url"),
    zipPath: text("zip_path"),
    // Written deliverables keyed by name, e.g. { "pr_description": "..." }.
    writtenDeliverables: text("written_deliverables", { mode: "json" })
      .$type<Record<string, string>>()
      .notNull(),
    // BR-11: whether and how AI tools were used.
    aiUsed: integer("ai_used", { mode: "boolean" }).notNull(),
    aiUseDescription: text("ai_use_description"),
    submittedAt: integer("submitted_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
    evaluatedAt: integer("evaluated_at", { mode: "timestamp" }),
  },
  (t) => [
    unique("submissions_attempt_unique").on(t.userId, t.simulationId, t.attemptNumber),
    // Target for the feedback_items composite foreign key.
    unique("submissions_id_version_unique").on(t.id, t.simulationVersionId),
    // The version must belong to the stated simulation.
    foreignKey({
      name: "submissions_version_fk",
      columns: [t.simulationVersionId, t.simulationId],
      foreignColumns: [simulationVersions.id, simulationVersions.simulationId],
    }),
    check("submissions_attempt_check", sql`attempt_number BETWEEN 1 AND 3`),
    check(
      "submissions_code_check",
      sql`(repo_url IS NOT NULL AND zip_path IS NULL) OR (repo_url IS NULL AND zip_path IS NOT NULL)`,
    ),
    check(
      "submissions_ai_use_check",
      sql`ai_used = 0 OR (ai_use_description IS NOT NULL AND ai_use_description <> '')`,
    ),
  ],
);

// Level and comment for one rubric criterion of one submission (BR-3, BR-4).
// There is deliberately no total-score column (BR-4).
export const feedbackItems = sqliteTable(
  "feedback_items",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    submissionId: integer("submission_id").notNull(),
    // Copied from the submission so the database can check the criterion is in that version's rubric.
    simulationVersionId: integer("simulation_version_id").notNull(),
    criterionId: integer("criterion_id").notNull(),
    level: integer("level").notNull(), // 0 Not yet demonstrated, 1 Developing, 2 Meets, 3 Strong
    comment: text("comment").notNull(),
  },
  (t) => [
    unique("feedback_items_criterion_unique").on(t.submissionId, t.criterionId),
    // Target for the reviews composite foreign key.
    unique("feedback_items_id_submission_unique").on(t.id, t.submissionId),
    foreignKey({
      name: "feedback_items_submission_fk",
      columns: [t.submissionId, t.simulationVersionId],
      foreignColumns: [submissions.id, submissions.simulationVersionId],
    }).onDelete("cascade"),
    foreignKey({
      name: "feedback_items_rubric_fk",
      columns: [t.simulationVersionId, t.criterionId],
      foreignColumns: [
        simulationVersionCriteria.simulationVersionId,
        simulationVersionCriteria.criterionId,
      ],
    }),
    check("feedback_items_level_check", sql`level BETWEEN 0 AND 3`),
  ],
);

export const reviewReasons = ["reported", "low_confidence", "spot_check"] as const;

// Human review queue (BR-6).
export const reviews = sqliteTable(
  "reviews",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    submissionId: integer("submission_id")
      .notNull()
      .references(() => submissions.id, { onDelete: "cascade" }),
    // Required when a student reports a feedback item; optional for low-confidence results and spot checks.
    feedbackItemId: integer("feedback_item_id"),
    reason: text("reason", { enum: reviewReasons }).notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
    reviewerId: integer("reviewer_id").references(() => users.id, { onDelete: "set null" }),
    response: text("response"),
    resolvedAt: integer("resolved_at", { mode: "timestamp" }),
  },
  (t) => [
    // The feedback item must belong to the reviewed submission.
    foreignKey({
      name: "reviews_feedback_item_fk",
      columns: [t.feedbackItemId, t.submissionId],
      foreignColumns: [feedbackItems.id, feedbackItems.submissionId],
    }).onDelete("cascade"),
    check("reviews_reason_check", sql`reason IN ('reported', 'low_confidence', 'spot_check')`),
    check("reviews_reported_item_check", sql`reason <> 'reported' OR feedback_item_id IS NOT NULL`),
  ],
);

export const accessReasons = ["quality_review", "support", "flagged"] as const;

// Every administrator view of a student's submission is logged (rules-and-flows §2).
export const submissionAccessLog = sqliteTable(
  "submission_access_log",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    adminId: integer("admin_id")
      .notNull()
      .references(() => users.id),
    submissionId: integer("submission_id")
      .notNull()
      .references(() => submissions.id, { onDelete: "cascade" }),
    reason: text("reason", { enum: accessReasons }).notNull(),
    accessedAt: integer("accessed_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
  },
  () => [
    check(
      "submission_access_log_reason_check",
      sql`reason IN ('quality_review', 'support', 'flagged')`,
    ),
  ],
);
