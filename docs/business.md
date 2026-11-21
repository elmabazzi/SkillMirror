# SkillMirror — Business Documentation

| | |
|---|---|
| **Document** | Business case (Parts 1–4) |
| **Version** | 0.1 (draft for university assignment) |
| **Date** | 21 November 2026 |
| **Related documents** | [brand-book.md](brand-book.md) · [rules-and-flows.md](rules-and-flows.md) |
| **Validation status** | **No customer interviews, surveys, pilots or willingness-to-pay tests have been carried out yet.** Every claim about customers in this document is a hypothesis unless it cites an external source. |

---

## How to read this document

To keep the document honest, every claim is put into one of three categories:

| Label | Meaning |
|---|---|
| **[Source]** | Taken from a cited external source (see [Sources](#sources)). Secondary sources are marked as such. |
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

---

# Part 2 — Product Concept

## 2.1 The big picture

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

## 2.5 Alternative delivery models

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

> **Method and limits.** Desk research was carried out on 21 November 2026 using publicly available sources: company websites, university career-centre pages, official statistics and industry-association reports. Prices and features change often and must be rechecked before any final submission. No primary research (interviews or surveys) has been done.

## 3.1 Competitor and alternative landscape

### Direct and near-direct competitors (international)

| Competitor | What it offers | Price model (as found) | Strengths | Gaps relative to SkillMirror |
|---|---|---|---|---|
| **Forage** (theforage.com) | Free, self-paced virtual job simulations designed by employers. Example: Skyscanner's *Front-End Software Engineering* simulation (JavaScript, React, Skyscanner's Backpack design system; about 1–2 hours) | Free for students; employers pay Forage to build simulations **[Source: university career pages]** | Closest concept; strong employer brands; widely promoted by university career centres | Employer-funded, so the business is oriented toward recruiting pipelines. Simulations are company-specific and not built around a personal skill-gap analysis or a structured readiness profile across a career path. Not localised to our region **[Assumption]** |
| **Frontend Mentor** (frontendmentor.io) | Design-to-code challenges with design files; premium "realistic" projects; a Teams product for organisations | Free tier plus Pro subscription (Pro includes premium challenges and design files with monthly limits); Teams plan for organisations **[Source: Frontend Mentor site; exact current price not confirmed]** | High-quality frontend practice; strong community; portfolio orientation | Mostly "build this design". Little workplace context such as bugs in existing code, ambiguity or stakeholder communication. Feedback is mainly community-based, not rubric-based, and there is no career exploration or gap analysis **[Assumption based on public description]** |
| **GreatFrontEnd** (greatfrontend.com) | Frontend interview preparation (questions, study plans) and a "Projects" product | Interviews: lifetime plan seen at US$180 (discounted from US$360, labelled limited-time); Projects: free plan and paid plans **[Source: GreatFrontEnd pricing page]** | Deep frontend focus; credible content | Interview-preparation focus. Aimed at people already committed to frontend, not at career exploration |
| **Codecademy Pro** | Interactive courses and career paths (including Front-End Engineer) plus interview preparation | About US$39.99/month billed monthly, or about US$19.99/month billed annually; student discount available **[Source: Codecademy blog and secondary reviews]** | Structured learning paths; strong brand | Teaches skills but does not simulate the job. No realistic workplace tasks or readiness assessment |
| **Algorithmic coding platforms** (e.g. LeetCode, HackerRank, Codewars) | Algorithm and data-structure problems, some assessments | Freemium | Good for technical interview practice | Quiz-style; different from everyday frontend work. This is the format SkillMirror deliberately avoids |
| **Free learning resources** (e.g. freeCodeCamp, MDN, roadmap.sh, YouTube) | Curricula, documentation, roadmaps, tutorials | Free | Free, comprehensive, trusted | No personal feedback, no simulation of workplace context, and the sheer volume can overwhelm students (problem P4) |

### Regional alternatives (North Macedonia and Kosovo)

| Alternative | Description | Relationship to SkillMirror |
|---|---|---|
| **Brainster** (Skopje) | Ed-tech organisation and accredited higher education institution offering programming and other tech programmes and academies **[Source: Brainster materials]** | A training provider, not a simulation or readiness tool. **Potential partner** (delivery model 4) as well as a competitor for students' attention and budget. Current frontend programme pricing not confirmed |
| **Cacttus Education** (Prishtina) | Accredited institution offering two-year professional IT study programmes, including web and mobile application development **[Source: cacttus.education]** | A training provider. Potential partner or channel |
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

## 3.3 Market opportunity in North Macedonia and Kosovo

### Supporting market signals

| Signal | Market | Source |
|---|---|---|
| ICT sector employment grew 10.7% to 23,948 employees in 2024 | North Macedonia | MASIT 2025 |
| Persistent shortage of highly educated professionals and specialised skills | North Macedonia | MASIT 2025; OECD 2024 |
| Skills shortages in programming; graduates often lack practical skills; JavaScript is the top language | Kosovo | STIKK IT Barometer 2023–2024 |
| ICT is one of Kosovo's few industries with a positive trade balance | Kosovo | OECD Competitiveness Outlook 2024 (Kosovo) |
| High youth unemployment (about 21–23% in 2024, varying by age band and quarter) | Both | KAS via Alfa Press; SSO via EU YouthWiki (secondary) |
| FINKI (Skopje) published an undergraduate admission quota of 800 students (year not stated on the page) | North Macedonia | FINKI website: a quota, *not* an enrolment count |
| About 3,200 ICT graduates per year in Kosovo; only 35–40% reportedly meet commercial employment standards | Kosovo | **Secondary** (Kitalent article citing a 2024 STIKK/GIZ analysis). **Original report not reviewed; do not use as a headline figure until verified** |

### Market sizing approach (to be completed with verified data)

We **do not** give a market size figure yet, because the inputs are not verified. The method is:

```
Serviceable students (SAM) = Σ over target universities of
      (CS/IT students enrolled in years 2–4)
    × (share interested in frontend / web careers)        ← H-11

Revenue potential (Model B) = number of partner faculties
    × students covered per licence × price per student per year

Revenue potential (Model A) = active students
    × free-to-paid conversion rate (H-8) × annual premium price
```

**Data still needed:**
1. Verified CS/IT enrolment numbers by university and year in North Macedonia (SSO, faculties) and Kosovo (KAS, Ministry of Education, faculties).
2. The share of students considering frontend or web careers, from a student survey.
3. Willingness to pay for students and institutions, from pricing interviews and pilots.

### Market opportunity assessment (qualitative)

- **Demand-side signal:** sector reports in both countries describe skills and practical-experience gaps among graduates. **[Source]**
- **Supply-side gap:** the international simulation tools we reviewed are mainly in English, tied to employer pipelines, and not aimed at the region. Local providers mostly sell training rather than readiness assessment. **[Assumption based on desk research]**
- **Constraint:** both markets are small, so long-term viability probably depends on (a) institutional or programme payers and (b) expanding to more career paths and other Western Balkan markets. **[Assumption]**
- **Risk:** free and well-funded alternatives (Forage, free resources, general AI chatbots) set user expectations at "free". **[Assumption]**

---

# Part 4 — Business Model

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
| **Student Plus** | All 3 simulations; full gap analysis; shareable readiness summary; 3 next steps; resubmissions within the attempt limit | **H-8a:** €4–6 per month, or **H-8b:** a one-off "career path pass" of €9–15 | Kept well below international subscriptions (e.g. Codecademy Pro at about US$20–40/month) because of regional purchasing power **[Assumption]** |

Test whether a **one-off pass per career path** works better than a subscription. The product has a natural end point (a completed readiness summary), which may suit a one-off purchase. **[Hypothesis H-8c]**

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
| **Brand & visual identity** | New logo and identity work (see [brand-book.md](brand-book.md)) | Team time, or a small design budget |
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

### Step 2 — Pilot recruitment channels

| Channel | Action | Why |
|---|---|---|
| **Our own university network** | Classmates, student associations, course groups | Fastest and cheapest access to the target user |
| **Lecturers of web-development courses** | Offer the simulations as optional practice (a preview of delivery model 2) | Builds credibility with faculty and shows usage |
| **Career centres** | Offer a free "Frontend Career Sprint" workshop (delivery model 3) | Also tests the institutional-payer hypothesis |
| **Tech communities & events** | Local developer meetups, hackathons, student tech clubs, community groups | Reaches motivated students |
| **Industry associations** | Introductory contact with MASIT (North Macedonia) and STIKK (Kosovo) to ask for help finding developer reviewers | Content credibility. **Not** for recruitment of students by companies |
| **Social media** | Instagram and LinkedIn posts in Macedonian, Albanian and English | Low-cost awareness |

### Step 3 — Pilot success metrics (targets are assumptions to be revised)

| Metric | Initial target **[Assumption]** |
|---|---|
| Students who start the snapshot | 30–50 |
| Complete at least 1 simulation | ≥ 60% of starters |
| Complete the full journey (all 3 simulations + summary) | ≥ 30% of starters |
| Rate simulations as "realistic" (post-pilot survey, 1–5 scale) | Average ≥ 4.0 |
| Agree the feedback was fair and useful | ≥ 70% |
| Would recommend to a classmate | ≥ 60% |
| Career centres or faculties willing to discuss a paid pilot | ≥ 1 |

### Step 4 — Decide and iterate
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

**Competitors and alternatives**
- Forage — Skyscanner Front-End Software Engineering simulation: https://www.theforage.com/simulations/skyscanner/front-end-software-engineering-cbwl
- Forage — university career-centre description (example, Emory): https://cpd.emory.edu/resources/virtual-job-simulations/
- Frontend Mentor — Pro: https://frontendmentor.io/pro ; Free vs Pro: https://www.frontendmentor.io/guides/free-vs-pro-comparison ; Teams: https://teams.frontendmentor.io/pricing
- GreatFrontEnd — Pricing: https://www.greatfrontend.com/interviews/pricing ; Projects pricing: https://greatfrontend.com/projects/pricing
- Codecademy — "An update to Codecademy Pro": https://www.codecademy.com/resources/blog/an-update-to-codecademy-pro ; Course Report comparison: https://coursereport.com/blog/codecademy-vs-codecademy-pro-a-comprehensive-comparison
- Cacttus Education: https://cacttus.education/en
- Brainster (via secondary listing): https://ik.imagekit.io/next/AI/AI-Fundamentals-Course-Brochure.pdf
