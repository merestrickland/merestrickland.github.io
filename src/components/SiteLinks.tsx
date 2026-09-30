import { Link } from "react-router-dom";
import { siteLinks } from "../data/projects";
import styles from "./SiteLinks.module.css";

export default function SiteLinks() {
  const isExternal = (href: string) =>
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.endsWith(".pdf");

  return (
    <nav className={styles.nav} aria-label="More">
      {siteLinks.map((link) => {
        const className = `${styles.link} ${"large" in link && link.large ? styles.large : ""}`;

        return isExternal(link.href) ? (
          <a key={link.href} className={className} href={link.href}>
            {link.label}
          </a>
        ) : (
          <Link key={link.href} className={className} to={link.href}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
