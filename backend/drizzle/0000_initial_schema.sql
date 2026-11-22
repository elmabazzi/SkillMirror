CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`role` text DEFAULT 'student' NOT NULL,
	`age_confirmed_at` integer NOT NULL,
	`terms_accepted_at` integer NOT NULL,
	`deletion_requested_at` integer,
	CONSTRAINT "users_role_check" CHECK(role IN ('student', 'content_author', 'administrator'))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE TABLE `career_paths` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `career_paths_name_unique` ON `career_paths` (`name`);--> statement-breakpoint
CREATE TABLE `rubric_criteria` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`skill_area_id` integer NOT NULL,
	`code` text NOT NULL,
	`name` text NOT NULL,
	FOREIGN KEY (`skill_area_id`) REFERENCES `skill_areas`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `rubric_criteria_code_unique` ON `rubric_criteria` (`code`);--> statement-breakpoint
CREATE TABLE `simulation_version_criteria` (
	`simulation_version_id` integer NOT NULL,
	`criterion_id` integer NOT NULL,
	`level_descriptors` text NOT NULL,
	PRIMARY KEY(`simulation_version_id`, `criterion_id`),
	FOREIGN KEY (`simulation_version_id`) REFERENCES `simulation_versions`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`criterion_id`) REFERENCES `rubric_criteria`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `simulation_versions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`simulation_id` integer NOT NULL,
	`version_number` integer NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`brief` text NOT NULL,
	`starter_url` text NOT NULL,
	`required_deliverables` text NOT NULL,
	`approved_by` integer,
	`published_at` integer,
	FOREIGN KEY (`simulation_id`) REFERENCES `simulations`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`approved_by`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE set null,
	CONSTRAINT "simulation_versions_status_check" CHECK(status IN ('draft', 'published', 'retired')),
	CONSTRAINT "simulation_versions_version_check" CHECK(version_number >= 1),
	CONSTRAINT "simulation_versions_published_at_check" CHECK(status = 'draft' OR published_at IS NOT NULL)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `simulation_versions_one_published` ON `simulation_versions` (`simulation_id`) WHERE status = 'published';--> statement-breakpoint
CREATE UNIQUE INDEX `simulation_versions_number_unique` ON `simulation_versions` (`simulation_id`,`version_number`);--> statement-breakpoint
CREATE UNIQUE INDEX `simulation_versions_id_simulation_unique` ON `simulation_versions` (`id`,`simulation_id`);--> statement-breakpoint
CREATE TABLE `simulations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`career_path_id` integer NOT NULL,
	`code` text NOT NULL,
	`title` text NOT NULL,
	FOREIGN KEY (`career_path_id`) REFERENCES `career_paths`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `simulations_path_code_unique` ON `simulations` (`career_path_id`,`code`);--> statement-breakpoint
CREATE TABLE `skill_areas` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`career_path_id` integer NOT NULL,
	`name` text NOT NULL,
	FOREIGN KEY (`career_path_id`) REFERENCES `career_paths`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `skill_areas_path_name_unique` ON `skill_areas` (`career_path_id`,`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `skill_areas_id_path_unique` ON `skill_areas` (`id`,`career_path_id`);--> statement-breakpoint
CREATE TABLE `snapshot_ratings` (
	`snapshot_id` integer NOT NULL,
	`skill_area_id` integer NOT NULL,
	`career_path_id` integer NOT NULL,
	`rating` integer NOT NULL,
	PRIMARY KEY(`snapshot_id`, `skill_area_id`),
	FOREIGN KEY (`snapshot_id`,`career_path_id`) REFERENCES `snapshots`(`id`,`career_path_id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`skill_area_id`,`career_path_id`) REFERENCES `skill_areas`(`id`,`career_path_id`) ON UPDATE no action ON DELETE no action,
	CONSTRAINT "snapshot_ratings_rating_check" CHECK(rating BETWEEN 1 AND 4)
);
--> statement-breakpoint
CREATE TABLE `snapshots` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`career_path_id` integer NOT NULL,
	`interests` text NOT NULL,
	`goal` text NOT NULL,
	`weekly_hours` integer NOT NULL,
	`completed_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`career_path_id`) REFERENCES `career_paths`(`id`) ON UPDATE no action ON DELETE no action,
	CONSTRAINT "snapshots_goal_check" CHECK(goal IN ('explore', 'internship', 'first_job')),
	CONSTRAINT "snapshots_weekly_hours_check" CHECK(weekly_hours >= 0)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `snapshots_user_path_unique` ON `snapshots` (`user_id`,`career_path_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `snapshots_id_path_unique` ON `snapshots` (`id`,`career_path_id`);--> statement-breakpoint
CREATE TABLE `feedback_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`submission_id` integer NOT NULL,
	`simulation_version_id` integer NOT NULL,
	`criterion_id` integer NOT NULL,
	`level` integer NOT NULL,
	`comment` text NOT NULL,
	FOREIGN KEY (`submission_id`,`simulation_version_id`) REFERENCES `submissions`(`id`,`simulation_version_id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`simulation_version_id`,`criterion_id`) REFERENCES `simulation_version_criteria`(`simulation_version_id`,`criterion_id`) ON UPDATE no action ON DELETE no action,
	CONSTRAINT "feedback_items_level_check" CHECK(level BETWEEN 0 AND 3)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `feedback_items_criterion_unique` ON `feedback_items` (`submission_id`,`criterion_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `feedback_items_id_submission_unique` ON `feedback_items` (`id`,`submission_id`);--> statement-breakpoint
CREATE TABLE `reviews` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`submission_id` integer NOT NULL,
	`feedback_item_id` integer,
	`reason` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`reviewer_id` integer,
	`response` text,
	`resolved_at` integer,
	FOREIGN KEY (`submission_id`) REFERENCES `submissions`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`reviewer_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`feedback_item_id`,`submission_id`) REFERENCES `feedback_items`(`id`,`submission_id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "reviews_reason_check" CHECK(reason IN ('reported', 'low_confidence', 'spot_check')),
	CONSTRAINT "reviews_reported_item_check" CHECK(reason <> 'reported' OR feedback_item_id IS NOT NULL)
);
--> statement-breakpoint
CREATE TABLE `submission_access_log` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`admin_id` integer NOT NULL,
	`submission_id` integer NOT NULL,
	`reason` text NOT NULL,
	`accessed_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`admin_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`submission_id`) REFERENCES `submissions`(`id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "submission_access_log_reason_check" CHECK(reason IN ('quality_review', 'support', 'flagged'))
);
--> statement-breakpoint
CREATE TABLE `submissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`simulation_id` integer NOT NULL,
	`simulation_version_id` integer NOT NULL,
	`attempt_number` integer NOT NULL,
	`repo_url` text,
	`zip_path` text,
	`written_deliverables` text NOT NULL,
	`ai_used` integer NOT NULL,
	`ai_use_description` text,
	`submitted_at` integer DEFAULT (unixepoch()) NOT NULL,
	`evaluated_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`simulation_version_id`,`simulation_id`) REFERENCES `simulation_versions`(`id`,`simulation_id`) ON UPDATE no action ON DELETE no action,
	CONSTRAINT "submissions_attempt_check" CHECK(attempt_number BETWEEN 1 AND 3),
	CONSTRAINT "submissions_code_check" CHECK((repo_url IS NOT NULL AND zip_path IS NULL) OR (repo_url IS NULL AND zip_path IS NOT NULL)),
	CONSTRAINT "submissions_ai_use_check" CHECK(ai_used = 0 OR (ai_use_description IS NOT NULL AND ai_use_description <> ''))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `submissions_attempt_unique` ON `submissions` (`user_id`,`simulation_id`,`attempt_number`);--> statement-breakpoint
CREATE UNIQUE INDEX `submissions_id_version_unique` ON `submissions` (`id`,`simulation_version_id`);--> statement-breakpoint
CREATE TABLE `next_steps` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`summary_id` integer NOT NULL,
	`career_path_id` integer NOT NULL,
	`position` integer NOT NULL,
	`kind` text NOT NULL,
	`skill_area_id` integer NOT NULL,
	`action` text NOT NULL,
	`outcome` text NOT NULL,
	`time_estimate` text NOT NULL,
	`resource` text,
	FOREIGN KEY (`summary_id`,`career_path_id`) REFERENCES `readiness_summaries`(`id`,`career_path_id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`skill_area_id`,`career_path_id`) REFERENCES `skill_areas`(`id`,`career_path_id`) ON UPDATE no action ON DELETE no action,
	CONSTRAINT "next_steps_position_check" CHECK(position BETWEEN 1 AND 3),
	CONSTRAINT "next_steps_kind_check" CHECK(kind IN ('gap', 'blind_spot', 'stretch'))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `next_steps_position_unique` ON `next_steps` (`summary_id`,`position`);--> statement-breakpoint
CREATE TABLE `readiness_summaries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`career_path_id` integer NOT NULL,
	`include_gap_analysis` integer DEFAULT true NOT NULL,
	`include_next_steps` integer DEFAULT true NOT NULL,
	`include_snapshot_answers` integer DEFAULT false NOT NULL,
	`include_full_feedback` integer DEFAULT false NOT NULL,
	`include_code` integer DEFAULT false NOT NULL,
	`generated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`career_path_id`) REFERENCES `career_paths`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `readiness_summaries_user_path_unique` ON `readiness_summaries` (`user_id`,`career_path_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `readiness_summaries_id_path_unique` ON `readiness_summaries` (`id`,`career_path_id`);--> statement-breakpoint
CREATE TABLE `share_links` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`summary_id` integer NOT NULL,
	`token_hash` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`expires_at` integer,
	`revoked_at` integer,
	FOREIGN KEY (`summary_id`) REFERENCES `readiness_summaries`(`id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "share_links_expiry_check" CHECK(expires_at IS NULL OR expires_at > created_at)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `share_links_token_hash_unique` ON `share_links` (`token_hash`);