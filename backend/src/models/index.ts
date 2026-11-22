// Data models inferred from the Drizzle schema, so they are never written twice.
// `X` is a row as read from the database; `NewX` is the shape accepted on insert.
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import type {
  careerPaths,
  feedbackItems,
  nextSteps,
  readinessSummaries,
  reviews,
  rubricCriteria,
  shareLinks,
  simulationVersionCriteria,
  simulationVersions,
  simulations,
  skillAreas,
  snapshotRatings,
  snapshots,
  submissionAccessLog,
  submissions,
  users,
} from "../db/schema";

// Users
export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;
export type UserRole = User["role"];

// Content
export type CareerPath = InferSelectModel<typeof careerPaths>;
export type NewCareerPath = InferInsertModel<typeof careerPaths>;
export type SkillArea = InferSelectModel<typeof skillAreas>;
export type NewSkillArea = InferInsertModel<typeof skillAreas>;
export type RubricCriterion = InferSelectModel<typeof rubricCriteria>;
export type NewRubricCriterion = InferInsertModel<typeof rubricCriteria>;
export type Simulation = InferSelectModel<typeof simulations>;
export type NewSimulation = InferInsertModel<typeof simulations>;
export type SimulationVersion = InferSelectModel<typeof simulationVersions>;
export type NewSimulationVersion = InferInsertModel<typeof simulationVersions>;
export type SimulationVersionCriterion = InferSelectModel<typeof simulationVersionCriteria>;
export type NewSimulationVersionCriterion = InferInsertModel<typeof simulationVersionCriteria>;

// Career snapshot
export type Snapshot = InferSelectModel<typeof snapshots>;
export type NewSnapshot = InferInsertModel<typeof snapshots>;
export type SnapshotRating = InferSelectModel<typeof snapshotRatings>;
export type NewSnapshotRating = InferInsertModel<typeof snapshotRatings>;

// Submissions and feedback
export type Submission = InferSelectModel<typeof submissions>;
export type NewSubmission = InferInsertModel<typeof submissions>;
export type FeedbackItem = InferSelectModel<typeof feedbackItems>;
export type NewFeedbackItem = InferInsertModel<typeof feedbackItems>;
export type Review = InferSelectModel<typeof reviews>;
export type NewReview = InferInsertModel<typeof reviews>;
export type SubmissionAccess = InferSelectModel<typeof submissionAccessLog>;
export type NewSubmissionAccess = InferInsertModel<typeof submissionAccessLog>;

// Readiness summary
export type ReadinessSummary = InferSelectModel<typeof readinessSummaries>;
export type NewReadinessSummary = InferInsertModel<typeof readinessSummaries>;
export type NextStep = InferSelectModel<typeof nextSteps>;
export type NewNextStep = InferInsertModel<typeof nextSteps>;
export type ShareLink = InferSelectModel<typeof shareLinks>;
export type NewShareLink = InferInsertModel<typeof shareLinks>;
