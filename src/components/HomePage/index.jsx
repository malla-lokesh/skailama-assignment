import React, { useRef } from "react";
import Button from "../../UI/Button/Button";
import HomePageSVG from "../../svgs/HomePageSVG";
import styles from "../../styles/Homepage.module.css";
import Dialog from "../../UI/Dialog";

const HomePage = () => {
  const dialogRef = useRef(null);

  const handleOpenDialog = () => {
    if (dialogRef.current) dialogRef.current.showModal();
  };

  const handleCloseDialog = () => {
    if (dialogRef.current) dialogRef.current.close();
  };

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
      <Button text={"Create New Project"} openDialog={handleOpenDialog} />
      <Dialog ref={dialogRef}>
        <h2>Create Project</h2>
        <label htmlFor="project-name">Enter Project Name:</label>
        <input type="text" id="project-name" placeholder="Type here" />
        <div className={styles.btnGroup}>
          <button className={styles.cancelBtn} onClick={handleCloseDialog}>
            Cancel
          </button>
          <button className={styles.createBtn} onClick={handleCloseDialog}>
            Create
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default HomePage;
