import { Link } from "react-router-dom";
import Icon from "../widget/icon";
import Reveal from "../widget/reveal";
import SocialLinks from "../widget/social-links";
import { profile } from "../data/profile-data";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow"><span className="status-dot" /> {profile.role} · {profile.education}</p>
            <h1 id="hero-title" className="hero-title">
              Building systems<br /><span>that last.</span>
            </h1>
            <p className="hero-description">
              I’m {profile.name}, a backend developer who enjoys building and
              breaking systems. TypeScript and Python by choice, with a focus
              on efficient, scalable code that lasts.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="hero-stack" aria-label="Primary technologies">
              <span>@{profile.handle}</span><span>TypeScript</span><span>Python</span><span>PostgreSQL</span>
            </div>
            <div className="hero-actions">
              <Link to="/projects" className="button button-primary">Explore projects <Icon name="arrow-up-right" /></Link>
              <a href="/Shovan-resume-.pdf" download className="button button-secondary">Download CV <Icon name="download" /></a>
            </div>
            <div className="hero-socials">
              <span className="text-xs text-gray-400">Find me on</span>
              <SocialLinks />
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="hero-visual">
          <div className="portrait-orbit">
            <div className="portrait-frame">
              <img src="/my-photo.png" alt="Portrait of Shovan Mondal" width="1254" height="1254" fetchPriority="high" />
            </div>
            <span className="portrait-code" aria-hidden="true">&lt;/&gt;</span>
            <div className="portrait-caption"><span className="status-dot" /> Turning ideas into systems</div>
          </div>
          <p className="portrait-note"><span className="text-accent">const</span> curiosity = <span className="text-accent">true</span>;</p>
        </Reveal>
      </section>

      <section aria-labelledby="focus-title" className="home-focus">
        <Reveal>
          <div className="section-label"><h2 id="focus-title">What I bring to the build</h2></div>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Reveal className="h-full">
            <div className="panel interactive-card focus-card h-full"><Icon name="server" /><h3>Backend engineering</h3><p>APIs, authentication, and reliable services with Node.js, NestJS, and Python.</p></div>
          </Reveal>
          <Reveal delay={70} className="h-full">
            <div className="panel interactive-card focus-card h-full"><Icon name="layers" /><h3>Systems that scale</h3><p>Thoughtful data models, caching, and cloud-native tools for a solid foundation.</p></div>
          </Reveal>
          <Reveal delay={140} className="h-full">
            <div className="panel interactive-card focus-card h-full"><Icon name="code" /><h3>Always exploring</h3><p>Learning by building, from developer tooling to practical real-world products.</p></div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <div className="current-focus panel">
          <div><p className="eyebrow">Currently building</p><p>Contributing to <span className="text-white">{profile.company}</span> — backend systems, APIs, and infrastructure.</p></div>
          <Link to="/about" className="text-link">More about me <Icon name="arrow-right" /></Link>
        </div>
      </Reveal>

      <Reveal>
        <section className="home-about panel" aria-labelledby="home-about-title">
          <div><p className="eyebrow">A little more context</p><h2 id="home-about-title">Curious about the details.</h2><p>{profile.about}</p></div>
          <Link to="/about" className="button button-secondary">Read my story <Icon name="arrow-up-right" /></Link>
        </section>
      </Reveal>
    </div>
  );
};

export default HomePage;
