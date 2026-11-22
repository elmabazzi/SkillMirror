import { sql } from "drizzle-orm";
import {
  check,
  foreignKey,
  integer,
  primaryKey,
  sqliteTable,
  text,
  unique,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";
import { users } from "./users";

// Career paths, skill profile, rubric criteria and versioned simulations
// (rules-and-flows §1, §5, §6, BR-3, BR-13). Written by the internal team.

export const careerPaths = sqliteTable("career_paths", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
});

export const skillAreas = sqliteTable(
  "skill_areas",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    careerPathId: integer("career_path_id")
      .notNull()
      .references(() => careerPaths.id),
    name: text("name").notNull(),
  },
  (t) => [
    unique("skill_areas_path_name_unique").on(t.careerPathId, t.name),
    // Target for composite foreign keys that keep ratings and next steps inside one career path.
    unique("skill_areas_id_path_unique").on(t.id, t.careerPathId),
  ],
);

export const rubricCriteria = sqliteTable("rubric_criteria", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  // Each criterion maps to exactly one skill area (§6).
  skillAreaId: integer("skill_area_id")
    .notNull()
    .references(() => skillAreas.id),
  code: text("code").notNull().unique(), // e.g. F-1, HT-1, A-2
  name: text("name").notNull(),
});

export const simulations = sqliteTable(
  "simulations",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    careerPathId: integer("career_path_id")
      .notNull()
      .references(() => careerPaths.id),
    code: text("code").notNull(), // S1, S2, S3
    title: text("title").notNull(),
  },
  (t) => [unique("simulations_path_code_unique").on(t.careerPathId, t.code)],
);

export const simulationVersionStatuses = ["draft", "published", "retired"] as const;

// BR-13: results always record the version used; published versions are never edited.
export const simulationVersions = sqliteTable(
  "simulation_versions",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    simulationId: integer("simulation_id")
      .notNull()
      .references(() => simulations.id),
    versionNumber: integer("version_number").notNull(),
    status: text("status", { enum: simulationVersionStatuses }).notNull().default("draft"),
    // Scenario, ticket, acceptance criteria and suggested time-box (Journey 2).
    brief: text("brief").notNull(),
    // "Download starter files / open starter repository" (Journey 2).
    starterUrl: text("starter_url").notNull(),
    // Names of the written deliverables checked by automatic validation (Journey 2).
    requiredDeliverables: text("required_deliverables", { mode: "json" }).$type<string[]>().notNull(),
    approvedBy: integer("approved_by").references(() => users.id, { onDelete: "set null" }),
    publishedAt: integer("published_at", { mode: "timestamp" }),
  },
  (t) => [
    unique("simulation_versions_number_unique").on(t.simulationId, t.versionNumber),
    // Target for the submissions composite foreign key.
    unique("simulation_versions_id_simulation_unique").on(t.id, t.simulationId),
    // At most one published version per simulation.
    uniqueIndex("simulation_versions_one_published")
      .on(t.simulationId)
      .where(sql`status = 'published'`),
    check("simulation_versions_status_check", sql`status IN ('draft', 'published', 'retired')`),
    check("simulation_versions_version_check", sql`version_number >= 1`),
    check(
      "simulation_versions_published_at_check",
      sql`status = 'draft' OR published_at IS NOT NULL`,
    ),
  ],
);

// Level descriptors, one per rubric level 0-3.
export type LevelDescriptors = {
  notYetDemonstrated: string;
  developing: string;
  meets: string;
  strong: string;
};

// The published rubric of one simulation version (BR-3).
export const simulationVersionCriteria = sqliteTable(
  "simulation_version_criteria",
  {
    simulationVersionId: integer("simulation_version_id").notNull(),
    criterionId: integer("criterion_id").notNull(),
    levelDescriptors: text("level_descriptors", { mode: "json" }).$type<LevelDescriptors>().notNull(),
  },
  (t) => [
    primaryKey({ columns: [t.simulationVersionId, t.criterionId] }),
    foreignKey({
      name: "svc_version_fk",
      columns: [t.simulationVersionId],
      foreignColumns: [simulationVersions.id],
    }),
    foreignKey({
      name: "svc_criterion_fk",
      columns: [t.criterionId],
      foreignColumns: [rubricCriteria.id],
    }),
  ],
);
