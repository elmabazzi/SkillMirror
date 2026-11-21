# SkillMirror — Rules and Flows

| | |
|---|---|
| **Version** | 1.0 (final version for the university assignment) |
| **Date** | 21 November 2026 |
| **Related documents** | [business.md](business.md) · [brand-book.md](brand-book.md) |
| **Scope** | Version 1 (MVP): Junior Frontend Developer career path |
| **Status** | Product definition for planning. Rules marked **[Assumption]** are design decisions that may change after the pilot. |

---

## 1. Key concepts

| Term | Definition |
|---|---|
| **Career path** | A target role with its own skill profile, simulations and rubrics. v1 has one: **Junior Frontend Developer**. |
| **Career snapshot** | A short questionnaire on interests, self-rated skills, goals and available time. |
| **Simulation** | A realistic workplace task at a fictional company, with a brief, artefacts, deliverables and a rubric. |
| **Submission** | A student's deliverables for one simulation: code (repository link or ZIP upload) plus the required written items. |
| **Rubric** | Published criteria with level descriptors used to evaluate a submission. |
| **Skill profile** | The defined set of skills expected of a junior frontend developer (see §6). |
| **Skill-gap analysis** | A comparison of demonstrated levels (from rubric results) with the skill profile, alongside the student's self-rating. |
| **Career readiness summary** | A one-page summary of the journey, controlled by the student and shareable by link. |
| **Next steps** | Exactly three personalised, actionable recommendations, each tied to a gap. |

---

## 2. User roles and permissions

v1 has **no employer role**. This is deliberate: see BR-10.

| Role | Who | Description |
|---|---|---|
| **Visitor** | Anyone not signed in | Can learn about SkillMirror |
| **Student** | Registered user, 18+ | The primary user. Completes the journey and owns their data |
| **Summary viewer** | Anyone with an active share link | Read-only view of one shared readiness summary. No account needed |
| **Content author** | Internal team member | Writes and maintains simulations, rubrics and skill profiles |
| **Administrator** | Internal team member | Manages the platform, reviews flagged feedback, handles data requests |

### Permission matrix

| Action | Visitor | Student | Summary viewer | Content author | Administrator |
|---|:-:|:-:|:-:|:-:|:-:|
| View public pages and simulation overviews | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create account | ✅ | — | ✅ (can register) | — | — |
| Complete career snapshot | ❌ | ✅ own | ❌ | ❌ | ❌ |
| Start / submit simulations | ❌ | ✅ own | ❌ | ✅ test mode only | ✅ test mode only |
| View own feedback, gap analysis, next steps | ❌ | ✅ own | ❌ | ❌ | ❌ |
| Generate / revoke share link | ❌ | ✅ own | ❌ | ❌ | ❌ |
| View a shared readiness summary | ✅ via link | ✅ via link | ✅ via link | ✅ via link | ✅ via link |
| Create / edit simulations and rubrics | ❌ | ❌ | ❌ | ✅ | ✅ |
| Publish a simulation version | ❌ | ❌ | ❌ | ❌ (proposes) | ✅ (approves) |
| View individual student submissions | ❌ | own only | ❌ | ❌ | ✅ only for quality review, support or flagged cases (logged) |
| View aggregated, anonymised usage statistics | ❌ | ❌ | ❌ | ✅ | ✅ |
| Export / delete own data | ❌ | ✅ own | ❌ | ❌ | ✅ on request |

---

## 3. Main user journeys

### Journey 1 — First-time student: discovery and career snapshot

**Goal:** a student finds SkillMirror, understands what it offers and completes the career snapshot.

```
[Landing page] → [Explore "Junior Frontend Developer" path overview]
      → [Sign up (email or university email) + accept terms & privacy notice, confirm 18+]
      → [Onboarding: what to expect, how AI feedback works, data & privacy in plain language]
      → [Career snapshot (~10 min)]
            • Interests & motivations
            • Self-rating on each skill in the junior frontend profile (1–4 scale)
            • Goal (explore / prepare for internship / prepare for first job)
            • Weekly time available
      → [Snapshot result: "Here's your starting point" + overview of the 3 simulations]
      → [Dashboard with progress tracker: Snapshot ✅ · S1 ○ · S2 ○ · S3 ○ · Summary 🔒]
```

**Key moments:**
- The student is told before starting that feedback is AI-assisted and rubric-based (BR-4).
- The snapshot result is framed as *self-perception*. It is not an assessment.

### Journey 2 — Completing a job simulation and receiving feedback

**Goal:** the student completes one realistic task and receives rubric-based feedback.

```
[Dashboard] → [Choose simulation, e.g. S2 "Fix It in Production"]
      → [Brief: scenario, ticket, acceptance criteria, suggested time-box, rubric (visible upfront)]
      → [Download starter files / open starter repository]
      → [Work offline in own editor (no timer)]
      → [Submit: code (repo link or ZIP) + required written deliverables
                  (e.g. PR description, bug notes) + AI-tool-use declaration]
      → [Automatic validation: files present, size limits, required fields] ──✗──► [Fix and resubmit; no attempt used]
      → [AI evaluation against rubric]
      → [Feedback view]
            • Level per rubric criterion (Not yet demonstrated / Developing / Meets / Strong)
            • Evidence-linked comments
            • "What a strong submission looks like" notes
            • Label: "AI-assisted feedback — an estimate, not a grade"
            • [Report this feedback] button
      → [Option: revise and resubmit (attempts remaining shown)] or [Continue to next simulation]
```

**Key moments:**
- The rubric is visible *before* the student starts (BR-3).
- The student can dispute any feedback item, which flags it for human review (BR-6).

### Journey 3 — Skill-gap analysis, readiness summary and next steps

**Goal:** the student understands their gaps, gets three next steps and can share a summary.

```
[All required inputs complete (BR-7)] → [Generate skill-gap analysis]
      → [Gap view]
            • Per skill: self-rating (snapshot) vs demonstrated level (simulations)
            • Highlights: strengths, gaps, and "blind spots" (self-rating higher than evidence)
            • Skills with no evidence yet are marked "Not assessed", not "Gap"
      → [Three recommended next steps]
            • Each tied to a specific gap, with outcome, time estimate and suggested resource
      → [Career readiness summary (private draft)]
            • Student chooses which sections to include (BR-9)
      → [Share?] ──No──► [Saved privately; can return later]
                 └─Yes─► [Generate share link (expiry chosen by student)] → [Copy link]
                              → [Later: revoke link at any time from dashboard]
```

**Key moments:**
- The summary never contains a hiring recommendation or a "job-ready certificate" (BR-4).
- Sharing is always the student's decision (BR-9).

---

## 4. Business rules

| ID | Rule | Rationale |
|---|---|---|
| **BR-1** | **Snapshot first.** A student must complete the career snapshot before starting any simulation. | Provides the self-rating baseline needed for the gap analysis. |
| **BR-2** | **Age and eligibility.** Users must be at least 18 years old to register in v1. Registration is open to anyone, and a university email is optional. | Simplifies consent requirements under data protection law. University students are mostly adults. **[Assumption]** |
| **BR-3** | **Rubric transparency.** Every simulation's rubric must be visible to the student before they start. Feedback may only judge criteria that appear in the published rubric. | Fairness and trust. Stops the AI from inventing criteria. |
| **BR-4** | **AI labelling and no verdicts.** All AI-generated feedback must be labelled as AI-assisted and as an estimate. The platform must never issue a hire/no-hire verdict, a "job-ready" certification or a numerical "employability score". | Honesty; avoids overclaiming; consistent with the brand voice. |
| **BR-5** | **Attempt limit.** Each simulation allows a maximum of **3 evaluated submissions** per student in v1. Submissions rejected by automatic validation (missing files, wrong format) do not use an attempt. The **most recent evaluated attempt** counts towards the gap analysis, and earlier attempts stay visible to the student. | Encourages improvement while controlling AI costs. **[Assumption: limit to be tuned in the pilot]** |
| **BR-6** | **Human review of disputed or low-confidence feedback.** If a student reports a feedback item, or the evaluation pipeline marks a result as low-confidence, it is placed in a human review queue. An administrator or qualified reviewer responds within 5 working days in v1. In addition, at least **10% of evaluations** are randomly spot-checked during the pilot. | Quality assurance for AI feedback. **[Assumption: response time and sample rate to be confirmed]** |
| **BR-7** | **Readiness summary prerequisites.** The full skill-gap analysis and the readiness summary are generated only after the snapshot **and all three simulations** have at least one evaluated submission. Before that, the student sees a *partial progress view* that is clearly labelled as incomplete. | A readiness summary based on partial evidence would be misleading. |
| **BR-8** | **Exactly three next steps.** The system always gives exactly three next steps. Each must (a) refer to a specific identified gap or blind spot, (b) state a concrete outcome ("You're done when…"), and (c) include a time estimate. If fewer than three gaps exist, the remaining steps are "stretch" steps that build on strengths. | Focus and actionability (problem P4 in business.md). |
| **BR-9** | **Private by default; student-controlled sharing.** Summaries are private until the student creates a share link. The student chooses which sections to include, can set an expiry (7 days, 30 days, 90 days or no expiry), and can revoke a link at any time. Raw code, snapshot answers and full feedback are **never** included in a shared summary unless the student explicitly ticks them. | Data ownership and privacy. |
| **BR-10** | **No employer access or recruitment features.** v1 has no employer accounts, candidate search, ranking or contact features. Student data is never sold or shared with employers or third parties for recruitment. Employers may only take part as voluntary content reviewers and never see student data. | Keeps SkillMirror a career exploration tool, not a recruitment agency or marketplace. |
| **BR-11** | **AI-tool use declaration.** Students may use AI tools while working on a simulation, as many real workplaces allow, but must declare whether and how they used them in each submission. The declaration is shown alongside the feedback. Undeclared use is not penalised automatically in v1. | Realism and honesty. Captures data on how AI use affects learning. **[Assumption: policy to be reviewed]** |
| **BR-12** | **Data rights.** Students can export their data and permanently delete their account and all submissions. Deletion completes within 30 days and immediately deactivates all share links. Submission content is not used to train third-party AI models. | Compliance with personal data protection law in North Macedonia and Kosovo; trust. |
| **BR-13** | **Simulation versioning.** Simulations and rubrics are versioned. A student's results always record the version used. Changes to a published simulation require administrator approval, and the change does not alter results already given. | Consistent, auditable feedback. |
| **BR-14** | **Fictional scenarios only.** All simulation scenarios use fictional companies, people and data. No real company's brand, codebase or confidential material is used without written permission. | Avoids impersonation and IP issues. |

---

## 5. Simulation and rubric framework

### Rubric levels (all criteria)

| Level | Label | Meaning |
|---|---|---|
| 0 | **Not yet demonstrated** | The criterion is not addressed, or the attempt does not work |
| 1 | **Developing** | Partly addressed; important issues remain |
| 2 | **Meets junior expectations** | Addressed as a junior developer would be expected to |
| 3 | **Strong** | Exceeds junior expectations in this criterion |

### Rubric criteria per simulation (draft; to be finalised with developer reviewers)

| Criterion ID | Criterion | S1 Ship the Component | S2 Fix It in Production | S3 Wire Up the Feature |
|---|---|:-:|:-:|:-:|
| **F-1** | Meets acceptance criteria / functionality | ✅ | ✅ | ✅ |
| **HT-1** | Semantic HTML | ✅ | ✅ | — |
| **C-1** | CSS layout & responsiveness | ✅ | — | ✅ |
| **A-1** | Accessible names, labels and contrast | ✅ | ✅ | ✅ |
| **A-2** | Keyboard operability and visible focus | ✅ | ✅ | — |
| **J-1** | JavaScript logic & debugging | — | ✅ | ✅ |
| **S-1** | Async data & UI states (loading/empty/error) | — | — | ✅ |
| **Q-1** | Code readability & structure | ✅ | ✅ | ✅ |
| **Q-2** | Minimal, safe changes in an existing codebase | — | ✅ | — |
| **W-1** | Written communication (PR description, bug notes, status update) | ✅ | ✅ | ✅ |
| **W-2** | Handling ambiguity (stating assumptions, asking clarifying questions) | — | — | ✅ |

---

## 6. Junior Frontend Developer skill profile (v1 draft)

The gap analysis maps rubric criteria to these skill areas. The profile is a **draft based on the team's judgement** and must be reviewed by practising frontend developers before launch.

| Skill area | Mapped criteria | Snapshot self-rating question |
|---|---|---|
| HTML & semantics | HT-1 | ✅ |
| CSS & responsive layout | C-1 | ✅ |
| Accessibility | A-1, A-2 | ✅ |
| JavaScript & debugging | J-1 | ✅ |
| Working with data & UI states | S-1 | ✅ |
| Code quality & working in existing code | Q-1, Q-2 | ✅ |
| Professional communication | W-1, W-2 | ✅ |
| Delivering to requirements | F-1 | ✅ |

**Gap classification rule:** for each skill area, the *demonstrated level* is the average of its mapped criteria across the latest evaluated attempts, rounded down.
- **Strength:** demonstrated level of 2 or more.
- **Gap:** demonstrated level below 2.
- **Blind spot:** self-rating (converted to the same 0–3 scale) is at least 2 levels higher than the demonstrated level.
- **Not assessed:** no criteria evidence available.

---

## 7. MVP scope

### Included in version 1

| # | Feature | v1 definition |
|---|---|---|
| 1 | **Career snapshot** | One questionnaire for the Junior Frontend Developer path; about 10 minutes; results stored as the baseline |
| 2 | **Three job simulations** | S1 "Ship the Component", S2 "Fix It in Production", S3 "Wire Up the Feature", with briefs, starter files, deliverables and visible rubrics |
| 3 | **AI-assisted, rubric-based feedback** | Per-criterion levels and comments; AI labelling; report/dispute button; human review queue |
| 4 | **Skill-gap analysis** | Self-rating vs demonstrated level per skill area; strengths, gaps, blind spots |
| 5 | **Shareable career readiness summary** | One-page summary; section selection; revocable, expiring share link |
| 6 | **Three personalised next steps** | Exactly three, each tied to a gap, with outcome and time estimate |
| — | **Supporting functions** | Email sign-up/login, student dashboard with progress tracker, basic admin tools (review queue, simulation publishing), data export and deletion |
| — | **Language** | English interface in v1; Macedonian and Albanian planned once content is stable **[Assumption, see H-9]** |

### What version 1 will NOT do (excluded from version 1)

| Excluded feature | Reason |
|---|---|
| Employer accounts, candidate search, job board, applications, recruitment features | Contradicts the product vision (BR-10). **Permanently** out of scope, not only for v1 |
| Freelance gigs or paid project marketplace | Contradicts the product vision. **Permanently** out of scope |
| Additional career paths (UX, QA, backend, data, etc.) | Validate one path first |
| Educator / career centre dashboard with cohort analytics | Planned for institutional pilots (Model B). Needs consent design |
| Live in-browser code editor and code execution sandbox | Cost and security complexity. v1 uses repository links and ZIP uploads |
| Real-time AI chat tutor or mentor | Scope and cost; risk of doing the work for the student |
| Live human mentoring or code review sessions | Operationally heavy for an MVP |
| Certificates, badges or "verified" credentials | Risk of overclaiming (BR-4) |
| Payments and subscriptions | The pilot is free. Payments are added after pricing hypotheses are tested |
| Full Macedonian and Albanian localisation | After content stabilises |
| Native mobile apps | A responsive web app is sufficient for v1 |
| Gamification (leaderboards, points, rankings between students) | Conflicts with the student-owned, non-competitive positioning |
| LMS integrations (Moodle, etc.) | Later, for delivery model 2 |
