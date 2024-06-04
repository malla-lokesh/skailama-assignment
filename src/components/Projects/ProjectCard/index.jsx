import styles from "../../../styles/ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.initials}>{project?.name[0].toUpperCase()}</div>
      <div className={styles.projectCardInfo}>
        <div className={styles.nameAndEpisodes}>
          <div className={styles.projectName}>{project?.name}</div>
          <div className={styles.projectEpisodes}>
            {project?.files.length} Episodes
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
