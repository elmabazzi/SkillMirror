import type { CSSProperties } from "react";
import { ButtonLink } from "../components/ButtonLink";
import { Icon, type IconName } from "../components/Icon";
import { ProductPreview } from "../components/ProductPreview";
import { TaskIllustration } from "../components/TaskIllustration";
import { useReveal } from "../hooks/useReveal";
import "./LandingPage.css";

// The only screen in Weekend 2. Copy follows the brand book (§7 voice, §8 examples)
// and the product journey in docs/business.md §2.1. No sign-up or other screens yet:
// the call to action scrolls to "How it works" on this page.

type Tone = "indigo" | "teal" | "amber";

const journeySteps: { title: string; text: string; icon: IconName; tone: Tone }[] = [
  {
    title: "Reflect",
    text: "Complete a short career snapshot: your interests, how you rate your own skills, your goals and the time you have each week. It takes about 10 minutes.",
    icon: "mirror",
    tone: "indigo",
  },
  {
    title: "Experience",
    text: "Work through three realistic Junior Frontend Developer tasks, written as workplace tickets at a fictional company.",
    icon: "code",
    tone: "indigo",
  },
  {
    title: "Get feedback",
    text: "Receive AI-assisted feedback on each submission, judged only against a rubric you can read before you start.",
    icon: "feedback",
    tone: "teal",
  },
  {
    title: "See your gaps",
    text: "Compare how you rated yourself with what your work showed, skill by skill: your strengths, your gaps and any blind spots.",
    icon: "compare",
    tone: "teal",
  },
  {
    title: "Share, if you choose",
    text: "Turn your results into a one-page career readiness summary. It stays private unless you create a link, and you can revoke it at any time.",
    icon: "link",
    tone: "amber",
  },
  {
    title: "Act",
    text: "Leave with exactly three next steps. Each one is tied to a specific gap, with a time estimate and a clear finish line.",
    icon: "flag",
    tone: "amber",
  },
];

const simulations = [
  {
    code: "S1",
    title: "Ship the Component",
    scenario:
      "The product team needs a responsive, accessible UI component built from a design spec and a ticket with acceptance criteria.",
    skills: ["Semantic HTML", "Responsive CSS", "Accessibility", "Pull request description"],
  },
  {
    code: "S2",
    title: "Fix It in Production",
    scenario:
      "A user has reported a bug in an existing small React codebase. Reproduce it, fix it with the smallest safe change and explain what happened.",
    skills: ["Reading unfamiliar code", "Debugging", "Accessibility", "Bug notes"],
  },
  {
    code: "S3",
    title: "Wire Up the Feature",
    scenario:
      "Connect a UI to a mock API with loading, empty and error states. The requirements have one gap for you to spot and raise.",
    skills: ["Async data", "UI states", "Edge cases", "Clarifying questions"],
  },
] as const;

const promises: { title: string; text: string; icon: IconName; tone: Tone }[] = [
  {
    title: "Feedback you can check",
    text: "Feedback is AI-assisted and based only on the published rubric. It's an estimate, not a grade, and you can report any comment for human review.",
    icon: "shieldCheck",
    tone: "indigo",
  },
  {
    title: "Your results are yours",
    text: "Everything is private by default. You decide what to share and for how long, and you can export or delete your data.",
    icon: "lock",
    tone: "teal",
  },
  {
    title: "Not a recruiting tool",
    text: "Employers have no access to SkillMirror. Your data is never sold or shared with employers.",
    icon: "ban",
    tone: "amber",
  },
  {
    title: "No verdicts",
    text: "No job-ready certificates and no employability scores. Just evidence about your skills and clear next steps.",
    icon: "scale",
    tone: "indigo",
  },
];

// Stagger for scroll-reveal animations (ignored when motion is reduced).
const delay = (index: number) => ({ "--reveal-delay": `${index * 80}ms` }) as CSSProperties;

export function LandingPage() {
  useReveal();

  return (
    <main id="main" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__backdrop" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Career exploration for CS and IT students
            </p>
            <h1 id="hero-title" className="hero__title">
              See your career <span className="hero__title-accent">before you choose it.</span>
            </h1>
            <p className="hero__lead">
              Try realistic Junior Frontend Developer tasks, get honest feedback against clear
              criteria, and leave with three concrete next steps.
            </p>
            <ButtonLink href="#how-it-works">
              See how it works
              <span aria-hidden="true">↓</span>
            </ButtonLink>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section id="how-it-works" className="section journey" aria-labelledby="how-title">
        <div className="container">
          <div className="section__header" data-reveal>
            <span className="section__accent" aria-hidden="true" />
            <h2 id="how-title">How it works</h2>
            <p className="section__intro">
              One short, structured experience that holds up a mirror to your potential as a
              junior frontend developer.
            </p>
          </div>
          <ol className="steps">
            {journeySteps.map((step, index) => (
              <li
                key={step.title}
                className={`step step--${step.tone}`}
                data-reveal
                style={delay(index)}
              >
                <div className="step__top">
                  <span className="step__number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span className="step__icon">
                    <Icon name={step.icon} size={22} />
                  </span>
                </div>
                <h3>
                  <span className="visually-hidden">Step {index + 1}: </span>
                  {step.title}
                </h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tasks" aria-labelledby="simulations-title">
        <div className="tasks__glow" aria-hidden="true" />
        <div className="container">
          <div className="section__header" data-reveal>
            <span className="section__accent" aria-hidden="true" />
            <h2 id="simulations-title">Three tasks shaped like real work</h2>
            <p className="section__intro">
              Not quizzes. Each task comes with a brief, starter files, a suggested time-box and
              deliverables beyond code, the way work arrives on a real team. There's no timer.
            </p>
          </div>
          <ul className="simulations">
            {simulations.map((simulation, index) => (
              <li key={simulation.code} className="simulation" data-reveal style={delay(index)}>
                <TaskIllustration code={simulation.code} />
                <div className="simulation__body">
                  <p className="simulation__code">{simulation.code}</p>
                  <h3>{simulation.title}</h3>
                  <p>{simulation.scenario}</p>
                  <ul className="tags" aria-label={`Skills practised in ${simulation.title}`}>
                    {simulation.skills.map((skill) => (
                      <li key={skill} className="tag">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <p className="note">
            Working titles. The tasks are still being written and will be reviewed by practising
            frontend developers before launch.
          </p>
        </div>
      </section>

      <section className="section promises-section" aria-labelledby="promises-title">
        <div className="container promises-layout">
          <div className="section__header" data-reveal>
            <span className="section__accent" aria-hidden="true" />
            <h2 id="promises-title">What you can count on</h2>
            <p className="section__intro">Honest reflection, real practice, clear next steps.</p>
          </div>
          <ul className="promises">
            {promises.map((promise, index) => (
              <li
                key={promise.title}
                className={`promise promise--${promise.tone}`}
                data-reveal
                style={delay(index)}
              >
                <span className="promise__icon">
                  <Icon name={promise.icon} size={22} />
                </span>
                <h3>{promise.title}</h3>
                <p>{promise.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section closing" aria-label="A note on choosing your path">
        <div className="container" data-reveal>
          <span className="closing__bar" aria-hidden="true" />
          <p className="closing__quote">
            Frontend may not be your path, and that's useful to know too.
          </p>
        </div>
      </section>
    </main>
  );
}
