import { Link } from "react-router-dom";
import { professionalProjects } from "../data/projects";
import styles from "./ProjectList.module.css";

function ExternalLinkIcon() {
  return (
    <svg
      className={styles.externalIcon}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function ProjectList() {
  return (
    <section className={styles.section} aria-label="Work">
      <h2 className={styles.heading}>Selected Professional Projects</h2>

      <ul className={styles.list}>
        {professionalProjects.map((project) => (
          <li key={project.id} className={styles.item}>
            <div className={styles.row}>
              <Link className={styles.link} to={`/projects/${project.id}`}>
                <span className={styles.text}>
                  <span className={styles.title}>{project.title}</span>
                  {project.tagline && (
                    <span className={styles.tagline}>{project.tagline}</span>
                  )}
                </span>
              </Link>

              {project.liveUrl && (
                <a
                  className={styles.external}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live site for ${project.title}`}
                >
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
