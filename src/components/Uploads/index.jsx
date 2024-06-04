import React from "react";
import styles from "../../styles/Uploads.module.css";
import BreadCrumb from "../BreadCrumb";
import UploadCard from "./UploadCard";
import YT from "../../svgs/YT";
import Spotify from "../../svgs/Spotify";
import RSS from "../../svgs/RSS";
import { useLocation } from "react-router-dom";

const Uploads = () => {
  const { state } = useLocation();
  console.log(state.project.files[1]);

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
        {state?.project?.files?.map((file) => {
          console.log(file);
          return (
            <div key={file.fileId}>
              <div>{file?.title}</div>
              <div>{file?.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Uploads;
