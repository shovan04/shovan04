import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import NavBar from "./components/nav";
import Skills from "./components/skills";
import ProfessionalJourney from "./components/journy";
import ContactPage from "./components/contact";
import Projects from "./components/projects";
import FooterPage from "./components/footer";
import NotFound from "./components/not-found";

function App() {
  return (
    <div className="flex flex-col min-h-dvh w-dvw">
      <NavBar />
      <main className="flex-grow pt-24 pb-20 mx-8 md:mx-[10%] flex flex-col justify-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/journey" element={<ProfessionalJourney />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/resume" element={<div>Resume Page</div>} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <div className="fixed bottom-0 w-full bg-primary z-40">
        <FooterPage />
      </div>
    </div>
  );
}

export default App;
