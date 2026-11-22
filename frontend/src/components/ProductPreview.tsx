import { Icon } from "./Icon";
import "./ProductPreview.css";

// Illustrative product mockup for the hero. Not a live interface: the whole stage is
// one image for assistive technology, and a visible caption says "Example preview".
// Text comes from the approved examples in docs/brand-book.md §8.

const rubric = ["F-1", "A-1", "A-2", "J-1", "Q-2", "W-1"];

const skills = [
  { area: "Responsive layout", level: "Strong", filled: 3 },
  { area: "Accessibility", level: "Developing", filled: 1 },
  { area: "Async UI states", level: "Developing", filled: 1 },
] as const;

const description =
  "Example preview of SkillMirror. A simulation brief for S2, Fix It in Production, " +
  "with a suggested time of 60 to 90 minutes and no timer. A summary of what the " +
  "student's work showed: responsive layout strong, accessibility and async UI states " +
  "developing. An AI-assisted feedback comment rating accessibility as developing, " +
  "labelled as a guide, not a grade.";

export function ProductPreview() {
  return (
    <figure className="preview">
      <div className="preview__stage" role="img" aria-label={description}>
        <div className="preview__window preview__part" aria-hidden="true">
          <div className="preview__chrome">
            <span className="preview__dots">
              <span />
              <span />
              <span />
            </span>
            <span className="preview__title">S2 · Fix It in Production</span>
          </div>

          <div className="preview__body">
            <p className="preview__label">Ticket</p>
            <p className="preview__brief">
              It's Tuesday morning. A user has reported that the sign-up form rejects valid email
              addresses, and keyboard users can't submit it at all.
            </p>

            <div className="preview__meta">
              <span className="preview__meta-item">
                <Icon name="clock" size={18} />
                Suggested time: 60–90 minutes
              </span>
              <span className="preview__pill">There's no timer</span>
            </div>

            <div className="preview__rubric">
              <p className="preview__label">Rubric</p>
              <ul className="preview__chips">
                {rubric.map((code) => (
                  <li key={code}>{code}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="preview__skills preview__part preview__float" aria-hidden="true">
          <p className="preview__card-title">Your work showed</p>
          <ul className="preview__skill-list">
            {skills.map((skill) => (
              <li key={skill.area} className="preview__skill">
                <span className="preview__skill-area">{skill.area}</span>
                <span className={`meter meter--${skill.level.toLowerCase()}`}>
                  {[1, 2, 3].map((segment) => (
                    <span key={segment} className={segment <= skill.filled ? "is-filled" : ""} />
                  ))}
                </span>
                <span className="preview__skill-level">
                  <Icon name={skill.level === "Strong" ? "check" : "halfCircle"} size={16} />
                  {skill.level}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="preview__feedback preview__part" aria-hidden="true">
          <div className="preview__feedback-inner">
            <p className="preview__feedback-title">
              <Icon name="halfCircle" size={18} />
              Accessibility — Developing
            </p>
            <p className="preview__feedback-text">
              Your fix works with a mouse, but the submit button still can't be reached with the
              Tab key. Rubric criterion A-2 expects interactive elements to be keyboard-operable.
            </p>
            <p className="preview__ai-label">
              <Icon name="sparkle" size={16} />
              AI-assisted feedback based on the SkillMirror rubric. Treat it as a guide, not a
              grade.
            </p>
          </div>
        </div>
      </div>

      <figcaption className="preview__caption">
        <Icon name="info" size={16} />
        Example preview
      </figcaption>
    </figure>
  );
}
