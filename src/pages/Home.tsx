import ProjectList from "../components/ProjectList";
import SiteLinks from "../components/SiteLinks";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className="display-heading site-title">Meredith Strickland</h1>
      <ProjectList />
      <SiteLinks />
    </div>
  );
}
