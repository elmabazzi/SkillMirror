import { sql } from "drizzle-orm";
import {
  check,
  foreignKey,
  integer,
  primaryKey,
  sqliteTable,
  text,
  unique,
} from "drizzle-orm/sqlite-core";
import { careerPaths, skillAreas } from "./content";
import { users } from "./users";

// The career snapshot (Journey 1, BR-1).

export const snapshotGoals = ["explore", "internship", "first_job"] as const;

export const snapshots = sqliteTable(
  "snapshots",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    careerPathId: integer("career_path_id")
      .notNull()
      .references(() => careerPaths.id),
    interests: text("interests").notNull(), // interests and motivations
    goal: text("goal", { enum: snapshotGoals }).notNull(),
    weeklyHours: integer("weekly_hours").notNull(),
    completedAt: integer("completed_at", { mode: "timestamp" }).notNull(),
  },
  (t) => [
    unique("snapshots_user_path_unique").on(t.userId, t.careerPathId),
    // Target for the snapshot_ratings composite foreign key.
    unique("snapshots_id_path_unique").on(t.id, t.careerPathId),
    check("snapshots_goal_check", sql`goal IN ('explore', 'internship', 'first_job')`),
    check("snapshots_weekly_hours_check", sql`weekly_hours >= 0`),
  ],
);

// Self-rating on each skill area of the snapshot's career path (1-4 scale).
export const snapshotRatings = sqliteTable(
  "snapshot_ratings",
  {
    snapshotId: integer("snapshot_id").notNull(),
    skillAreaId: integer("skill_area_id").notNull(),
    // Stored so the database can check that the skill area belongs to the snapshot's path.
    careerPathId: integer("career_path_id").notNull(),
    rating: integer("rating").notNull(),
  },
  (t) => [
    primaryKey({ columns: [t.snapshotId, t.skillAreaId] }),
    foreignKey({
      name: "snapshot_ratings_snapshot_fk",
      columns: [t.snapshotId, t.careerPathId],
      foreignColumns: [snapshots.id, snapshots.careerPathId],
    }).onDelete("cascade"),
    foreignKey({
      name: "snapshot_ratings_skill_area_fk",
      columns: [t.skillAreaId, t.careerPathId],
      foreignColumns: [skillAreas.id, skillAreas.careerPathId],
    }),
    check("snapshot_ratings_rating_check", sql`rating BETWEEN 1 AND 4`),
  ],
);
