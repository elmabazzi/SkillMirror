import { relations } from "drizzle-orm";
import {
  careerPaths,
  rubricCriteria,
  simulationVersionCriteria,
  simulationVersions,
  simulations,
  skillAreas,
} from "./content";
import { snapshotRatings, snapshots } from "./snapshots";
import { feedbackItems, reviews, submissionAccessLog, submissions } from "./submissions";
import { nextSteps, readinessSummaries, shareLinks } from "./summaries";
import { users } from "./users";

// Drizzle relations for typed relational queries (db.query.*). They mirror the
// foreign keys in the table files; the foreign keys are what the database enforces.

export const usersRelations = relations(users, ({ many }) => ({
  snapshots: many(snapshots),
  submissions: many(submissions),
  readinessSummaries: many(readinessSummaries),
}));

export const careerPathsRelations = relations(careerPaths, ({ many }) => ({
  skillAreas: many(skillAreas),
  simulations: many(simulations),
}));

export const skillAreasRelations = relations(skillAreas, ({ one, many }) => ({
  careerPath: one(careerPaths, {
    fields: [skillAreas.careerPathId],
    references: [careerPaths.id],
  }),
  rubricCriteria: many(rubricCriteria),
}));

export const rubricCriteriaRelations = relations(rubricCriteria, ({ one }) => ({
  skillArea: one(skillAreas, {
    fields: [rubricCriteria.skillAreaId],
    references: [skillAreas.id],
  }),
}));

export const simulationsRelations = relations(simulations, ({ one, many }) => ({
  careerPath: one(careerPaths, {
    fields: [simulations.careerPathId],
    references: [careerPaths.id],
  }),
  versions: many(simulationVersions),
}));

export const simulationVersionsRelations = relations(simulationVersions, ({ one, many }) => ({
  simulation: one(simulations, {
    fields: [simulationVersions.simulationId],
    references: [simulations.id],
  }),
  approver: one(users, {
    fields: [simulationVersions.approvedBy],
    references: [users.id],
  }),
  rubric: many(simulationVersionCriteria),
  submissions: many(submissions),
}));

export const simulationVersionCriteriaRelations = relations(simulationVersionCriteria, ({ one }) => ({
  version: one(simulationVersions, {
    fields: [simulationVersionCriteria.simulationVersionId],
    references: [simulationVersions.id],
  }),
  criterion: one(rubricCriteria, {
    fields: [simulationVersionCriteria.criterionId],
    references: [rubricCriteria.id],
  }),
}));

export const snapshotsRelations = relations(snapshots, ({ one, many }) => ({
  user: one(users, { fields: [snapshots.userId], references: [users.id] }),
  careerPath: one(careerPaths, {
    fields: [snapshots.careerPathId],
    references: [careerPaths.id],
  }),
  ratings: many(snapshotRatings),
}));

export const snapshotRatingsRelations = relations(snapshotRatings, ({ one }) => ({
  snapshot: one(snapshots, {
    fields: [snapshotRatings.snapshotId],
    references: [snapshots.id],
  }),
  skillArea: one(skillAreas, {
    fields: [snapshotRatings.skillAreaId],
    references: [skillAreas.id],
  }),
}));

export const submissionsRelations = relations(submissions, ({ one, many }) => ({
  user: one(users, { fields: [submissions.userId], references: [users.id] }),
  version: one(simulationVersions, {
    fields: [submissions.simulationVersionId],
    references: [simulationVersions.id],
  }),
  feedbackItems: many(feedbackItems),
  reviews: many(reviews),
  accessLog: many(submissionAccessLog),
}));

export const feedbackItemsRelations = relations(feedbackItems, ({ one, many }) => ({
  submission: one(submissions, {
    fields: [feedbackItems.submissionId],
    references: [submissions.id],
  }),
  criterion: one(rubricCriteria, {
    fields: [feedbackItems.criterionId],
    references: [rubricCriteria.id],
  }),
  reviews: many(reviews),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  submission: one(submissions, {
    fields: [reviews.submissionId],
    references: [submissions.id],
  }),
  feedbackItem: one(feedbackItems, {
    fields: [reviews.feedbackItemId],
    references: [feedbackItems.id],
  }),
  reviewer: one(users, { fields: [reviews.reviewerId], references: [users.id] }),
}));

export const submissionAccessLogRelations = relations(submissionAccessLog, ({ one }) => ({
  admin: one(users, { fields: [submissionAccessLog.adminId], references: [users.id] }),
  submission: one(submissions, {
    fields: [submissionAccessLog.submissionId],
    references: [submissions.id],
  }),
}));

export const readinessSummariesRelations = relations(readinessSummaries, ({ one, many }) => ({
  user: one(users, { fields: [readinessSummaries.userId], references: [users.id] }),
  careerPath: one(careerPaths, {
    fields: [readinessSummaries.careerPathId],
    references: [careerPaths.id],
  }),
  nextSteps: many(nextSteps),
  shareLinks: many(shareLinks),
}));

export const nextStepsRelations = relations(nextSteps, ({ one }) => ({
  summary: one(readinessSummaries, {
    fields: [nextSteps.summaryId],
    references: [readinessSummaries.id],
  }),
  skillArea: one(skillAreas, {
    fields: [nextSteps.skillAreaId],
    references: [skillAreas.id],
  }),
}));

export const shareLinksRelations = relations(shareLinks, ({ one }) => ({
  summary: one(readinessSummaries, {
    fields: [shareLinks.summaryId],
    references: [readinessSummaries.id],
  }),
}));
