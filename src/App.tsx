import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import NavBar from "./components/nav";
import Skills from "./components/skills";
import ProfessionalJourney from "./components/journy";
import ContactPage from "./components/contact";
import Projects from "./components/projects";
import FooterPage from "./components/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen mx-[10%] my-6">
      <NavBar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/journey" element={<ProfessionalJourney />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/resume" element={<div>Resume Page</div>} /> */}
          <Route path="*" element={<div>404 Error Page</div>} />
        </Routes>
      </main>
      <FooterPage />
    </div>
  );
}

export default App;
