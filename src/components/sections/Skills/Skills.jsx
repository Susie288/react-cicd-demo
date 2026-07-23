import { Code2, Cloud, Server, Users } from "lucide-react";
import { SKILLS } from "../../../data/skills";
import { Reveal } from "../../ui/Reveal/Reveal";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import styles from "./Skills.module.css";

const ICONS = { Code2, Cloud, Server, Users };

export function Skills() {
  return (
    <section id="skills" className={`container ${styles.section}`}>
      <Reveal>
        <SectionHeading
          stage="RUN"
          title="Skills"
          description="What's running in production day to day."
        />
      </Reveal>

      <div className={styles.grid}>
        {SKILLS.map((group, i) => {
          const Icon = ICONS[group.icon];
          return (
            <Reveal as="div" key={group.group} delay={i * 60} className={styles.card}>
              <div className={styles.cardHeader}>
                {Icon && <Icon size={18} />}
                <h3>{group.group}</h3>
              </div>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
