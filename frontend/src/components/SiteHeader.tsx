import { BrandPicture } from "./BrandPicture";
import "./SiteHeader.css";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-header__inner">
        {/* Full logo in the website header (brand book §4), at the 240 px minimum width. */}
        <BrandPicture asset="logo" width={240} alt="SkillMirror" />
      </div>
    </header>
  );
}
