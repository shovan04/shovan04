import { ReactNode } from "react";

export type SkillToolsType = {
  name: string;
  logo: ReactNode;
};

export default function SkillTools({ name, logo }: SkillToolsType) {
  return (
    <div className="panel interactive-card tool-card">
      <div className="tool-logo" aria-hidden="true">{logo}</div>
      <span>{name}</span>
    </div>
  );
}
