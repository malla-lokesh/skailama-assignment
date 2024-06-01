import styles from "../../../styles/ProjectCard.module.css";

const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.initials}>SP</div>
      <div className={styles.projectCardInfo}>
        <div className={styles.nameAndEpisodes}>
          <div className={styles.projectName}>Sample Project</div>
          <div className={styles.projectEpisodes}>4 Episodes</div>
        </div>
        <div className={styles.projectLastModified}>Last edited a week ago</div>
      </div>
    </div>
  );
};

export default ProjectCard;
