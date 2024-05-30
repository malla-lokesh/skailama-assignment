import CompanyLogo from "../../svgs/CompanyLogo";
import Settings from "../../svgs/Settings";
import Notifications from "../../svgs/Notifications";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.logoSection}>
        <CompanyLogo />
        <div className={styles.companyName}>LAMA.</div>
      </div>
      <div className={styles.actionsSection}>
        <Settings />
        <Notifications />
      </div>
    </nav>
  );
};

export default Navbar;
