import Home from "../../svgs/Home";
import Notifications from "../../svgs/Notifications";
import styles from "../../styles/BreadCrumb.module.css";

const BreadCrumb = (props) => {
  return (
    <nav className={styles.uploadsNavbar}>
      <ul className={styles.uploadsUnorderedList}>
        <li className={styles.uploadsNavListItem}>
          <Home />
          <div className={styles.navText}>/ Sample Project /</div>
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
