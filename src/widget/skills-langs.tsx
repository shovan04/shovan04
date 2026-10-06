import { SkillsPayload } from "../data/skills.data";

export default function SkillsLangs({ name, logo, level }: SkillsPayload) {
  return (
    <div className="panel interactive-card skill-card">
      <div className="skill-card-header">
        <div className="skill-logo" aria-hidden="true">{logo}</div>
        <h3 className="skill-name">{name}</h3>
        <span className="skill-level" aria-hidden="true">{level}%</span>
      </div>
      <div className="skill-progress" role="meter" aria-label={`${name} proficiency`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={level}>
        <div className="skill-progress-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
