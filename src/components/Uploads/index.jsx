import Settings2 from "../../svgs/Settings2";
import Lama from "../Lama";
import styles from "../../styles/Uploads.module.css";

const Uploads = () => {
  return (
    <nav className={styles.uploadsNavbar}>
      <div className={styles.sections}>
        <Lama />
        <div>Podcast Upload Flow</div>
        <ol className={styles.orderedList}>
          <li className={styles.projectListItem}>Projects</li>
          <li className={styles.projectListItem}>Widget Configurations</li>
        </ol>
        <hr className={styles.horizontalLine} />
      </div>
      <div>
        <hr className={styles.horizontalLine} />
        <div className={styles.setting}>
          <Settings2 />
          <div className={styles.settingsText}>Settings</div>
        </div>
      </div>
    </nav>
  );
};

export default Uploads;
