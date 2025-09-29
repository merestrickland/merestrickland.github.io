import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Meredith Strickland</h1>
      <p>Welcome to my portfolio</p>

      <section>
        <h2>Projects</h2>
        <div className="project-links">
          <Link to="/projects/example" className="project-link">
            Example Project
          </Link>
          {/* Add more project links here */}
        </div>
      </section>
    </div>
  );
}
