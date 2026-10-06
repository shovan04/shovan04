import certifications from "../data/journey-data";
import Icon from "../widget/icon";
import Reveal from "../widget/reveal";
import SectionHeading from "../widget/section-heading";

const ProfessionalJourney = () => {
  return (
    <section>
      <SectionHeading
        eyebrow="The journey"
        title="Always moving forward."
        description="A snapshot of the experiences and milestones shaping the way I think about software and engineering."
        action={<a href="/Shovan-resume-.pdf" download className="button button-primary">Download resume <Icon name="download" /></a>}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="panel timeline">
            <div className="subsection-heading"><h2>Education</h2></div>
            <div className="timeline-item">
              <p className="eyebrow">2024 — Present</p>
              <h3>Bachelor of Technology</h3>
              <p className="timeline-detail">Regent Education and Research Foundation</p>
              <p className="timeline-subject">Computer Science and Engineering</p>
            </div>
            <div className="timeline-item">
              <p className="eyebrow">2021 — 2023</p>
              <h3>Higher Secondary</h3>
              <p className="timeline-detail">West Bengal Council of Higher Secondary Education</p>
              <p className="timeline-subject">Science with Computer Science</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="subsection-heading"><h2>Certifications</h2></div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <Reveal key={cert.certId} delay={(index % 2) * 70} className="h-full">
                <article className="panel interactive-card certificate-card">
                  <Icon name="award" />
                  <h3>{cert.title}</h3>
                  <p className="certificate-provider">{cert.provider}</p>
                  <div className="certificate-meta">Issued {cert.year}<br /><span className="text-accent">{cert.certId}</span></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
