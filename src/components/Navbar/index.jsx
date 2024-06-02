import Settings from "../../svgs/Settings";
import Notifications from "../../svgs/Notifications";
import styles from "../../styles/Navbar.module.css";
import Lama from "../Lama";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.horizontalNavbar}>
      <Lama />
      <div className={styles.actionsSection}>
        <Link to={"/settings"}>
          <Settings />
        </Link>
        <Notifications />
      </div>
    </nav>
  );
};

export default Navbar;
