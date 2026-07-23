import { useReveal } from "../../../hooks/useReveal";
import styles from "./Reveal.module.css";

/**
 * Fades + lifts children into place once scrolled into view.
 * `as` lets the caller choose the rendered element (div, li, article, ...).
 */
export function Reveal({ as: Tag = "div", delay = 0, className = "", children, style = {} }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.visible : ""} ${className}`}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
