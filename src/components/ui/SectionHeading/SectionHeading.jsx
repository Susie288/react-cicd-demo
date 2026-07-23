import styles from "./SectionHeading.module.css";

/**
 * Shared section header: a monospace stage label (matches the pipeline
 * rail), a display heading, and optional supporting copy.
 */
export function SectionHeading({ stage, title, description }) {
  return (
    <div className={styles.heading}>
      <span className={styles.stage}>
        <span className={styles.stageBracket}>[</span>
        {stage}
        <span className={styles.stageBracket}>]</span>
      </span>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
