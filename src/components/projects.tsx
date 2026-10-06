import ProjectCard from "../widget/ProjectCard";
import { projects } from "../data/projects-data";
import SectionHeading from "../widget/section-heading";
import Reveal from "../widget/reveal";
import Icon from "../widget/icon";

const Projects = () => {
  return (
    <section>
      <SectionHeading
        eyebrow="Selected work"
        title="Ideas, built into reality."
        description="From a C++ cryptography CLI I created to secure upload infrastructure, these projects show how I learn by building useful systems."
        action={<a href="https://github.com/shovan04" target="_blank" rel="noopener noreferrer" className="button button-secondary">More on GitHub <Icon name="arrow-up-right" /></a>}
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) * 60} className="h-full">
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
