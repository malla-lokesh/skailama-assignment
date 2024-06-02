import Settings from "../../svgs/Settings";
import Notifications from "../../svgs/Notifications";
import styles from "../../styles/Navbar.module.css";
import Lama from "../Lama";

const Navbar = () => {
  return (
    <nav>
      <Lama />
      <div className={styles.actionsSection}>
        <Settings />
        <Notifications />
      </div>
    </nav>
  );
};

export default Navbar;
