import type { AnchorHTMLAttributes } from "react";
import "./ButtonLink.css";

// A link styled as the primary button. Used for in-page navigation such as
// "See how it works"; it never links to screens that are not built yet.
export function ButtonLink({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={["button-link", className].filter(Boolean).join(" ")} {...props} />;
}
