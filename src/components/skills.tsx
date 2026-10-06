import SkillTools from "../widget/skill-tools";
import SkillsLangs from "../widget/skills-langs";
import SkillsData from "../data/skills.data";
import SectionHeading from "../widget/section-heading";
import Reveal from "../widget/reveal";

export default function Skills() {
  return (
    <section>
      <SectionHeading
        eyebrow="My toolkit"
        title="Skills & expertise."
        description="The languages, frameworks, and tools I use to turn a good idea into working software. Always learning, always building."
      />
      {SkillsData.map((group) => (
        <section key={group.type} className="skill-section" aria-labelledby={`skills-${group.type}`}>
          <Reveal>
            <div className="subsection-heading"><h2 id={`skills-${group.type}`}>{group.title}</h2></div>
          </Reveal>
          <div className={group.type === "tools" ? "grid grid-cols-2 gap-3 min-[360px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9" : "grid grid-cols-1 gap-4 md:grid-cols-2"}>
            {group.skillsList.map((skill, index) => (
              <Reveal key={skill.name} delay={(index % 3) * 50}>
                {group.type === "tools" ? <SkillTools name={skill.name} logo={skill.logo} /> : <SkillsLangs {...skill} />}
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
