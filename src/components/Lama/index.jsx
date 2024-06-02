import styles from "../../styles/Lama.module.css";
import CompanyLogo from "../../svgs/CompanyLogo";

const Lama = () => {
  return (
    <div className={styles.logoSection}>
      <CompanyLogo />
      <div className={styles.companyName}>LAMA.</div>
    </div>
  );
};

export default Lama;
