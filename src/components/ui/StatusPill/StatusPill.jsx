import styles from "./StatusPill.module.css";

const TONE_BY_STATUS = {
  Live: "deploy",
  Deployed: "deploy",
  Delivered: "wire",
};

/** A small status badge styled like a deploy-log state (Live / Deployed / Delivered). */
export function StatusPill({ status }) {
  const tone = TONE_BY_STATUS[status] ?? "signal";

  return (
    <span className={`${styles.pill} ${styles[tone]}`}>
      <span className={styles.dot} aria-hidden="true" />
      {status}
    </span>
  );
}
