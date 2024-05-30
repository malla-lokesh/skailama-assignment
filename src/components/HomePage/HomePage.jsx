import React from "react";
import Button from "../../UI/Button/Button";
import HomePageSVG from "../../svgs/HomePageSVG";
import styles from "../../styles/Homepage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepageSection}>
      <div className={styles.homepageTitle}>Create a New Project</div>
      <HomePageSVG />
      <p className={styles.homepageDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
      <Button text={"Create New Project"} />
    </div>
  );
};

export default HomePage;
