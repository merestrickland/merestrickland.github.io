import { Link, useParams } from "react-router-dom";
import ExternalLinkIcon from "../components/ExternalLinkIcon";
import ProjectMediaCarousel from "../components/ProjectMediaCarousel";
import Tag from "../components/Tag";
import { findProject } from "../data/projects";
import styles from "./ProjectPage.module.css";

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? findProject(projectId) : undefined;

  if (!project) {
    return (
      <>
        <h1>Project not found</h1>
        <Link to="/">← Back to home</Link>
      </>
    );
  }

  return (
    <>
      {project.outlineImage && (
        <img src={project.outlineImage} alt="" width={80} height={80} />
      )}
      <div className={styles.headingRow}>
        <h1 className={styles.title}>{project.title}</h1>
        {project.liveUrl && (
          <a
            className={styles.external}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`See ${project.title} in action`}
            data-tooltip="see it in action"
          >
            <ExternalLinkIcon className={styles.externalIcon} size={22} />
          </a>
        )}
      </div>

      {project.stack && project.stack.length > 0 && (
        <ul className={styles.tags}>
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      )}

      {project.media && project.media.length > 0 && (
        <ProjectMediaCarousel
          media={project.media}
          projectTitle={project.title}
        />
      )}

      <div className={styles.copy}>
        {/* {project.tagline && <p>{project.tagline}</p>} */}

        {project.technicalHighlights &&
          project.technicalHighlights.length > 0 && (
            <section>
              <h2>Technical Highlights</h2>
              <ul className={styles.highlights}>
                {project.technicalHighlights.map((highlight) => (
                  <li key={highlight.text}>
                    <span className={styles.highlightEmoji} aria-hidden="true">
                      {highlight.emoji}
                    </span>
                    <span>{highlight.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
      </div>

      <nav className={styles.back}>
        <Link to="/" className={styles.backLink}>
          <span className={styles.backEmoji} aria-hidden="true">
            👈🏻
          </span>
          Back to portfolio
        </Link>
      </nav>
    </>
  );
}
