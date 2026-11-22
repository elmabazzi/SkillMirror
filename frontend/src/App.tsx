import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { LandingPage } from "./pages/LandingPage";

// Weekend 2 has one screen, so there is no router yet. When a second page is built,
// add a router here and keep each screen in src/pages/.
export default function App() {
  return (
    <>
      <SiteHeader />
      <LandingPage />
      <SiteFooter />
    </>
  );
}
