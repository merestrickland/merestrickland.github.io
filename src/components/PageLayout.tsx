import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./PageLayout.module.css";

export default function PageLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isProjectPage = pathname.startsWith("/projects/");
  const showBackLink = !isHome && !isProjectPage;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {showBackLink && (
          <nav className={styles.nav}>
            <Link
              to="/"
              className={styles.homeLink}
              aria-label="Back to portfolio"
            >
              <span className={styles.emoji} aria-hidden="true">
                👈🏻
              </span>
              {/* <span className={styles.emoji} aria-hidden="true">
                👩🏻‍💻
              </span> */}
              Back to portfolio
            </Link>
          </nav>
        )}
        <main className={isHome ? styles.content : undefined}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
