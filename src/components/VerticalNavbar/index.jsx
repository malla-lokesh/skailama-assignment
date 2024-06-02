import Lama from "../Lama";
import Settings2 from "../../svgs/Settings2";
import styles from "../../styles/VerticalNavbar.module.css";
import { Link } from "react-router-dom";

const VerticalNavbar = () => {
  return (
    <nav className={styles.uploadsNavbar}>
      <div className={styles.sections}>
        <Lama />
        <div>Podcast Upload Flow</div>
        <ol className={styles.orderedList}>
          <Link to={"/uploads"}>
            <li className={styles.projectListItem}>Projects</li>
          </Link>
          <li className={styles.projectListItem}>Widget Configurations</li>
        </ol>
        <hr className={styles.horizontalLine} />
      </div>
      <div>
        <hr className={styles.horizontalLine} />
        <Link to={"/settings"}>
          <div className={styles.setting}>
            <Settings2 />
            <div className={styles.settingsText}>Settings</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default VerticalNavbar;
