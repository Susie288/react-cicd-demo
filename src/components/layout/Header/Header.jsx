import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../../data/nav";
import { PROFILE } from "../../../data/profile";
import styles from "./Header.module.css";

export function Header({ activeId }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandDot} aria-hidden="true" />
          {PROFILE.shortName}
          <span className={styles.brandSuffix}>.dev</span>
        </a>

        <nav className={styles.navDesktop} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.navLink} ${link.id === activeId ? styles.navLinkActive : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className={styles.cta} href={`mailto:${PROFILE.email}`}>
          Say hello
        </a>

        <button
          className={styles.menuButton}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className={styles.navMobile} aria-label="Primary mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={`mailto:${PROFILE.email}`} onClick={() => setOpen(false)} className={styles.navMobileCta}>
            Say hello
          </a>
        </nav>
      )}
    </header>
  );
}
