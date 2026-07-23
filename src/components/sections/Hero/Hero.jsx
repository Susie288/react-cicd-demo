import { ArrowRight, MapPin } from "lucide-react";
import { PROFILE, STATS, TERMINAL_LINES } from "../../../data/profile";
import { useTypewriter } from "../../../hooks/useTypewriter";
import styles from "./Hero.module.css";

export function Hero() {
  const { renderedLines, done } = useTypewriter(TERMINAL_LINES);

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <MapPin size={13} /> {PROFILE.location}
          </p>
          <h1 className={styles.headline}>
            I ship cloud infrastructure
            <br />
            <span className={styles.headlineAccent}>the way I ship code —</span>
            <br />
            deliberately, and on schedule.
          </h1>
          <p className={styles.summary}>{PROFILE.summary}</p>

          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#projects">
              View the work <ArrowRight size={16} />
            </a>
            <a className={styles.secondaryAction} href="#contact">
              Get in touch
            </a>
          </div>

          <dl className={styles.stats}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statValue}>{stat.value}</dt>
                <dd className={styles.statLabel}>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.terminalWrap} aria-hidden="true">
          <div className={styles.terminal}>
            <div className={styles.terminalBar}>
              <span className={styles.terminalDot} data-tone="signal" />
              <span className={styles.terminalDot} data-tone="wire" />
              <span className={styles.terminalDot} data-tone="deploy" />
              <span className={styles.terminalTitle}>deploy.sh</span>
            </div>
            <div className={styles.terminalBody}>
              {TERMINAL_LINES.map((line, i) => {
                const text = renderedLines[i] ?? "";
                const isCurrent = i === renderedLines.length - 1 && !done;
                return (
                  <p key={line.text} className={`${styles.terminalLine} ${styles[line.type]}`}>
                    {line.type === "cmd" && <span className={styles.terminalPrompt}>$</span>}
                    {text}
                    {isCurrent && <span className={styles.cursor} />}
                  </p>
                );
              })}
              {done && (
                <p className={`${styles.terminalLine} ${styles.cmd}`}>
                  <span className={styles.terminalPrompt}>$</span>
                  <span className={styles.cursor} />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
