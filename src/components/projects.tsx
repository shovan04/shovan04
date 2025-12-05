import React from "react";
import ProjectCard from "../widget/ProjectCard";
import { Project, projects } from "../data/projects-data";

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-CaskaydiaSemiBold text-white mb-4">
          My Innovative Projects
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project: Project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            icon={project.icon}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
