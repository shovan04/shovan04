import React from "react";

export type SkillToolsType = {
  name: string;
  logo: React.ReactNode; // Now accepts an SVG element or any React element.
};

export default function SkillTools({ name, logo }: SkillToolsType) {
  return (
    <div className="flex flex-col flex-grow items-center " id={`${name}`}>
      {logo}
      <p className="text-center text-white mt-2">{name}</p>
    </div>
  );
}
