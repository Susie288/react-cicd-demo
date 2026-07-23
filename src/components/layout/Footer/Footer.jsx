import { PROFILE } from "../../../data/profile";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.line}>
          <span className={styles.prompt}>$</span> echo "{PROFILE.name} · {PROFILE.location}"
        </span>
        <span className={styles.copy}>&copy; 2026 — Susie.dev &amp; React</span>
      </div>
    </footer>
  );
}
