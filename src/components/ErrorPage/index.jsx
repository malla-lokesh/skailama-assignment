import styles from "../../styles/ErrorPage.module.css";
import Error from "../../svgs/Error";

const ErrorPage = () => {
  return (
    <div className={styles.errorPageTitle}>
      <Error />
      <div>You've seem lost</div>
      <div>There is not such URL</div>
    </div>
  );
};

export default ErrorPage;
