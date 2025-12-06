import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  icon,
  link,
}) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-secondary p-6 rounded-xl border border-transparent hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 group h-full flex flex-col block"
    >
      <div className="mb-4 bg-primary/50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <img src={icon} alt={title} className="w-8 h-8 object-contain" />
      </div>
      
      <h3 className="text-xl font-CaskaydiaSemiBold text-accent mb-2 group-hover:text-white transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed text-justify">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="text-xs px-3 py-1 rounded-full bg-primary/50 text-gray-300 border border-gray-700/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
