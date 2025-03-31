import HomePage from "./components/home";
import { useLocation } from "react-router-dom";
import NavBar from "./components/nav";
import Skills from "./components/skills";

function App() {
  const location = useLocation();
  let currentPage;

  currentPage =
    location.pathname === "/" ? (
      <HomePage />
    ) : location.pathname === "/skills" ? (
      <Skills />
    ) : location.pathname === "/contact" ? (
      "contact Page"
    ) : location.pathname === "/resume" ? (
      "resume Page"
    ) : location.pathname === "/donate" ? (
      "donate"
    ) : (
      "404 Error Page"
    );
  return (
    <div className="mx-[12%] my-6">
      <NavBar />
      <main className="pt-20 lg:pt-24">{currentPage}</main>
    </div>
  );
}

export default App;
