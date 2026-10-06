import { ReactNode, SVGProps } from "react";

type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "download"
  | "code"
  | "server"
  | "layers"
  | "mail"
  | "pin"
  | "award"
  | "globe"
  | "terminal"
  | "sparkles"
  | "github"
  | "linkedin"
  | "facebook"
  | "instagram"
  | "x";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

const paths: Record<IconName, ReactNode> = {
  "arrow-right": <path d="M4 12h16m-6-6 6 6-6 6" />,
  "arrow-up-right": <path d="M6 18 18 6M6 6h12v12" />,
  download: <><path d="M12 3v12m-5-5 5 5 5-5" /><path d="M4 16v4h16v-4" /></>,
  code: <><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" /></>,
  server: <><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6" /></>,
  layers: <><path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  pin: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  award: <><circle cx="12" cy="8" r="5" /><path d="m8 12-2 9 6-3 6 3-2-9" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" /></>,
  terminal: <><path d="m4 5 6 6-6 6m8 0h8" /></>,
  sparkles: <><path d="m12 3-1.3 4.7L6 9l4.7 1.3L12 15l1.3-4.7L18 9l-4.7-1.3L12 3ZM19 15l-.7 2.3L16 18l2.3.7L19 21l.7-2.3L22 18l-2.3-.7L19 15Z" /></>,
  github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3-.3 6-1.5 6-6.3a5 5 0 0 0-1.5-3.5 4.5 4.5 0 0 0-.1-3.5S17.2 1.7 15 3a13 13 0 0 0-6 0C6.8 1.7 5.6 2 5.6 2a4.5 4.5 0 0 0-.1 3.5A5 5 0 0 0 4 9c0 4.8 3 6 6 6.3A3.5 3.5 0 0 0 9 18v4" /></>,
  linkedin: <><rect x="3" y="8" width="4" height="13" rx="1" /><circle cx="5" cy="3" r="2" /><path d="M11 21V8h4v2c2-3 6-2 6 2v9h-4v-8c0-2-2-2-2 0v8" /></>,
  facebook: <path d="M14 22V12h4l1-4h-5V6c0-1 .5-2 2-2h3V1h-3c-4 0-6 2-6 5v2H7v4h3v10" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  x: <><path d="m4 3 12 18h4L8 3H4Zm0 18 6-7m4-4 6-7" /></>,
};

export default function Icon({ name, className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`icon ${className}`}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
