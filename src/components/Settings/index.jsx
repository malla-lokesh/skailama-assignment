import styles from "../../styles/Settings.module.css";
import BreadCrumb from "../BreadCrumb";
import img from "../../../public/img.png";

const Settings = () => {
  const email = localStorage.getItem("email") || "";

  return (
    <div className={styles.settingsOutlet}>
      <BreadCrumb route={"Account Settings"} />
      <div className={styles.accountSettingsTitle}>Account Settings</div>
      <div className={styles.accountDetails}>
        <img
          src={img}
          alt="profile picture"
          className={styles.profilePicture}
        />
        <div className={styles.userNameDetails}>
          <label htmlFor="username" className={styles.userNameLabel}>
            User Name
          </label>
          <input type="text" id="username" className={styles.userName} />
        </div>
        <div className={styles.emailDetails}>
          <label htmlFor="Email" className={styles.emailLabel}>
            Email
          </label>
          <input
            type="email"
            id="Email"
            className={styles.email}
            value={email}
            disabled
          />
        </div>
      </div>
      <div className={styles.subscriptionsTitle}>Subscriptions</div>
      <div className={styles.subscriptionBanner}>
        <div>
          You are currently on the{" "}
          <span className={styles.planDetails}>Ques AI Basic Plan!</span>
        </div>
        <button className={styles.upgradeButton}>Upgrade</button>
      </div>
      <div className={styles.cancelSubscription}>Cancel Subscription</div>
    </div>
  );
};

export default Settings;
