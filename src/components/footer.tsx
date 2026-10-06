import { Link } from "react-router-dom";
import Icon from "../widget/icon";

export default function FooterPage() {
  return (
    <footer className="site-footer site-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Shovan Mondal.</p>
        <p className="footer-note">Built with curiosity<span className="text-accent">.</span></p>
        <Link to="/contact" className="text-link">Get in touch <Icon name="arrow-up-right" /></Link>
      </div>
    </footer>
  );
}
