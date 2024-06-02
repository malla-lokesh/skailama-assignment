import Home from "../../svgs/Home";
import Notifications from "../../svgs/Notifications";
import styles from "../../styles/BreadCrumb.module.css";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = (props) => {
  const location = useLocation();
  const ifUploadPage = location?.pathname === "/uploads";

  return (
    <nav className={styles.uploadsNavbar}>
      <ul className={styles.uploadsUnorderedList}>
        <li className={styles.uploadsNavListItem}>
          <Link to={"/"}>
            <Home />
          </Link>
          <span>/</span>
          {ifUploadPage ? (
            <Link to={"/projects"}>
              <div className={styles.navText}>Sample Project / </div>
            </Link>
          ) : null}
          <div className={styles.routeText}>{props?.route}</div>
        </li>
        <li>
          <Notifications />
        </li>
      </ul>
    </nav>
  );
};

export default BreadCrumb;
