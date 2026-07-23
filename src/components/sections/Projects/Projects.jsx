import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../../data/projects";
import { Reveal } from "../../ui/Reveal/Reveal";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { StatusPill } from "../../ui/StatusPill/StatusPill";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects" className={`container ${styles.section}`}>
      <Reveal>
        <SectionHeading
          stage="SHIP"
          title="Projects"
          description="Three things that made it past the demo and into a running state."
        />
      </Reveal>

      <div className={styles.grid}>
        {PROJECTS.map((project, i) => (
          <Reveal as="article" key={project.name} delay={i * 70} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.tag}>{project.tag}</span>
              <StatusPill status={project.status} />
            </div>

            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>

            <ul className={styles.stack}>
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <a href={project.link} target="_blank" rel="noreferrer" className={styles.link}>
              View repository <ArrowUpRight size={14} />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
