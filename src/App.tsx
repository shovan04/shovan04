import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import NavBar from "./components/nav";
import Skills from "./components/skills";
import ProfessionalJourney from "./components/journy";

function App() {
  return (
    <div className="mx-[10%] my-6">
      <NavBar />
      <main className="pt-20 lg:pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/journy" element={<ProfessionalJourney />} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/resume" element={<div>Resume Page</div>} />
          <Route path="/donate" element={<div>Donate Page</div>} />
          <Route path="*" element={<div>404 Error Page</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
