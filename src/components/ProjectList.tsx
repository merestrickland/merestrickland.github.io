import { Link } from "react-router-dom";
import { professionalProjects } from "../data/projects";
import ExternalLinkIcon from "./ExternalLinkIcon";
import styles from "./ProjectList.module.css";

export default function ProjectList() {
  return (
    <section className={styles.section} aria-label="Work">
      <h2 className={styles.heading}>Selected Professional Projects</h2>

      <ul className={styles.list}>
        {professionalProjects.map((project) => (
          <li key={project.id} className={styles.item}>
            <div className={styles.row}>
              <Link
                className={styles.link}
                to={`/projects/${project.id}`}
                data-tooltip="see details"
              >
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
                  aria-label={`See ${project.title} in action`}
                  data-tooltip="see it in action"
                  data-tooltip-align="end"
                >
                  <ExternalLinkIcon className={styles.externalIcon} />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
