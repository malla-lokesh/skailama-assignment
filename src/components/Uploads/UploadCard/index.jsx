import styles from "../../../styles/UploadCard.module.css";

const UploadCard = (props) => {
  return (
    <div className={styles.uploadCard}>
      {props.svg}
      <div>
        <div>Upload</div>
        <div>{props.uploadSource}</div>
      </div>
    </div>
  );
};

export default UploadCard;
