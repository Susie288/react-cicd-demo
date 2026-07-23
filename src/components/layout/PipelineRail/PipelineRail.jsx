import { NAV_LINKS } from "../../../data/nav";
import styles from "./PipelineRail.module.css";

/**
 * The page's signature element: a vertical CI/CD rail running down the
 * left margin on wide screens. Each section is a real pipeline stage
 * (INIT / BUILD / SHIP / RUN / CONNECT), and a pulse travels the rail as
 * the reader scrolls — the page rendering itself the way her projects do.
 */
export function PipelineRail({ activeId, progress }) {
  const activeIndex = NAV_LINKS.findIndex((link) => link.id === activeId);

  return (
    <nav className={styles.rail} aria-label="Section pipeline">
      <div className={styles.track}>
        <div
          className={styles.pulse}
          style={{ top: `${progress * 100}%` }}
          aria-hidden="true"
        />
      </div>

      <ol className={styles.stages}>
        {NAV_LINKS.map((link, i) => (
          <li key={link.id} className={styles.stageItem}>
            <a
              href={`#${link.id}`}
              className={`${styles.node} ${i <= activeIndex ? styles.nodeDone : ""} ${
                link.id === activeId ? styles.nodeActive : ""
              }`}
            >
              <span className={styles.nodeDot} aria-hidden="true" />
              <span className={styles.nodeLabel}>{link.stage}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
