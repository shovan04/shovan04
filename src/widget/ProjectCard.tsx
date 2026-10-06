import Icon from "./icon";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  link: string;
  highlight?: string;
}

export default function ProjectCard({ title, description, tags, icon, link, highlight }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="panel interactive-card project-card" aria-label={`View ${title} on GitHub (opens in a new tab)`}>
      <div className="project-card-top">
        <div className="project-logo"><img src={icon} alt="" width="36" height="36" loading="lazy" /></div>
        <span className="project-type" aria-hidden="true">Open source</span>
      </div>
      <div className="project-title-row"><h2>{title}</h2>{highlight && <span className="project-highlight">{highlight}</span>}</div>
      <p className="project-description">{description}</p>
      <div className="project-tags">
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <div className="project-card-bottom"><span>View project</span><Icon name="arrow-up-right" /></div>
    </a>
  );
}
