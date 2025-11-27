import SkillTools from "../widget/skill-tools";
import SkillsLangs from "../widget/skills-langs";
import SkillsData, { SkillsDataPayload, SkillsPayload } from "../data/skills.data";

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
      {
        SkillsData.map((skills: SkillsDataPayload, idx: number)=>{
          console.log(idx);
        return (
          <div id={skills.type} className="mt-8" key={idx}>
          <p className="text-white text-xl mb-4">{skills.title}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
              skills.skillsList.map((skillsListData: SkillsPayload, idx: number)=>{
                return (
                  <SkillsLangs
                  key={idx}
                  name={skillsListData.name}
                  logo={skillsListData.logo}
                  level={skillsListData.level}
                  />
                )
              })
            }
            </div>
        </div>
        )
        })
      }
        
      </div>
    </div>
  );
}
