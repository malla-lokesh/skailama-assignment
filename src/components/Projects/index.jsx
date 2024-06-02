import Button from "../../UI/Button/Button";
import styles from "../../styles/Projects.module.css";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className={styles.projectsSection}>
      <div className={styles.headerSection}>
        <div className={styles.projectsTitle}>Projects</div>
        <Button text={"Create New Project"} />
      </div>
      <div className={styles.projectsGrid}>
        <Link to={"/uploads"}>
          <ProjectCard />
        </Link>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
