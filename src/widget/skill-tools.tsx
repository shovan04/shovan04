import React from "react";

export type SkillToolsType = {
  name: string;
  logo: React.ReactNode; // Now accepts an SVG element or any React element.
};

export default function SkillTools({ name, logo }: SkillToolsType) {
  return (
    <div 
      className="flex flex-col items-center justify-center p-2 hover:scale-110 transition-transform duration-300" 
      id={`tool-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="mb-2">
        {logo}
      </div>
      <span className="text-center text-gray-200 text-sm font-medium tracking-wide">
        {name}
      </span>
    </div>
  );
}
