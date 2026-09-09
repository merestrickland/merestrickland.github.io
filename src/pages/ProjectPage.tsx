import { Link, useParams } from "react-router-dom";
import { findProject } from "../data/projects";

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
      <h1>{project.title}</h1>
      {project.tagline && <p>{project.tagline}</p>}

      <section>
        <h2>Technical Highlights</h2>
        <ul>
          {project.technicalHighlights?.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Stack</h2>
        <ul>
          {project.stack?.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
