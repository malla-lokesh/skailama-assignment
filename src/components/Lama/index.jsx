import { Link } from "react-router-dom";
import styles from "../../styles/Lama.module.css";
import CompanyLogo from "../../svgs/CompanyLogo";

const Lama = () => {
  return (
    <Link to={"/"}>
      <div className={styles.logoSection}>
        <CompanyLogo />
        <div className={styles.companyName}>LAMA.</div>
      </div>
    </Link>
  );
};

export default Lama;
