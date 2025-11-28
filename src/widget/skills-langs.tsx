import React, { useEffect, useState } from "react";
import { SkillsPayload } from "../data/skills.data";

export default function SkillsLangs({ name, logo, level }: SkillsPayload) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimatedLevel(level), 200);
    return () => clearTimeout(timeout);
  }, [level]);

  return (
    <div
      id={`${name.toLowerCase().replace(" ", "-")}-item`}
      className="flex flex-col items-start gap-4 bg-secondary p-6 rounded-md cursor-pointer"
    >
      <div className="lang-name-ico flex flex-row items-center gap-2 text-white text-xl font-medium">
        {logo}
        {name}
      </div>
      <div className="progress-bar w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="progress-bar-fill bg-accent rounded-full h-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedLevel}%` }}
        ></div>
      </div>
    </div>
  );
}
