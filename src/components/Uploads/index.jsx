import React from "react";
import styles from "../../styles/Uploads.module.css";
import BreadCrumb from "../BreadCrumb";
import UploadCard from "./UploadCard";
import YT from "../../svgs/YT";
import Spotify from "../../svgs/Spotify";
import RSS from "../../svgs/RSS";

const Uploads = () => {
  return (
    <div className={styles.uploadsOutlet}>
      <BreadCrumb route={"Upload"} />
      <div className={styles.uploadTitle}>Upload</div>
      <div className={styles.uploadGrid}>
        <UploadCard svg={<YT />} uploadSource={"Youtube Video"} />
        <UploadCard svg={<Spotify />} uploadSource={"Spotify Podcast"} />
        <UploadCard svg={<RSS />} uploadSource={"RSS Feed"} />
      </div>
      <div>
        Files{" "}
        {/** Fetch the files of the associated projects of the user display them and add option to edit and delete the files and write logic for it. */}
      </div>
    </div>
  );
};

export default Uploads;
