import { Link } from "react-router-dom";
import { profile } from "../data/profile-data";
import Icon from "../widget/icon";
import Reveal from "../widget/reveal";
import SectionHeading from "../widget/section-heading";

const facts = [
  { value: "19", label: "public repositories" },
  { value: "C++", label: "NovaCrypt creator" },
  { value: "Kolkata", label: "based in India" },
];

export default function AboutPage() {
  return (
    <section>
      <SectionHeading
        eyebrow="About me"
        title="I build the part you don’t always see."
        description="The APIs, data models, and system decisions that make a product feel dependable."
        action={<a href={profile.github} target="_blank" rel="noopener noreferrer" className="button button-secondary">Open GitHub <Icon name="arrow-up-right" /></a>}
      />

      <div className="about-layout">
        <Reveal>
          <article className="panel about-story">
            <div className="about-story-heading"><span className="about-avatar">SM</span><div><p className="eyebrow">{profile.handle}</p><h2>{profile.name}</h2></div></div>
            <p>{profile.bio}</p>
            <p>{profile.about}</p>
            <div className="about-links">
              <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-link"><Icon name="globe" /> Personal site <Icon name="arrow-up-right" /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-link"><Icon name="linkedin" /> LinkedIn <Icon name="arrow-up-right" /></a>
            </div>
          </article>
        </Reveal>

        <Reveal delay={90}>
          <div className="terminal-card" aria-label="Shovan's developer profile">
            <div className="terminal-header"><span /><span /><span /><small>shovan@systems ~</small></div>
            <div className="terminal-body">
              <p><span className="terminal-prompt">$</span> whoami</p>
              <p className="terminal-output">{profile.name} <span className="text-accent">@{profile.handle}</span></p>
              <p><span className="terminal-prompt">$</span> cat focus.txt</p>
              <p className="terminal-output">efficient systems<br />reliable APIs<br />code that lasts<span className="terminal-cursor" /></p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="about-facts">
        {facts.map((fact, index) => (
          <Reveal key={fact.label} delay={index * 70}>
            <div className="panel fact-card"><strong>{fact.value}</strong><span>{fact.label}</span></div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <article className="panel about-current">
          <div className="about-current-icon"><Icon name="sparkles" /></div>
          <div><p className="eyebrow">What I’m working on</p><h2>Building with Proveniq</h2><p>{profile.currentFocus}</p></div>
          <Link to="/contact" className="button button-primary">Let’s talk <Icon name="arrow-up-right" /></Link>
        </article>
      </Reveal>

      <Reveal>
        <article className="panel novacrypt-callout">
          <div className="novacrypt-icon"><Icon name="terminal" /></div>
          <div><p className="eyebrow">Creator spotlight</p><h2>NovaCrypt</h2><p>I created NovaCrypt, a C++ command-line project for encrypting and decrypting text and files with configurable key and salt parameters.</p></div>
          <a href="https://github.com/shovan04/NovaCrypt" target="_blank" rel="noopener noreferrer" className="text-link">View on GitHub <Icon name="arrow-up-right" /></a>
        </article>
      </Reveal>
    </section>
  );
}
