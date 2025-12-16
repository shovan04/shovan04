import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import menuItems from "../widget/menuItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div
      ref={navRef}
      className="fixed w-full top-0 left-0 z-50 backdrop-blur-md py-4 px-[10%]"
    >
      <div className="flex items-center justify-between flex-row">
        {/* Logo */}
        <div className="text-4xl cursor-default font-CaskaydiaSemiBold text-white">
          <Link to="/">
            <span>Shovan</span>
            <span className="text-accent">.</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex justify-evenly text-white items-center cursor-pointer gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  location.pathname === item.path
                    ? "text-accent border-b-2 border-b-accent"
                    : "hover:text-accent transition-all duration-300 ease-in-out"
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}>
        <div className="flex flex-col items-center gap-4 border-t border-gray-700">
          <div></div>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={
                location.pathname === item.path
                  ? "text-accent border-b-2 border-b-accent"
                  : "text-white hover:text-accent transition-all duration-300"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
