import { GraduationCap, Award } from "lucide-react";
import { PROFILE } from "../../../data/profile";
import { EDUCATION, CERTIFICATIONS } from "../../../data/skills";
import { Reveal } from "../../ui/Reveal/Reveal";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={`container ${styles.section}`}>
      <Reveal>
        <SectionHeading
          stage="INIT"
          title="About"
          description="Where the infrastructure background comes from, and what it's built on."
        />
      </Reveal>

      <div className={styles.grid}>
        <Reveal className={styles.bio}>
          <p>
            {PROFILE.name} is a {PROFILE.role.toLowerCase()} based in {PROFILE.location}. Her work
            sits at the seam between the two halves of shipping a product: the AWS architecture
            underneath it, and the interface people actually touch on top of it.
          </p>
          <p>
            She's led a 4-person team through a full cloud deployment with zero missed milestones,
            containerized and orchestrated applications with Docker and Kubernetes, and shipped
            frontend features for a live SaaS product under real GitHub review cycles — not just
            practice repos.
          </p>
        </Reveal>

        <div className={styles.column}>
          <Reveal delay={80} as="div" className={styles.card}>
            <div className={styles.cardHeader}>
              <GraduationCap size={17} />
              <h3>Education</h3>
            </div>
            <ul className={styles.list}>
              {EDUCATION.map((item) => (
                <li key={item.school} className={styles.listItem}>
                  <p className={styles.listPrimary}>{item.school}</p>
                  <p className={styles.listSecondary}>{item.program}</p>
                  <p className={styles.listMeta}>{item.period}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160} as="div" className={styles.card}>
            <div className={styles.cardHeader}>
              <Award size={17} />
              <h3>Certifications</h3>
            </div>
            <ul className={styles.list}>
              {CERTIFICATIONS.map((item) => (
                <li key={item.name} className={styles.listItem}>
                  <p className={styles.listPrimary}>{item.name}</p>
                  <p className={styles.listSecondary}>
                    {item.issuer} · {item.location}
                  </p>
                  <p className={styles.listMeta}>{item.date}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
