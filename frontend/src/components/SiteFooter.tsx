import { BrandPicture } from "./BrandPicture";
import "./SiteFooter.css";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <BrandPicture asset="icon" width={32} alt="" background="dark" />
          <span className="site-footer__name">SkillMirror</span>
        </div>
        <p className="site-footer__promise">Honest reflection, real practice, clear next steps.</p>
        <p className="site-footer__meta">
          A career exploration project for Computer Science and IT students in North Macedonia and
          Kosovo.
        </p>
      </div>
    </footer>
  );
}
