import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE } from "../../../data/experience";
import { Reveal } from "../../ui/Reveal/Reveal";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" className={`container ${styles.section}`}>
      <Reveal>
        <SectionHeading
          stage="BUILD"
          title="Experience"
          description="Roles and projects, newest first — each one a build worth reading the log for."
        />
      </Reveal>

      <ol className={styles.timeline}>
        {EXPERIENCE.map((job, i) => (
          <Reveal as="li" key={job.role} delay={i * 60} className={styles.entry}>
            <div className={styles.entryMarker} aria-hidden="true">
              <span className={styles.entryDot} />
              {i !== EXPERIENCE.length - 1 && <span className={styles.entryLine} />}
            </div>

            <div className={styles.entryBody}>
              <div className={styles.entryHead}>
                <div>
                  <h3 className={styles.entryRole}>{job.role}</h3>
                  <p className={styles.entryOrg}>
                    {job.org}
                    {job.location && ` · ${job.location}`}
                  </p>
                </div>
                <span className={styles.entryPeriod}>{job.period}</span>
              </div>

              <ul className={styles.entryPoints}>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className={styles.entryFooter}>
                <ul className={styles.entryTools}>
                  {job.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
                {job.link && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.entryLink}
                  >
                    Repository <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
