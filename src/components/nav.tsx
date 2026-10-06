import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import menuItems from "../widget/menuItem";
import Icon from "../widget/icon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (desktop.matches) setIsMenuOpen(false);
    };

    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      desktop.removeEventListener("change", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header ref={navRef} className="site-header">
      <div className="site-container nav-bar">
        <Link to="/" className="wordmark" aria-label="Shovan — home">Shovan<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {menuItems.map((item) => (
            <NavLink key={item.path} to={item.path} end className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}>
              {item.name}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="nav-contact text-link">Let’s talk <Icon name="arrow-up-right" /></Link>
        <button
          ref={toggleRef}
          type="button"
          className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span /><span /><span />
        </button>
      </div>
      {isMenuOpen && (
        <nav id="mobile-navigation" className="mobile-nav site-container" aria-label="Mobile navigation">
          {menuItems.map((item) => (
            <NavLink key={item.path} to={item.path} end className={({ isActive }) => `mobile-nav-link ${isActive ? "is-active" : ""}`} onClick={() => setIsMenuOpen(false)}>
              {item.name}<Icon name="arrow-up-right" />
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
