import { FormEvent } from "react";
import { ContactData } from "../data/contact-data";
import Icon from "../widget/icon";
import SectionHeading from "../widget/section-heading";
import SocialLinks from "../widget/social-links";
import Reveal from "../widget/reveal";

const ContactPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const subject = encodeURIComponent(String(form.get("subject") || "Portfolio enquiry"));
    const message = encodeURIComponent(`Hi Shovan,\n\n${String(form.get("message") || "")}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${ContactData.email}?subject=${subject}&body=${message}`;
  };

  return (
    <section>
      <SectionHeading
        eyebrow="Say hello"
        title="Let’s build something useful."
        description="Have an idea, an opportunity, or just want to talk engineering? Send a message and I’ll get back to you."
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="panel contact-info h-full">
            <p className="eyebrow">Open to conversations</p>
            <h2>Let’s connect.</h2>
            <p className="contact-intro">I’m always interested in thoughtful projects, new collaborations, and conversations about building better systems.</p>
            <dl>
              <div className="contact-detail">
                <Icon name="mail" />
                <div><dt>Email</dt><dd><a href={`mailto:${ContactData.email}`}>{ContactData.email}</a></dd></div>
              </div>
              <div className="contact-detail">
                <Icon name="pin" />
                <div><dt>Location</dt><dd>{ContactData.location}</dd></div>
              </div>
            </dl>
            <div className="contact-socials"><p>Find me elsewhere</p><SocialLinks /></div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="panel contact-form" onSubmit={handleSubmit}>
            <h2>Send a message</h2>
            <p className="form-note mt-2 mb-6">Your email app will open with the message ready to send.</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="Jane Doe" autoComplete="name" required /></div>
              <div className="form-field"><label htmlFor="email">Your email</label><input id="email" name="email" type="email" placeholder="jane@example.com" autoComplete="email" required /></div>
            </div>
            <div className="form-field mt-4"><label htmlFor="subject">Subject</label><input id="subject" name="subject" type="text" placeholder="A new project" required /></div>
            <div className="form-field mt-4"><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="Tell me a little about what you’re working on..." required /></div>
            <button type="submit" className="button button-primary mt-6 w-full">Open email draft <Icon name="arrow-up-right" /></button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactPage;
