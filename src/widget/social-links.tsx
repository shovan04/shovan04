import Icon from "./icon";
import SocialIcon from "./socialicon";

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social profiles">
      <SocialIcon title="GitHub" socialUrl="https://github.com/shovan04"><Icon name="github" /></SocialIcon>
      <SocialIcon title="LinkedIn" socialUrl="https://linkedin.com/in/shovan04/"><Icon name="linkedin" /></SocialIcon>
      <SocialIcon title="X" socialUrl="https://x.com/shovan_04"><Icon name="x" /></SocialIcon>
      <SocialIcon title="Instagram" socialUrl="https://instagram.com/clusteratic/"><Icon name="instagram" /></SocialIcon>
      <SocialIcon title="Facebook" socialUrl="https://facebook.com/shovan04"><Icon name="facebook" /></SocialIcon>
    </div>
  );
}
