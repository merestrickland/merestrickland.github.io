import { useParams, Link } from "react-router-dom";

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <div className="container">
      <nav>
        <Link to="/">← Back to Portfolio</Link>
      </nav>

      <main>
        <h1>Project: {projectId}</h1>
        <p>This is a placeholder for your {projectId} project page.</p>

        {/* Add your project content here */}
        <section>
          <h2>About this project</h2>
          <p>Describe your project here...</p>
        </section>

        <section>
          <h2>Technologies used</h2>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Vite</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
