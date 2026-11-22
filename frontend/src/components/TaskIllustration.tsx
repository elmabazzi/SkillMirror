import type { ReactNode } from "react";
import { Icon } from "./Icon";
import "./TaskIllustration.css";

// Detailed, illustrative scenes for the three simulations. Each is one image for
// assistive technology (role="img" + description); the drawing itself is hidden.
// All scenarios are fictional (BR-14). Every text size is at least 14 px.

type TaskCode = "S1" | "S2" | "S3";

const descriptions: Record<TaskCode, string> = {
  S1: "Illustration: a component specification for a product card list with filters, shown at desktop and mobile widths, with spacing annotations and acceptance criteria.",
  S2: "Illustration: a code editor with a highlighted bug in an email validation function, and a failing test in the terminal below.",
  S3: "Illustration: an orders screen connected to an API, shown in its loading, empty and error states, with one open question about the requirements.",
};

function Frame({ code, children, dark = false }: { code: TaskCode; children: ReactNode; dark?: boolean }) {
  return (
    <div className={`task-art ${dark ? "task-art--dark" : ""}`} role="img" aria-label={descriptions[code]}>
      <div className="task-art__inner" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

function ProductCardMini({ highlighted = false }: { highlighted?: boolean }) {
  return (
    <span className={`spec-card ${highlighted ? "spec-card--focus" : ""}`}>
      <span className="spec-card__img" />
      <span className="spec-card__line" />
      <span className="spec-card__line spec-card__line--short" />
    </span>
  );
}

function ComponentSpec() {
  return (
    <Frame code="S1">
      <div className="art-toolbar">
        <span className="art-toolbar__name">ProductCardList</span>
        <span className="art-toggle">
          <span className="is-active">
            <Icon name="monitor" size={16} />
          </span>
          <span>
            <Icon name="phone" size={16} />
          </span>
        </span>
      </div>

      <div className="spec-canvas">
        <div className="spec-filters">
          <span className="spec-chip is-selected">All</span>
          <span className="spec-chip">New</span>
          <span className="spec-chip">Sale</span>
        </div>

        <div className="spec-layouts">
          <div className="spec-desktop">
            <ProductCardMini />
            <span className="spec-gap">
              <span className="spec-gap__label">16</span>
            </span>
            <ProductCardMini highlighted />
            <ProductCardMini />
          </div>
          <div className="spec-phone">
            <ProductCardMini />
            <ProductCardMini />
          </div>
        </div>
      </div>

      <ul className="art-checklist">
        <li>
          <Icon name="check" size={16} />
          3 columns → 1 on mobile
        </li>
        <li>
          <Icon name="check" size={16} />
          Filters work with the keyboard
        </li>
      </ul>
    </Frame>
  );
}

function CodeEditor() {
  return (
    <Frame code="S2" dark>
      <div className="editor-tabs">
        <span className="editor-tab is-active">validation.ts</span>
        <span className="editor-tab">SignupForm.tsx</span>
      </div>

      <pre className="editor-code">
        <span className="code-line">
          <span className="ln">11</span>
          <span className="tok-comment">{"// BUG-142: valid emails fail"}</span>
        </span>
        <span className="code-line">
          <span className="ln">12</span>
          <span className="tok-key">function</span> <span className="tok-fn">isEmail</span>(v) {"{"}
        </span>
        <span className="code-line">
          <span className="ln">13</span>
          {"  "}
          <span className="tok-key">const</span> re =
        </span>
        <span className="code-line code-line--bug">
          <span className="ln">14</span>
          {"  "}
          <span className="tok-str">{"/^[a-z]+@[a-z]+\\.[a-z]{2,3}$/"}</span>;
        </span>
        <span className="code-line">
          <span className="ln">15</span>
          {"  "}
          <span className="tok-key">return</span> re.<span className="tok-fn">test</span>(v);
        </span>
        <span className="code-line">
          <span className="ln">16</span>
          {"}"}
        </span>
      </pre>

      <div className="editor-terminal">
        <span className="term-line term-line--fail">
          <Icon name="cross" size={16} />
          accepts first.last@uni.edu
        </span>
        <span className="term-line term-line--pass">
          <Icon name="check" size={16} />
          rejects an address without @
        </span>
      </div>
    </Frame>
  );
}

function UiStates() {
  return (
    <Frame code="S3">
      <div className="art-toolbar">
        <span className="art-toolbar__name">Orders</span>
        <span className="art-endpoint">GET /api/orders</span>
      </div>

      <div className="states">
        <div className="state">
          <span className="state__label">
            <span className="state__dot state__dot--loading" />
            Loading
          </span>
          <span className="state__body">
            <span className="spinner" />
            <span className="skeleton" />
            <span className="skeleton skeleton--short" />
          </span>
        </div>

        <div className="state">
          <span className="state__label">
            <span className="state__dot" />
            Empty
          </span>
          <span className="state__body state__body--center">
            <Icon name="inbox" size={24} />
            <span className="state__text">No orders yet</span>
          </span>
        </div>

        <div className="state">
          <span className="state__label">
            <span className="state__dot state__dot--error" />
            Error
          </span>
          <span className="state__body state__body--center">
            <span className="state__error-icon">
              <Icon name="alert" size={24} />
            </span>
            <span className="state__retry">
              <Icon name="retry" size={14} />
              Retry
            </span>
          </span>
        </div>
      </div>

      <p className="art-question">
        <span className="art-question__mark">?</span>
        Open question for the PM
      </p>
    </Frame>
  );
}

export function TaskIllustration({ code }: { code: TaskCode }) {
  if (code === "S1") return <ComponentSpec />;
  if (code === "S2") return <CodeEditor />;
  return <UiStates />;
}
