import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../../../data/profile";
import { Reveal } from "../../ui/Reveal/Reveal";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={`container ${styles.section}`}>
      <Reveal>
        <SectionHeading stage="CONNECT" title="Contact" />
      </Reveal>

      <Reveal delay={80} className={styles.panel}>
        <h3 className={styles.headline}>Have something to build together?</h3>
        <p className={styles.subline}>
          Open to cloud engineering roles, full-stack work, and projects that need both sides done
          properly.
        </p>

        <div className={styles.links}>
          <a className={styles.linkPrimary} href={`mailto:${PROFILE.email}`}>
            <Mail size={16} /> {PROFILE.email}
          </a>
          <a className={styles.link} href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}>
            <Phone size={15} /> {PROFILE.phone}
          </a>
          <a className={styles.link} href={PROFILE.linkedinUrl} target="_blank" rel="noreferrer">
            <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
          </a>
          <a className={styles.link} href={PROFILE.githubUrl} target="_blank" rel="noreferrer">
            <Github size={15} /> GitHub <ArrowUpRight size={13} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
