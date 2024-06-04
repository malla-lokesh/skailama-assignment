import React, { useRef, useState } from "react";
import styles from "../../../styles/UploadCard.module.css";
import Dialog from "../../../UI/Dialog";

const UploadCard = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dialogRef = useRef(null);

  const handleOpenDialog = () => {
    if (dialogRef.current) dialogRef.current.showModal();
  };

  const handleCloseDialog = () => {
    if (dialogRef.current) dialogRef.current.close();
    // Write logic to store text file in specific project of an associated email.
  };

  return (
    <React.Fragment>
      <div className={styles.uploadCard} onClick={handleOpenDialog}>
        {props.svg}
        <div>
          <div>Upload</div>
          <div>{props.uploadSource}</div>
        </div>
      </div>
      <Dialog ref={dialogRef}>
        <h2>New Text file</h2>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.titleInput}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Enter description here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className={styles.btnGroup}>
          <button className={styles.cancelBtn} onClick={handleCloseDialog}>
            Cancel
          </button>
          <button className={styles.saveBtn} onClick={handleCloseDialog}>
            Save
          </button>
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default UploadCard;
