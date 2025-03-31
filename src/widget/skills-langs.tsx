import React from "react";

export type LangsType = {
  name: string;
  logo: React.ReactNode; // Now accepts an SVG element or any React element.
  level: number;
};

export default function SkillsLangs({ name, logo, level }: LangsType) {
  return (
    <div
      id={`${name.toLowerCase().replace(" ", "-")}-item`}
      className="flex flex-col items-start gap-4 bg-secondary p-6 rounded-md"
    >
      <div className="lang-name-ico flex flex-row items-center gap-2 text-white text-xl font-medium">
        {logo}
        {name}
      </div>
      <div className="progress-bar w-full bg-gray-700 rounded-full h-2">
        <div
          className="progress-bar-fill bg-accent rounded-full h-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}
