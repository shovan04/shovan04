import { Link } from "react-router-dom";
import Icon from "../widget/icon";

export default function NotFound() {
  return (
    <div className="flex min-h-[55vh] flex-col items-start justify-center">
      <p className="eyebrow">Page not found</p>
      <h1 className="page-title mt-3">This page wandered off.</h1>
      <p className="section-description">The page you’re looking for doesn’t exist, but there’s plenty more to explore.</p>
      <Link to="/" className="button button-primary mt-6">Back home <Icon name="arrow-right" /></Link>
    </div>
  );
}
