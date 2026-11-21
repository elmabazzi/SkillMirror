# SkillMirror — Business Documentation

| | |
|---|---|
| **Document** | Business case (Parts 1–4) |
| **Version** | 1.0 (final version for the university assignment) |
| **Date** | 21 November 2026 |
| **Related documents** | [brand-book.md](brand-book.md) · [rules-and-flows.md](rules-and-flows.md) |
| **Validation status** | **No customer interviews, surveys, pilots or willingness-to-pay tests have been carried out yet.** The two required customer interviews are **pending** (see [1.5](#15-customer-interviews-primary-research--pending)). Every claim about customers in this document is a hypothesis unless it cites an external source. |

---

## How to read this document

To keep the document honest, every claim is put into one of four categories:

| Label | Meaning |
|---|---|
| **[Source]** | Taken from a cited external source (see [Sources](#sources)). Secondary sources are marked as such. |
| **[Estimate]** | A number we calculated from cited sources and stated assumptions. The calculation is shown next to it. |
| **[Assumption]** | A working assumption we use for planning. It is reasonable but not yet checked. |
| **[Hypothesis H-x]** | A testable statement about customers or the market. It must be validated before we rely on it. The full list is in [Appendix A](#appendix-a--hypothesis-register). |

There are no customer quotes, interview findings or validation results in this document because none exist yet.

---

## Product vision (summary)

**SkillMirror is an AI-powered career exploration and simulation platform that helps students discover their potential, experience realistic professional tasks, identify skill gaps, and prepare for their future careers.**

- **Initial audience:** university students studying Computer Science and IT.
- **First career path:** Junior Frontend Developer.
- **What SkillMirror is not:** it is not a recruitment agency, not a marketplace that connects students with employers, and not a freelance platform. SkillMirror serves the student's own development. It does not sell students to employers.

---

# Part 1 — Problem and Target Customer

## 1.1 The problem

### Problem statement (one sentence)

> **Computer Science and IT students in North Macedonia and Kosovo, in the second half of their degree when they must choose a specialisation, an internship or a first job, cannot test whether a career such as frontend development suits them or how close they are to junior level, so they risk spending months of study time (and sometimes course fees) on the wrong path and face avoidable stress and uncertainty when they apply.**

The *who* and *when* come from the target-customer definition in [1.3](#13-target-customer). The *cost* in time, money and stress is our **[Hypothesis H-1]** and has not yet been confirmed by interviews (see [1.5](#15-customer-interviews-primary-research--pending)).

### The problem in more detail

Computer Science and IT students make career decisions with very little first-hand evidence of what the work involves or how ready they are for it.

We break this into four related problems:

| # | Problem | What it looks like for a student |
|---|---|---|
| P1 | **Unclear picture of the job** | A student knows that a "frontend developer" builds user interfaces. They do not know what an ordinary working week involves: reading tickets, working inside an existing codebase, fixing bugs, handling unclear requirements, writing pull-request descriptions, and talking to designers and product managers. |
| P2 | **Little realistic practice** | Coursework and coding-quiz platforms test isolated knowledge, such as algorithms or syntax. Students rarely do a task that is framed, constrained and judged the way workplace tasks are. |
| P3 | **Gaps they cannot see** | Without structured feedback measured against professional expectations, students cannot tell which gaps matter most. Examples include accessibility, responsive layout, state handling, code readability, Git habits and written communication. |
| P4 | **No clear next step** | Students meet a huge and growing number of courses, roadmaps and tutorials. Choosing what to do *next* becomes a problem in itself. |

## 1.2 Evidence from the regional context

The external evidence below supports the *general* existence of a skills and practical-experience gap in our target markets. It does **not** prove that students want SkillMirror's solution. That still needs to be validated (see H-1 to H-4).

**Kosovo**
- STIKK's *Kosovo IT Barometer 2023–2024* (published December 2025, survey of 115 ICT companies) reports that skills shortages persist in programming, Data/AI and cybersecurity even though graduate numbers are rising. It also says that training investment is modest, that **graduates often lack practical skills**, and that **JavaScript remains the top programming language** in the sector. **[Source: STIKK 2025]**
- Earlier STIKK skills-gap studies (2011, 2013, 2015) found a mismatch between what educational institutions teach and what ICT employers need. **[Source: STIKK 2011/2013/2015]**
- According to the Kosovo Agency of Statistics (KAS) 2024 Labour Force Survey, the overall unemployment rate in 2024 was 10.8%, the employment rate was 38.6% and the inactivity rate was 56.8%. **[Source: KAS 2025]** Youth unemployment (ages 15–24) was reported at 21.2% for Q2 2024. **[Source: Alfa Press citing KAS — secondary; to be checked against the KAS ASKdata portal]**

**North Macedonia**
- MASIT (the Macedonian Association for Information Technology) reports 23,948 employees in the ICT sector in 2024, up 10.7% from 2023. It also reports a persistent shortage of highly educated professionals and specialised skills. **[Source: MASIT 2025]**
- The OECD *Western Balkans Competitiveness Outlook 2024* attributes North Macedonia's persistent ICT skills shortage mainly to too few ICT graduates. **[Source: OECD 2024]**
- Youth (15–29) unemployment was 22.8% in Q2 2024, based on State Statistical Office data. **[Source: EU YouthWiki citing SSO — secondary]**

**Regional**
- A European Commission–backed study by the LSE on higher education and the graduate labour market in the Western Balkans surveyed 4,602 recent graduates and 1,074 employers. It includes sections on graduates' lack of prior work experience and on employer dissatisfaction with graduates' skills. **[Source: LSE / Bartlett et al. — only the table of contents was reviewed; detailed findings need to be read before citing]**

**Why JavaScript and frontend come first.** STIKK lists JavaScript as the most-used language in Kosovo's IT sector, and frontend work has a low setup barrier. Together these support starting with Junior Frontend Developer. **[Source + Assumption]**

## 1.3 Target customer

### Primary user segment (beachhead)

| Attribute | Description |
|---|---|
| **Who** | Undergraduate students in Computer Science, Software Engineering, Computer Engineering or IT programmes |
| **Where** | North Macedonia and Kosovo. Initial focus is universities in Skopje, Tetovo and Prishtina **[Assumption]** |
| **Stage** | 2nd to final year. They have basic HTML, CSS and JavaScript from coursework or self-study and are considering frontend as a career **[Assumption]** |
| **Languages** | Macedonian, Albanian and English. Most students in technical programmes are expected to read English technical material **[Assumption, H-9]** |
| **Situation** | Preparing for internships or first jobs. Unsure whether frontend suits them, and unsure how close they are to junior level **[Hypothesis H-1]** |

### Persona sketches (illustrative, not based on interviews)

These personas are **fictional planning tools**. They are not research findings and must be replaced or confirmed by real interviews.

- **"The Undecided Explorer"**, 2nd-year student. Likes building interfaces but has never worked on a "real" task, and wants to know whether frontend suits them before investing months in it.
- **"The Pre-Graduate"**, final-year student. Has completed tutorials and a few personal projects and is about to apply for internships. Wants an honest outside view of their readiness and what to fix first.
- **"The Career Switcher Inside IT"**, an IT student from a networking or systems track who is curious about frontend and wants a low-risk way to try it.

### Secondary stakeholders (not the primary user)

- **University faculties and career centres**: possible **payers** under a B2B2C model (see Part 2.4). **[Hypothesis H-6]**
- **Youth employment and digital skills programmes** run by NGOs or donors: possible **payers or distribution partners**. **[Hypothesis H-7]**
- **Employers**: in v1 their role is limited to *reviewing the realism* of simulation content as voluntary advisers. They get **no access to student data** and there is no hiring function. See the business rules in [rules-and-flows.md](rules-and-flows.md).

## 1.4 Jobs to be done (hypotheses)

| Job | Hypothesis |
|---|---|
| "Help me find out whether frontend development suits me before I commit to it." | H-1 |
| "Let me try what the work actually involves, not another quiz." | H-2 |
| "Tell me honestly, against clear criteria, where I stand and what I'm missing." | H-3 |
| "Give me a small number of concrete next steps instead of another 200-item roadmap." | H-4 |
| "Give me something credible I can show a mentor, lecturer or career adviser." | H-5 |

## 1.5 Customer interviews (primary research) — pending

> **Status: pending. No customer interviews have been carried out yet, so this document contains no interview findings or quotes.** The assignment asks for evidence from at least two real customer interviews with exact quotes. This requirement is **not yet met**, and it is reported here rather than filled with invented material.

**Limitation.** Without interviews, the problem statement in 1.1 and the hypotheses H-1 to H-5 rest on desk research (section 1.2) and the team's own judgement. The external sources show a general practical-skills gap among graduates in both countries. They do not show that students experience the specific problem SkillMirror addresses, or that they would use or pay for it.

**Plan.** Interview at least **two** CS/IT students (years 2–4), ideally one in North Macedonia and one in Kosovo, before the next submission. Then continue towards the 15–20 interviews planned in [4.5](#45-first-customer-acquisition-strategy). Record answers in the participant's own words and add exact quotes here only with their consent.

### Interview guide (about 20 minutes)

Ask about past behaviour, not opinions about SkillMirror. Do not describe the product until the last question.

1. What are you studying, and what year are you in?
2. Which kind of job do you want after your studies? How did you decide?
3. Tell me about the last time you tried to find out whether a particular IT role would suit you. What did you do?
4. How do you currently judge how ready you are for an internship or a junior job?
5. What was hardest about that? Can you give a specific example?
6. How much time (hours per week, months) have you spent on courses, tutorials or projects to prepare? Did you pay for any of them? How much?
7. Has uncertainty about your career choice caused you stress? When was it worst?
8. Who do you ask for advice (lecturers, friends, career centre, AI chatbots)? What did you get from them?
9. Have you ever done a task that felt like real work (internship, freelance job, hackathon)? What did you learn from it?
10. If you could change one thing about how students prepare for their first IT job, what would it be?
11. *(Last)* Short description of SkillMirror. Would you try it? What would make you trust the feedback? Would you, your faculty or someone else pay for it?

### Interview record template

| Field | Entry |
|---|---|
| Interview ID and date | e.g. INT-01, dd/mm/yyyy |
| Interviewee (anonymised) | Programme, year of study, university, country |
| Consent to quote | Yes / No |
| Exact quotes (verbatim) | "…" |
| Problem confirmed? | Yes / Partly / No, with evidence |
| Cost mentioned | Time / money / stress, with the interviewee's own figures |
| Current alternative used | e.g. tutorials, asking a friend, nothing |
| Hypotheses affected | H-1 … H-11 (supported / weakened) |

---

# Part 2 — Product Concept

## 2.1 The big picture

### In one sentence

> **SkillMirror is a website where computer science students try three realistic junior frontend developer tasks, get honest feedback against clear criteria, and leave with a short summary of their strengths, their gaps and three concrete next steps.**

### Who uses it, who pays, and why now

| Question | Answer |
|---|---|
| **Who uses it** | University students in Computer Science and IT programmes in North Macedonia and Kosovo, mainly in years 2–4 (see [1.3](#13-target-customer)). |
| **Who pays** | Nobody during the free pilot. Afterwards, the two main candidate payers are **students** (a low-priced premium tier, Model A) and **faculties or career centres** (an institutional licence, Model B). Youth and digital skills programmes are a third option (Model C). Which payer works best is not yet known **[Hypotheses H-6 to H-8]**; see [2.4](#24-user-vs-payer). |
| **Why now** | See the three reasons below. |

**Why now:**
1. **AI feedback has become affordable.** The Stanford AI Index 2025 reports that the inference cost of a system performing at GPT-3.5 level fell more than 280-fold between November 2022 and October 2024. **[Source: Stanford HAI 2025]** Detailed, rubric-based feedback on every submission can now be offered at a price students and faculties in the region could plausibly afford. Section 4.3 estimates about US$0.10 per evaluated submission. **[Estimate]**
2. **Entry-level software work is changing.** A Stanford Digital Economy Lab working paper finds that, in the United States, employment of early-career workers (ages 22–25) in the occupations most exposed to AI, including software developers, has fallen relative to less-exposed peers. The authors describe these as early, descriptive indicators rather than proof of cause. **[Source: Brynjolfsson, Chandar & Chen 2025, revised 2026 — US data]** If first jobs become harder to get, students need a clearer picture of their readiness earlier. Whether this trend also applies to North Macedonia and Kosovo has not been checked **[Assumption]**.
3. **More ICT students, the same practical-skills gap.** In Kosovo, ICT enrolment is rising: 7,243 bachelor students in 2022/2023 according to the Kosovo Agency of Statistics, and 8,281 in 2024/2025 according to a news report citing the same agency. STIKK reports about 20% growth in ICT bachelor enrolment between 2021/2022 and 2023/2024. At the same time, employers say graduates often lack practical skills. **[Source: KAS 2023; Zëri 2026 — secondary; STIKK 2025]** More students are therefore competing for internships and junior roles with little realistic practice.

### The journey

SkillMirror holds up a "mirror" to a student's career potential. In one short, structured experience, the student:

1. **Reflects**: completes a short **career snapshot** (interests, self-rated skills, goals, available time).
2. **Experiences**: works through **three realistic Junior Frontend Developer job simulations**, framed as workplace tasks at a fictional company.
3. **Receives feedback**: gets **AI-assisted, rubric-based feedback** on each submission against clear, published criteria.
4. **Sees their gaps**: receives a **skill-gap analysis** that compares their demonstrated level with a defined junior frontend skill profile.
5. **Shares**: generates a **career readiness summary** that they can share, if they choose, with a mentor, lecturer or adviser.
6. **Acts**: receives **three personalised recommended next steps**, each tied to a specific gap.

The long-term vision is a library of career paths, each with its own simulations, rubrics and skill profile, such as UX Designer, QA Engineer, Data Analyst or Backend Developer. **[Assumption: scope after v1]**

## 2.2 MVP features

| # | Feature | Purpose | Key design principle |
|---|---|---|---|
| 1 | **Career snapshot** | A short questionnaire (target: under 10 minutes) covering interests, self-assessed skills, goals and weekly time available | Short and honest. It frames the experience but is not a personality test |
| 2 | **Three job simulations** | Realistic tasks a junior frontend developer would get | Shaped like workplace work, not quizzes (see 2.3) |
| 3 | **AI-assisted, rubric-based feedback** | Structured feedback on each submission | Every comment links to a published rubric criterion. Clearly labelled as AI-generated and as an estimate |
| 4 | **Skill-gap analysis** | Compares the evidence from simulations, plus the snapshot's self-assessment, with the junior frontend skill profile | Shows where self-perception and demonstrated performance differ |
| 5 | **Shareable career readiness summary** | A one-page summary the student controls | Private by default. Shared by revocable link only |
| 6 | **Three recommended next steps** | Exactly three actionable steps | Each step is tied to an identified gap, with an estimated time and a concrete outcome |

## 2.3 What makes a simulation "realistic"

Simulations are written as **workplace scenarios** at a **fictional company**. They are not exercises. Each one contains:

- **A brief written as a ticket or message** from a product manager, designer or senior developer, with context, acceptance criteria and constraints.
- **Realistic artefacts**: a design specification, an existing starter codebase, a bug report, or a mock API.
- **Some ambiguity**: as in real work, not everything is specified, and the student may need to make or record assumptions.
- **Professional deliverables beyond code**: for example a pull-request description, a short status update, or notes on how a bug was reproduced.
- **A suggested time-box**, which is a recommendation and not a strict timer.

**The three v1 simulations (working titles; content still to be written):**

| # | Simulation | Scenario | Main skills assessed |
|---|---|---|---|
| S1 | **"Ship the Component"** | The product team at a fictional company needs a responsive, accessible UI component (for example a product card list with filters) built from a design spec and a ticket with acceptance criteria. | Semantic HTML, CSS layout and responsiveness, accessibility basics, matching a spec, PR description |
| S2 | **"Fix It in Production"** | A user-reported bug in an existing small JavaScript/React codebase (for example form validation that fails for some inputs and is not keyboard-accessible). The student must reproduce, fix and explain it. | Reading unfamiliar code, debugging, minimal safe changes, accessibility, written bug report and fix notes |
| S3 | **"Wire Up the Feature"** | Connect a UI to a mock REST API with loading, empty and error states. The requirements contain one deliberate gap that the student should spot and raise. | Asynchronous data handling, UI state management, edge cases, communicating with stakeholders (a clarifying question and a status update) |

The rubric criteria and skill profile are defined in [rules-and-flows.md](rules-and-flows.md). Before launch, the realism of all three simulations must be reviewed by practising frontend developers. **[Hypothesis H-2: students perceive these as more realistic and more useful than coding quizzes]**

## 2.4 User vs. payer

SkillMirror's **user** is always the student. The **payer** can differ, and finding the right payer is one of the most important open questions.

| Model | User | Payer | Why it might work | Main risk |
|---|---|---|---|---|
| **A. B2C freemium** | Student | Student (premium tier) | Direct relationship, fast iteration | Students' willingness and ability to pay in the region is untested **(H-8)** |
| **B. B2B2C institutional licence** | Student | University faculty or career centre | Fits the institution's employability goals and allows cohort-scale distribution | Slow procurement and budget cycles **(H-6)** |
| **C. Programme partner** | Student / programme participant | NGO, donor-funded youth or digital skills programme, bootcamp | Existing budgets for employability tools; cohort delivery | Funding depends on grant cycles; mission must stay aligned **(H-7)** |

**Recommended starting position [Assumption]:** start with a **free student pilot** to test value (H-1 to H-5). Then test **Model B** with one or two faculties or career centres, and keep **Model A** as a low-priced premium tier. All payer models must keep the student as the owner of their data and results.

**Explicitly rejected payer models**, because they conflict with the product vision:
- Employers paying for access to candidate profiles, rankings or contact details (recruitment marketplace).
- Placement or hiring fees (recruitment agency).
- Commissions on freelance work (freelance platform).

## 2.5 Three alternative ways to solve the problem

The same problem (students cannot test a career or see their readiness) could be solved in other ways. We compared three realistic alternatives before choosing SkillMirror's approach.

| Alternative approach | How it would work | Strengths | Weaknesses |
|---|---|---|---|
| **A. Internship or work-placement programme** | Arrange short placements at local IT companies so students try the real job | The most realistic experience possible | Places are limited and depend on employers. Students often need to be ready *before* they get one. It would also turn the project into a placement or recruitment service, which the product vision rules out |
| **B. Human mentoring and code review** | Practising developers or career advisers review students' work and give personal guidance | Expert, personal and trusted feedback | Expensive and hard to scale. Quality depends on each mentor, and the number of available mentors limits how many students can be helped |
| **C. Structured course or bootcamp with projects** | A frontend course with graded projects, delivered by us or a partner | Teaches skills systematically; familiar format | Assumes the student has already chosen frontend. It mostly teaches rather than tests readiness, takes weeks or months, and the region already has providers (see 3.1) |

### Why SkillMirror's approach is preferable

SkillMirror combines the strongest parts of the three alternatives while avoiding their main weaknesses:
- **Realism without a placement (vs. A).** Simulations recreate typical workplace tasks at a fictional company: tickets, existing code, bugs and unclear requirements. Any student can take part, at any time, without depending on employers and without becoming a recruitment service.
- **Consistent feedback at low cost (vs. B).** Every submission is judged against the same published rubric. AI makes this affordable for every student, and human reviewers spot-check results and handle disputes (business rule BR-6) instead of reviewing everything.
- **Exploration before commitment (vs. C).** The full journey (snapshot, three simulations, summary) is designed to take hours rather than months, and it ends in three targeted next steps instead of a full course. **[Assumption: completion time to be measured in the pilot]**

Whether students value this combination more than the alternatives is still **[Hypothesis H-2, H-3, H-10]**.

## 2.6 Alternative delivery models

Besides a self-serve web application, the same core content (snapshot, simulations, rubrics, gap analysis, next steps) could be delivered as follows:

| Delivery model | Description | When it fits |
|---|---|---|
| **1. Self-serve web platform** *(v1 default)* | A student signs up and completes everything online at their own pace | Individual students; lowest cost per user |
| **2. Embedded in a university course** | A lecturer assigns the simulations as part of a web-development course or capstone module, and students get the same feedback | Faculties that want practical, industry-shaped assignments |
| **3. Facilitated workshop / career sprint** | A 1–2 day in-person or online cohort event run with a career centre: briefing, simulations, group debrief | Career weeks, student associations, onboarding for youth programmes |
| **4. Partner-integrated assessment layer** | Bootcamps or training providers use SkillMirror simulations as an independent readiness check at the start or end of their programmes | Training providers that want an outside view of progress |
| **5. Low-bandwidth / hybrid** | Simulation briefs and rubrics delivered as downloadable packs; submissions uploaded later | Students with unreliable connectivity or older devices **[Assumption: need not yet confirmed]** |

Delivery models 2–5 are **not in v1**. They are listed so that the content architecture (simulations, rubrics, skill profile) stays reusable across them.

---

# Part 3 — Market Research

> **Method and limits.** Desk research was carried out on 21 November 2026 using publicly available sources: company websites, university career-centre pages, official statistics and industry-association reports. Prices were checked on the providers' own pages on that date unless marked otherwise. They are in US dollars unless stated, exclude tax, and change often. No primary research (interviews or surveys) has been done.

## 3.1 Competitor and alternative landscape

### Direct and near-direct competitors (international)

| Competitor | What it offers | Price model (as found) | Strengths | Gaps relative to SkillMirror |
|---|---|---|---|---|
| **Forage** ([theforage.com](https://www.theforage.com/)) | Free, self-paced virtual job simulations designed by employers. Example: Skyscanner's *Front-End Software Engineering* simulation (JavaScript, React, Skyscanner's Backpack design system; about 1–2 hours) | **Free for students** ("100% free, open access and self-paced", Forage website); employers pay Forage to build simulations **[Source: Forage; university career pages]** | Closest concept; strong employer brands; widely promoted by university career centres | Employer-funded, so the business is oriented toward recruiting pipelines. Simulations are company-specific and not built around a personal skill-gap analysis or a structured readiness profile across a career path. Not localised to our region **[Assumption]** |
| **Frontend Mentor** ([frontendmentor.io](https://www.frontendmentor.io/pro)) | Design-to-code challenges with design files; premium "realistic" projects; AI code review for Pro members; a Teams product for organisations | Free tier, plus a Pro subscription billed monthly or yearly. The monthly plan includes 2 premium challenges and 5 Figma files per month; the yearly plan is unlimited. **The Pro price is not shown on the public page** (regional discounts are applied at checkout). An undated third-party report quotes about US$12/month or US$96/year, which we could not verify **[Source: Frontend Mentor Pro page; Starter Story — secondary]** | High-quality frontend practice; strong community; portfolio orientation | Mostly "build this design". Little workplace context such as bugs in existing code, ambiguity or stakeholder communication. No career exploration or gap analysis against a defined skill profile **[Assumption based on public description]** |
| **GreatFrontEnd** ([greatfrontend.com](https://www.greatfrontend.com/interviews/pricing)) | Frontend interview preparation (questions, study plans) and a "Projects" product | Interviews: lifetime plan seen at US$180 (discounted from US$360, labelled limited-time); Projects: free plan and paid plans **[Source: GreatFrontEnd pricing page, earlier check; the page could not be reloaded on 21 Nov 2026 (rate-limited), so recheck before relying on it]** | Deep frontend focus; credible content | Interview-preparation focus. Aimed at people already committed to frontend, not at career exploration |
| **Codecademy** ([codecademy.com](https://www.codecademy.com/pricing)) | Interactive courses and career paths (including Front-End Engineer) plus interview preparation | Basic: free. **Plus:** US$14.99/month (or US$11.99/month billed annually). **Pro:** US$19.99/month (or US$15.99/month billed annually) **[Source: Codecademy pricing page]** | Structured learning paths; strong brand | Teaches skills but does not simulate the job. No realistic workplace tasks or readiness assessment |
| **Algorithmic coding platforms** (e.g. LeetCode, HackerRank, Codewars) | Algorithm and data-structure problems, some assessments | Freemium | Good for technical interview practice | Quiz-style; different from everyday frontend work. This is the format SkillMirror deliberately avoids |
| **Free learning resources** (e.g. [freeCodeCamp](https://www.freecodecamp.org/), [MDN](https://developer.mozilla.org/), [roadmap.sh](https://roadmap.sh/), YouTube) | Curricula, documentation, roadmaps, tutorials | Free | Free, comprehensive, trusted | No personal feedback, no simulation of workplace context, and the sheer volume can overwhelm students (problem P4) |

### The do-nothing alternative

| Alternative | What students do instead | Cost | Strengths | Weaknesses |
|---|---|---|---|---|
| **Do nothing / do it yourself** | Keep studying, list their own skills in a notebook or spreadsheet, ask a friend, classmate or lecturer for an opinion, and apply for internships to "see what happens" | Free (apart from their time) | No cost, no new tool to learn, and advice from people they trust | No realistic practice and no consistent criteria. The student's self-assessment is never checked against evidence, advice depends on who they happen to know, and gaps are often discovered only after rejections **[Assumption; to be tested in interviews, H-1]** |

This is the alternative most students currently use, so it is SkillMirror's most important competitor **[Assumption]**.

### Regional alternatives (North Macedonia and Kosovo)

| Alternative | Description | Relationship to SkillMirror |
|---|---|---|
| **Brainster** (Skopje, [brainster.co](https://brainster.co/)) | Ed-tech organisation. Its higher vocational school "Brainster Next" appears in the official 2023/2024 enrolment statistics with 98 students **[Source: SSO 2024]**. On 21 Nov 2026 its website redirected to an AI-education page listing three AI academies at **€1,050** each and an AI Fundamentals course at **€310** (enrolment marked closed); no frontend programme or price was listed on that page **[Source: Brainster website]** | A training provider, not a simulation or readiness tool. **Potential partner** (delivery model 4) as well as a competitor for students' attention and budget |
| **Cacttus Education** (Prishtina, [cacttus.education](https://cacttus.education/en)) | Accredited institution offering two-year professional IT study programmes, including web and mobile application development **[Source: cacttus.education]** | A training provider. Potential partner or channel. Tuition was not checked |
| **University courses and career centres** (e.g. FINKI/UKIM in Skopje; universities in Prishtina and Tetovo) | Formal CS/IT education; career centres offer CV help, events and internship information | **Channel and possible payer** (Model B). They are the default alternative students already use |
| **Internships and student programmes** at local IT companies | Real work experience | The "gold standard" alternative, but the number of places is limited and an internship is something students need to be *ready* for. SkillMirror helps students prepare for internships; it does not place them |
| **General AI chatbots** (e.g. ChatGPT, Claude, Gemini) | Students can ask an AI to review their code or suggest a learning plan | **Strong do-it-yourself substitute.** SkillMirror's difference must come from structured, realistic scenarios, consistent rubrics, a defined skill profile and a shareable summary, not from "having AI" **[Hypothesis H-10]** |

### Positioning summary

```
                        Realistic workplace context
                                   ▲
                                   │
                  Forage ●         │        ● SkillMirror (target position)
         (employer-specific,       │          (career path + gap analysis +
          recruiting-oriented)     │           next steps, student-owned)
                                   │
 Generic / no personal  ◄──────────┼──────────►  Personalised, structured
 feedback                          │             feedback & guidance
                                   │
     LeetCode / HackerRank ●       │      ● Frontend Mentor / GreatFrontEnd
     freeCodeCamp / roadmap.sh ●   │      ● AI chatbots (unstructured)
                                   │
                                   ▼
                      Quiz / tutorial / isolated exercise
```
*Qualitative positioning based on desk research and our own judgement. It is not measured data.*

## 3.2 SkillMirror's intended differentiation

1. **Career exploration first, skills second.** The question is "Is this career for me, and how close am I?", not only "Can you solve this?"
2. **Realistic workplace simulations**, including existing codebases, bugs, ambiguity and communication deliverables.
3. **Transparent rubric-based feedback** tied to a published junior frontend skill profile.
4. **A focused output**: one readiness summary and exactly three next steps.
5. **Student-owned and independent of employers**: no recruiting incentives shape the assessment.
6. **Regional relevance**: examples, language support and partnerships aimed at North Macedonia and Kosovo. **[Hypothesis H-9: localisation matters to users]**

Each of these must be tested with students. None has been validated yet.

### Why a student might choose SkillMirror instead

| Instead of… | A student might choose SkillMirror because… |
|---|---|
| Doing nothing / asking friends | It replaces guesswork with evidence: realistic tasks judged against the same published criteria for everyone |
| Forage | It is built around the student's own career question and readiness profile rather than one employer's recruiting pipeline, and the results belong to the student |
| Frontend Mentor, GreatFrontEnd, Codecademy | It tests whether the student is ready for the job (bugs, existing code, unclear requirements, written communication) instead of teaching or drilling isolated skills, and it ends with only three next steps |
| A general AI chatbot | It offers structured scenarios, a consistent rubric and skill profile, human spot-checks and a shareable summary, instead of answers that depend on how the student phrases the question |
| Local courses and bootcamps | It costs far less and takes hours rather than months, so it can help a student decide *whether* to invest in a course |

These reasons are our expectations, not findings **[Hypotheses H-2, H-3, H-5, H-10]**.

## 3.3 Market opportunity in North Macedonia and Kosovo

### Supporting market signals

| Signal | Market | Source |
|---|---|---|
| ICT sector employment grew 10.7% to 23,948 employees in 2024 | North Macedonia | MASIT 2025 |
| Persistent shortage of highly educated professionals and specialised skills | North Macedonia | MASIT 2025; OECD 2024 |
| Skills shortages in programming; graduates often lack practical skills; JavaScript is the top language | Kosovo | STIKK IT Barometer 2023–2024 |
| ICT is one of Kosovo's few industries with a positive trade balance | Kosovo | OECD Competitiveness Outlook 2024 (Kosovo) |
| High youth unemployment (about 21–23% in 2024, varying by age band and quarter) | Both | KAS via Alfa Press; SSO via EU YouthWiki (secondary) |
| 52,316 undergraduate students in 2023/2024, of whom about 7,500 were in CS/IT faculties (see estimate below) | North Macedonia | SSO 2024 |
| 7,243 ICT bachelor students in 2022/2023; about 20% growth in ICT bachelor enrolment between 2021/2022 and 2023/2024 | Kosovo | KAS 2023; STIKK IT Barometer 2023–2024 |
| FINKI (Skopje) published an undergraduate admission quota of 800 students (year not stated on the page) | North Macedonia | FINKI website: a quota, *not* an enrolment count |
| About 3,200 ICT graduates per year in Kosovo; only 35–40% reportedly meet commercial employment standards | Kosovo | **Secondary** (Kitalent article citing a 2024 STIKK/GIZ analysis). **Original report not reviewed; do not use as a headline figure until verified** |

### Market size estimate: Kosovo and North Macedonia

The estimate counts **students**, because students are the users in every payer model. It uses the latest official enrolment tables we could find and shows every step. **All results below are [Estimates]; the shares and conversion rates are [Assumptions].**

**Method**

```
Step 1  All CS/IT bachelor students (both countries)
Step 2  Serviceable students (SAM) = CS/IT students in year 2 or later
Step 3  Students interested in frontend/web careers = SAM × share interested   ← H-11
Step 4  Illustrative revenue = Step 3 × conversion × price (Model A)
                             or faculties × students × price per student (Model B)
```

**Step 1–2, North Macedonia** — State Statistical Office (SSO), *Students enrolled in undergraduate studies… 2023/2024*, table T-01 (published 3 July 2024). We counted faculties whose main subject is computer science or informatics. **[Source: SSO 2024]**

| Institution (faculty) | All years | Year 2 or later |
|---|--:|--:|
| UKIM – Faculty of Computer Science and Engineering (FINKI), Skopje | 4,722 | 3,746 |
| South East European University – Contemporary Sciences and Technologies, Tetovo | 975 | 614 |
| UKLO – Faculty of Information and Communication Technologies, Bitola | 468 | 295 |
| UGD – Faculty of Computer Sciences, Shtip | 368 | 169 |
| University for Information Science and Technology, Ohrid (whole university) | 314 | 187 |
| Mother Teresa University – Faculty of Information Sciences, Skopje | 222 | 124 |
| American College Skopje – Faculty of Computer Science and IT | 218 | 127 |
| AUE-FON University – Faculty of Informatics, Skopje | 76 | 49 |
| University of Skopje – Faculty of Informatics | 67 | 53 |
| European University – Faculty of Informatics, Skopje | 59 | 57 |
| **Total, CS/IT faculties** | **7,489** | **5,421** |
| *Broader range: + UKIM Faculty of Electrical Engineering and Information Technologies (991) and IBU Faculty of Engineering (776), which also teach non-IT subjects* | *9,256* | *6,672* |

**Step 1–2, Kosovo** — Kosovo Agency of Statistics (KAS), *Higher education statistics by field of study 2022/2023* (published October 2023), ISCED-F field "Information and Communication Technologies". **[Source: KAS 2023]**

| Indicator | Students |
|---|--:|
| All ICT bachelor students, 2022/2023 (public universities and private colleges) | 7,243 |
| ICT bachelor students enrolled for the first time, 2022/2023 | 2,701 |
| **Year 2 or later (approximation: all students minus first-time students)** | **4,542** |
| *For comparison: ICT bachelor students in 2024/2025, as reported by Zëri citing a KAS chart (secondary, not checked against the KAS table)* | *8,281* |

**Step 2 result: serviceable students (SAM)**
- Lower estimate: 5,421 (North Macedonia) + 4,542 (Kosovo) = **about 9,960 students**.
- Upper estimate: 6,672 (North Macedonia, broader range) + 5,193 (Kosovo, 4,542 scaled up to the 2024/2025 total of 8,281) = **about 11,870 students**.

**Step 3: students interested in frontend/web careers.** No data exists for this share, so we show three scenarios **[Assumption, H-11]**:

| Share interested | Lower SAM (9,963) | Upper SAM (11,865) |
|---|--:|--:|
| 20% | ~1,990 | ~2,370 |
| 35% (planning case) | ~3,490 | ~4,150 |
| 50% | ~4,980 | ~5,930 |

**Step 4: what this could mean in revenue (illustration only).**
- **Model A (students pay):** 3,487 interested students × 5% buying a €12 career-path pass ≈ **€2,100 per year**. **[Assumption: 5% conversion and the €12 midpoint of H-8b]**
- **Model B (faculties pay):** 2 faculties × 300 students × €8 per student ≈ **€4,800 per year**. **[Assumption: midpoint of H-6a]**

**Conclusion.** With about 10,000–12,000 serviceable students, **SkillMirror's home market is small**. Student payments alone would not cover even part-time salaries. This supports the strategy in 2.4: use the region to validate the product cheaply, rely mainly on institutional and programme payers, and later add career paths and other Western Balkan markets **[Assumption]**. It does not prove demand; that requires the interviews and pilot.

**Limitations of the estimate**
- **Different years:** North Macedonia uses 2023/2024; the official Kosovo figure is from 2022/2023. The 2024/2025 Kosovo figure comes from a news report.
- **Different classifications:** North Macedonia is counted by faculty and Kosovo by ISCED-F field. Some CS students in North Macedonia sit inside broader faculties (for example at the University of Tetovo) and are not counted. Some counted faculties include non-programming IT subjects.
- **Year of study:** "Year 2 or later" in Kosovo is approximated from first-time enrolments. The North Macedonia figures include part-time students.
- **Reachability:** not every enrolled student is active, reachable or interested in career exploration.
- **Revenue figures** use untested prices and conversion rates and are illustrations, not forecasts.

**Data still needed:** the share of students considering frontend or web careers (student survey), and willingness to pay for students and institutions (pricing interviews and pilots).

### Market opportunity assessment (qualitative)

- **Demand-side signal:** sector reports in both countries describe skills and practical-experience gaps among graduates. **[Source]**
- **Supply-side gap:** the international simulation tools we reviewed are mainly in English, tied to employer pipelines, and not aimed at the region. Local providers mostly sell training rather than readiness assessment. **[Assumption based on desk research]**
- **Constraint:** both markets are small, so long-term viability probably depends on (a) institutional or programme payers and (b) expanding to more career paths and other Western Balkan markets. **[Assumption]**
- **Risk:** free and well-funded alternatives (Forage, free resources, general AI chatbots) set user expectations at "free". **[Assumption]**

---

# Part 4 — Business Model

## 4.0 Lean Canvas (one page)

| Block | SkillMirror |
|---|---|
| **1. Problem** | (1) CS/IT students cannot test whether a career such as frontend suits them before committing. (2) They get little realistic, workplace-style practice. (3) They cannot see which gaps matter or what to do next. **[H-1 to H-4]** |
| **Existing alternatives** | Doing nothing / asking friends; Forage; Frontend Mentor; Codecademy; free tutorials; general AI chatbots; local courses (see 3.1) |
| **2. Customer segments** | **Users:** CS/IT students, years 2–4, in North Macedonia and Kosovo. **Payers (to be validated):** students (premium), faculties and career centres, youth and digital skills programmes |
| **Early adopters** | Final-year and pre-internship students who are unsure about frontend, reached through our own universities and web-development courses **[Assumption]** |
| **3. Unique value proposition** | **See your career before you choose it.** Try three realistic junior frontend tasks, get honest rubric-based feedback, and leave with a readiness summary and three next steps |
| **High-level concept** | "A flight simulator for your first developer job" **[Assumption: wording to be tested]** |
| **4. Solution** | Career snapshot · three workplace simulations · AI-assisted rubric feedback with human spot-checks · skill-gap analysis · shareable readiness summary · exactly three next steps |
| **5. Channels** | Own university network, web-development lecturers, career centres (free workshops), student tech clubs and events, Instagram and LinkedIn (see 4.5) |
| **6. Revenue streams** | Free pilot first. Then a one-off career-path pass or small monthly fee for students, institutional licences per student or per faculty, and per-cohort programme partnerships (see 4.2) |
| **7. Cost structure** | Content writing and expert review (largest up-front cost); AI inference, hosting, database, email and domain (about US$22/month in the pilot, see 4.3); legal review before a paid launch |
| **8. Key metrics** | Snapshot starts; simulation and full-journey completion rates; "realistic" and "fair feedback" ratings; share-link use; next steps started within 2 weeks; AI cost per completed journey; institutions willing to discuss a paid pilot (see 4.5) |
| **9. Unfair advantage** | None proven yet. Potential: a rubric and simulation library reviewed by local developers, local-language and regional context, and trust built through student data ownership and independence from employers **[Assumption]** |

## 4.1 Business model overview

| Element | Description |
|---|---|
| **Value proposition (student)** | Find out whether frontend development suits you, try realistic work, get honest rubric-based feedback, and leave with a clear readiness summary and three next steps |
| **Value proposition (institution)** | A ready-made, industry-shaped practical layer for CS/IT students, with student-consented cohort insights (insights are a *later* feature, not in v1) |
| **Customer segments** | Students (users, and payers in Model A); faculties and career centres (Model B); youth and digital skills programmes and bootcamps (Model C) |
| **Channels** | University partnerships, student associations, tech communities, social media, events (see 4.5) |
| **Key activities** | Writing simulations and rubrics, AI feedback quality control, partnerships, community building |
| **Key resources** | Simulation and rubric library, junior frontend skill profile, AI feedback pipeline, practising developers as content reviewers |
| **Key partners** | Faculties and career centres, student associations, industry associations (e.g. MASIT, STIKK) for content credibility, volunteer developer reviewers |
| **Revenue streams** | Premium student tier (Model A); institutional licences (Model B); programme partnerships (Model C) |
| **Cost structure** | See 4.3 |

## 4.2 Pricing hypotheses

> **All prices below are untested hypotheses.** They are starting points for willingness-to-pay interviews and pilot offers, not decisions. Prices are in EUR. Kosovo uses the euro; in North Macedonia, prices would be shown in MKD at the prevailing rate.

### Model A — Student freemium

| Tier | Includes | Hypothesised price | Rationale |
|---|---|---|---|
| **Free** | Career snapshot; 1 full simulation with rubric feedback; partial progress view (full gap analysis requires all three simulations) | €0 | Lets students try the product; must compete with free alternatives |
| **Student Plus** | All 3 simulations; full gap analysis; shareable readiness summary; 3 next steps; resubmissions within the attempt limit | **H-8a:** €4–6 per month, or **H-8b:** a one-off "career path pass" of €9–15 | Kept below international subscriptions (e.g. Codecademy Pro at US$15.99–19.99/month, see 3.1) because of regional purchasing power **[Assumption]** |

Test whether a **one-off pass per career path** works better than a subscription. The product has a natural end point (a completed readiness summary), which may suit a one-off purchase. **[Hypothesis H-8c]**

**Proposed pricing model (summary).** Our leading proposal is a **one-off career-path pass (€9–15) for students**, alongside **per-student annual licences for institutions**. A monthly subscription is kept only as a test option. A one-off price matches a journey with a clear end and is likely to be easier for students to accept than a recurring charge **[Assumption]**. All three are untested **[Hypotheses H-6, H-8]**, and no money is charged during the pilot (payments are excluded from v1; see [rules-and-flows.md](rules-and-flows.md)).

### Model B — Institutional licence

| Option | Hypothesised price | Notes |
|---|---|---|
| **Pilot** | Free, or a nominal fee, for one semester and one cohort | Purpose: collect usage and outcome evidence |
| **Per-student annual licence** | **H-6a:** €5–12 per student per year | Price drops with volume |
| **Faculty flat licence** | **H-6b:** €1,000–3,000 per year per faculty | Simpler for procurement; must be checked against real budgets |

### Model C — Programme partnership

Priced per cohort, for example **H-7a:** €8–15 per participant. These partnerships could also take the form of grant-funded collaborations.

## 4.3 Cost structure

> Cost figures are **planning assumptions** to be replaced with real quotes. AI and hosting prices change often, so check current provider price lists before relying on any estimate.

### One-off / up-front costs (MVP)

| Cost item | Description | Planning note |
|---|---|---|
| **Simulation & rubric content** | Writing 3 simulations, starter code, mock APIs, rubrics and model solutions; review by practising developers | The largest effort. Initially student-team time plus voluntary or paid expert review **[Assumption]** |
| **MVP product build** | Web application, AI feedback pipeline, summaries | Student-team time during the course. Not in scope for this document |
| **Brand & visual identity** | Logo and identity (see [brand-book.md](brand-book.md)) | **Completed** by the team and approved on 21 November 2026; no external cost |
| **Legal basics** | Privacy policy and terms; compliance review under North Macedonia's Law on Personal Data Protection (2020, GDPR-aligned) and Kosovo's Law No. 06/L-082 on Protection of Personal Data | A lawyer's review is recommended before any paid launch **[Assumption]** |

### Recurring costs

| Cost item | Driver | Estimation method |
|---|---|---|
| **AI inference** | Number of evaluated submissions × tokens per evaluation | `cost ≈ submissions × (input tokens × input price + output tokens × output price)`. Must be measured during the pilot and capped by the attempt limits in the business rules |
| **Hosting, database, storage** | Active users, stored submissions | Free or low-cost tiers are likely sufficient for the pilot **[Assumption]** |
| **Code execution / preview** | Running or previewing submitted frontend code | Prefer static previews to keep costs and security risk low **[Assumption]** |
| **Content maintenance** | Keeping simulations current with frontend practice | Planned review at least once per academic year **[Assumption]** |
| **Human quality review** | Spot-checking AI feedback against rubrics | Essential for trust. Sample-based (see business rules) |
| **Marketing & events** | Campus events, materials | Kept low through partnerships and student associations |
| **Payment processing** | Transaction fees (Models A and C) | Depends on the provider. Check provider availability in North Macedonia and Kosovo **[Open question]** |

### Estimated monthly operating costs

Prices were checked on the providers' pricing pages on 21 November 2026, in US dollars, excluding tax. The providers named are examples of typical low-cost options, not final choices **[Assumption]**.

**AI cost per evaluated submission [Estimate].** We assume one evaluation reads about 30,000 input tokens (brief, rubric, model solution and the student's code and written deliverables) and writes about 4,000 output tokens of feedback **[Assumption: to be measured in the pilot]**.
- With Claude Sonnet 5.5 (US$2 per million input tokens, US$10 per million output tokens): 30,000 × $2/1M + 4,000 × $10/1M = $0.06 + $0.04 = **about US$0.10 per evaluation**. The Batch API halves this to about US$0.05 when feedback does not need to be instant. **[Source: Claude API pricing]**
- A smaller model (Claude Haiku 5.5, US$0.10 / US$0.50 per million tokens) would cost about US$0.005 per evaluation. Whether its feedback quality is good enough has not been tested.
- We plan with an average of **4 evaluations per active student per month**. The upper limit is 9: 3 simulations × 3 evaluated attempts (business rule BR-5).

| Cost item | Pilot (≈50 active students/month) | Early paid phase (≈1,000 active students/month) | Basis |
|---|--:|--:|---|
| **AI feedback** | US$20 (200 evaluations × $0.10) | US$400 (4,000 evaluations × $0.10) | Estimate above |
| **Web hosting** (e.g. Vercel) | US$0 (Hobby plan) | US$20 (Pro plan) | Vercel pricing. The Hobby plan's terms of use must be checked before any commercial use |
| **Database, login and file storage** (e.g. Supabase) | US$0 (Free plan: 500 MB database, 1 GB files, 50,000 monthly active users) | US$25 (Pro plan: 8 GB database, 100 GB files) | Supabase pricing |
| **Transactional email** (sign-up, notifications; e.g. Resend) | US$0 (Free plan: 3,000 emails/month, 100/day) | US$20 (Pro plan: 50,000 emails/month) | Resend pricing |
| **Domain name** | about US$1 (≈US$12.20/year for a .dev domain, see brand book) | about US$1 | Cloudflare Registrar sells at cost; .dev price from a price-comparison site (secondary) |
| **SMS** | US$0 | US$0 | Not used. v1 has email sign-up only (see MVP scope in [rules-and-flows.md](rules-and-flows.md)) |
| **Payment processing** | US$0 | % of revenue (provider not yet chosen) | Payments are excluded from v1 |
| **Total (excluding people's time)** | **≈ US$21–22 per month** | **≈ US$466 per month** | **[Estimate]** |

**What is not included:** the team's own time, expert content review, legal review, marketing materials and taxes. In the pilot, the largest real cost is people's time, not technology.

### Unit economics to be measured during the pilot

- Average AI cost per completed simulation and per full journey
- Completion rate of the full journey (snapshot → 3 simulations → summary)
- Free-to-paid conversion (Model A) and cost per institutional pilot (Model B)

## 4.4 Key risks

| Risk | Impact | Mitigation |
|---|---|---|
| AI feedback is inaccurate or inconsistent | Loss of trust; harmful advice | Rubric-constrained prompts; model solutions; human sample review; clear "AI-generated estimate" labelling |
| Students see simulations as "just more homework" | Low completion | Realism review by developers; strong workplace framing; short time-boxes |
| Low willingness to pay (students) | No B2C revenue | Prioritise institutional (B) and programme (C) payers |
| Slow institutional sales | Delayed revenue | Free pilots that produce evidence; start with career centres and individual lecturers |
| Drift toward recruitment marketplace | Loss of mission and student trust | Business rule BR-10 (no employer access to student data); rejected revenue models in 2.4 |
| Free alternatives (Forage, AI chatbots) | Weak differentiation | Focus on the structured career-path journey, rubrics and the student-owned summary |
| Data protection non-compliance | Legal and reputational harm | Data minimisation, consent, deletion rights, legal review before launch |

## 4.5 First customer acquisition strategy

**Goal for the first phase [Assumption]:** recruit about **30–50 CS/IT students** for a free pilot across at least two universities (one in North Macedonia, one in Kosovo). The aim is to learn, not to earn revenue.

### Step 1 — Problem interviews (before building further)
- Run **15–20 semi-structured interviews** with CS/IT students (years 2–4), plus **3–5 interviews** with career centre staff or lecturers and **3–5** with practising frontend developers (to check realism).
- Use a written interview guide, record findings honestly, and update this document's hypothesis register. **No results exist yet.**

### Step 2 — Finding the first ten customers

The first ten "customers" are **pilot users**: students who complete the free journey and give feedback. No payment is expected from them.

| # | Channel | Concrete action | Target |
|---|---|---|--:|
| 1 | **Our own classmates and course groups** | Personal message in our year's course chat groups at our own university, with a short explanation and a sign-up link | 4 students |
| 2 | **One web-development lecturer** | Ask one lecturer to mention the pilot in class as optional practice for the current web-development course | 3 students |
| 3 | **A student association or tech club at a second university** | Ask one student IT club, ideally in the other target country, to share the pilot in its channel | 2 students |
| 4 | **The two interviewees** | Invite the students interviewed in 1.5 to try the pilot | 1 student |
| | **Total** | | **10 students** |

Each person is asked for 15 minutes of feedback afterwards. Channels that produce the first users are then scaled up to reach the 30–50-student pilot below.

### Step 3 — Pilot recruitment channels

| Channel | Action | Why |
|---|---|---|
| **Our own university network** | Classmates, student associations, course groups | Fastest and cheapest access to the target user |
| **Lecturers of web-development courses** | Offer the simulations as optional practice (a preview of delivery model 2) | Builds credibility with faculty and shows usage |
| **Career centres** | Offer a free "Frontend Career Sprint" workshop (delivery model 3) | Also tests the institutional-payer hypothesis |
| **Tech communities & events** | Local developer meetups, hackathons, student tech clubs, community groups | Reaches motivated students |
| **Industry associations** | Introductory contact with MASIT (North Macedonia) and STIKK (Kosovo) to ask for help finding developer reviewers | Content credibility. **Not** for recruitment of students by companies |
| **Social media** | Instagram and LinkedIn posts in Macedonian, Albanian and English | Low-cost awareness |

### Step 4 — Pilot success metrics (targets are assumptions to be revised)

| Metric | Initial target **[Assumption]** |
|---|---|
| Students who start the snapshot | 30–50 |
| Complete at least 1 simulation | ≥ 60% of starters |
| Complete the full journey (all 3 simulations + summary) | ≥ 30% of starters |
| Rate simulations as "realistic" (post-pilot survey, 1–5 scale) | Average ≥ 4.0 |
| Agree the feedback was fair and useful | ≥ 70% |
| Would recommend to a classmate | ≥ 60% |
| Career centres or faculties willing to discuss a paid pilot | ≥ 1 |

### Step 5 — Decide and iterate
Use pilot evidence to decide (a) which payer model to pursue, (b) which simulation changes are needed and (c) whether to add a second career path.

---

## Appendix A — Hypothesis register

| ID | Hypothesis | How to validate | Status |
|---|---|---|---|
| H-1 | CS/IT students are uncertain whether frontend suits them and want a low-risk way to explore it | Problem interviews; snapshot data | **Not validated** |
| H-2 | Students find workplace-style simulations more realistic and useful than coding quizzes | Pilot survey; developer realism review | **Not validated** |
| H-3 | Students trust rubric-based AI feedback when criteria are transparent | Pilot survey; comparison with human-reviewed samples | **Not validated** |
| H-4 | Exactly three focused next steps are more actionable than long roadmaps | Pilot follow-up: do students start a next step within 2 weeks? | **Not validated** |
| H-5 | Students value a shareable readiness summary to show mentors or advisers | Share-link usage rate; interviews | **Not validated** |
| H-6 | Faculties or career centres will pay for SkillMirror (H-6a/b price ranges) | Institutional interviews; paid pilot offer | **Not validated** |
| H-7 | Youth and digital skills programmes or bootcamps will pay or partner (H-7a) | Partner conversations | **Not validated** |
| H-8 | Some students will pay a small amount (H-8a subscription, H-8b pass, H-8c pass preferred) | Willingness-to-pay interviews; landing-page price test | **Not validated** |
| H-9 | Local-language support and regional context increase engagement | Pilot A/B test or interviews | **Not validated** |
| H-10 | Students see SkillMirror as more valuable than asking a general AI chatbot | Interviews; pilot comparison questions | **Not validated** |
| H-11 | A meaningful share of CS/IT students is considering frontend or web careers | Student survey | **Not validated** |

---

## Sources

Accessed 21 November 2026 via web search. "Secondary" means the source reports figures from another organisation, and the original should be checked.

**Labour market and sector reports**
- Kosovo Agency of Statistics — Labour Force Survey 2024: https://askapi.rks-gov.net/Custom/da2c388e-d969-4e3f-a67a-c74a6eff81f8.pdf
- Kosovo Agency of Statistics — ASKdata quarterly labour market tables: https://askdata.rks-gov.net/pxweb/en/ASKdata/ASKdata__Labour%20market__Anketa%20e%20Fuqis%C3%AB%20Pun%C3%ABtore__Quarterly%20labour%20market/tab20.px/
- Alfa Press (secondary, citing KAS) — Kosovo labour market data: https://alfapress.al/english/kosova-bota/kosova-perballet-me-sfida-te-medha-ne-tregun-punes-te-dhenat-papunes-i152299
- EU YouthWiki — North Macedonia, Employment & Entrepreneurship, general context (secondary, citing SSO): https://national-policies.eacea.ec.europa.eu/youthwiki/chapters/republic-of-north-macedonia/31-general-context
- STIKK — Kosovo IT Barometer 2023–2024: https://stikk.org/wp-content/uploads/2025/12/Kosovo-IT-Barometer-2023-2024.pdf and announcement https://stikk.org/en/stikk-publishes-the-kosovo-it-barometer-2023-2024/
- STIKK — Skills Gap publications (2011, 2013, 2015): https://stikk.org/wp-content/uploads/2018/11/Publications_2015_-_Skills_Gap_EN.pdf
- MASIT — Comparative analysis of the parameters in the ICT industry in Macedonia (2025): https://masit.org.mk/wp-content/uploads/2025/06/comparative-analysis-of-the-parameters-in-the-ict-industry-in-macedonia.pdf
- OECD — Western Balkans Competitiveness Outlook 2024: North Macedonia: https://www.oecd.org/en/publications/western-balkans-competitiveness-outlook-2024-north-macedonia_8207326d-en/full-report/component-15.html
- OECD — Western Balkans Competitiveness Outlook 2024: Kosovo: https://oecd.org/en/publications/western-balkans-competitiveness-outlook-2024-kosovo_ff74ae0e-en/full-report/component-15.html
- LSE — Higher education and the graduate labour market in the Western Balkans: https://researchonline.lse.ac.uk/id/eprint/117377
- Kitalent — Pristina ICT talent gap (secondary; figures to be verified): https://kitalent.com/articles/pristina-ict-talent-gap
- FINKI — Undergraduate admission quotas: https://finki.ukim.mk/en/upisi/dodiplomski-studii/kvoti/

**Student numbers (market size estimate)**
- SSO 2024 — State Statistical Office of North Macedonia, *Students enrolled in undergraduate studies at higher vocational schools and faculties, 2023/2024*, release 2.1.24.27 (3 July 2024), table T-01: https://www.stat.gov.mk/pdf/2024/2.1.24.27_mk.pdf
- SSO 2025 — *Enrolled students in the first cycle of studies, academic year 2024/2025* (total only, no breakdown by faculty): https://www.stat.mk/en/stat/population-and-living-conditions/education/enrolled-students-at-higher-schools-and-faculties/enrolled-students-in-the-first-cycle-of-studies-academic-year-20242025/
- KAS 2023 — Kosovo Agency of Statistics, *Statistikat e arsimit të lartë sipas fushave të studimit 2022/2023* (October 2023): https://askapi.rks-gov.net/Custom/dcc09a63-5933-4f73-9af1-7c4033154f64.pdf
- Zëri 2026 (secondary, citing KAS) — "Ja çfarë studiojnë më së shumti të rinjtë në Kosovë" (20 October 2026): https://zeri.info/aktuale/642081/ja-cfare-studiojne-me-se-shumti-te-rinjte-ne-kosove/

**"Why now"**
- Stanford HAI — *AI Index 2025: State of AI in 10 Charts*: https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts
- Brynjolfsson, Chandar & Chen — *Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence* (Stanford Digital Economy Lab, 2025, revised 2026): https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine

**Operating costs (checked 21 November 2026)**
- Claude API pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Vercel pricing: https://vercel.com/pricing
- Supabase pricing: https://supabase.com/pricing
- Resend pricing: https://resend.com/pricing
- Cloudflare Registrar (at-cost pricing): https://www.cloudflare.com/products/registrar/ ; .dev price comparison (secondary): https://costgoat.com/compare/domains/dev

**Competitors and alternatives**
- Forage — homepage ("100% free, open access and self-paced"): https://www.theforage.com/
- Forage — Skyscanner Front-End Software Engineering simulation: https://www.theforage.com/simulations/skyscanner/front-end-software-engineering-cbwl
- Forage — university career-centre description (example, Emory): https://cpd.emory.edu/resources/virtual-job-simulations/
- Frontend Mentor — Pro: https://www.frontendmentor.io/pro ; Free vs Pro: https://www.frontendmentor.io/guides/free-vs-pro-comparison ; Teams: https://teams.frontendmentor.io/pricing ; third-party price report (secondary, undated): https://www.starterstory.com/businesses/frontend-mentor/monetization
- GreatFrontEnd — Pricing: https://www.greatfrontend.com/interviews/pricing ; Projects pricing: https://www.greatfrontend.com/projects/pricing
- Codecademy — Pricing: https://www.codecademy.com/pricing
- Cacttus Education: https://cacttus.education/en
- Brainster: https://brainster.co/ (redirected to https://ai.brainster.co/ on 21 November 2026)
