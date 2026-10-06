import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/home";
import NavBar from "./components/nav";
import Skills from "./components/skills";
import ProfessionalJourney from "./components/journy";
import ContactPage from "./components/contact";
import Projects from "./components/projects";
import FooterPage from "./components/footer";
import NotFound from "./components/not-found";
import AboutPage from "./components/about";
import ScrollProgress from "./widget/scroll-progress";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const page = pathname.split("/")[1];
    document.title = page
      ? `${page.charAt(0).toUpperCase() + page.slice(1)} | Shovan Mondal`
      : "Shovan Mondal | Backend Developer";
  }, [pathname]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollProgress />
      <NavBar />
      <main id="main-content" className="site-container main-content" tabIndex={-1}>
        <div key={pathname} className="page-enter">
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/journey" element={<ProfessionalJourney />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <FooterPage />
    </div>
  );
}

export default App;
