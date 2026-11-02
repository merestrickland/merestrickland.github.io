import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./PageLayout.module.css";

export default function PageLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className={styles.page}>
      {!isHome && (
        <nav className={styles.nav} aria-label="Main">
          <Link to="/" className={styles.logo}>
            Meredith
            <br />
            Strickland
          </Link>
        </nav>
      )}
      <div className={styles.container}>
        <main className={isHome ? styles.content : undefined}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
