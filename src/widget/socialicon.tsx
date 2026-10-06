import { ReactNode } from "react";

interface SocialIconProps {
  children: ReactNode;
  title: string;
  className?: string;
  socialUrl: string;
}

export default function SocialIcon({ children, title, className = "", socialUrl }: SocialIconProps) {
  return (
    <a
      href={socialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-link ${className}`}
      aria-label={`${title} (opens in a new tab)`}
      title={title}
    >
      {children}
    </a>
  );
}
