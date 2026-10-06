import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}

export default function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="section-description">{description}</p>
      </div>
      {action && <div className="section-action">{action}</div>}
    </header>
  );
}
