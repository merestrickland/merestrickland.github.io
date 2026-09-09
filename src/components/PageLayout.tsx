import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./PageLayout.module.css";

export default function PageLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const showBackLink = !isHome;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {showBackLink && (
          <nav className={styles.nav}>
            <Link to="/">← Back to Portfolio</Link>
          </nav>
        )}
        <main className={isHome ? styles.content : undefined}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
