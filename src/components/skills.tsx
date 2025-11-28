import SkillTools from "../widget/skill-tools";
import SkillsLangs from "../widget/skills-langs";
import SkillsData, {
  SkillsDataPayload,
} from "../data/skills.data";

export default function Skills() {
  return (
    <div className="flex flex-col">
      {/* Title Section */}
      <div id="skill-title" className="mb-4">
        <p className="text-3xl font-CaskaydiaSemiBold text-white">
          My Skills & Expertise
        </p>
        <p className="text-lg mt-1 text-accent">Technologies I work with</p>
      </div>

      {/* Skill Details */}
      <div id="skill-details" className="flex flex-col flex-1 gap-4">
        {SkillsData.map((skills: SkillsDataPayload) => {
          return skills.type != "tools" ? (
            <div id={skills.type} className="mt-8" key={skills.type}>
              <p className="text-white text-xl mb-4">{skills.title}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.skillsList.map((skillsListData) => {
                  return (
                    <SkillsLangs
                      key={skillsListData.name}
                      name={skillsListData.name}
                      logo={skillsListData.logo}
                      level={skillsListData.level}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <div key={skills.type} className="mt-10 ">
              <p className="text-xl text-white text-center">{skills.title}</p>
              <div
                id="icons"
                className="mt-4 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-4 place-items-center"
              >
                {skills.skillsList.map((tools) => (
                  <SkillTools name={tools.name} logo={tools.logo} key={tools.name} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
