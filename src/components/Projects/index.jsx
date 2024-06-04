import Button from "../../UI/Button/Button";
import styles from "../../styles/Projects.module.css";
import ProjectCard from "./ProjectCard";
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import Dialog from "../../UI/Dialog";

const Projects = () => {
  const location = useLocation();
  const { projects } = location?.state || {};
  console.log(projects);

  const dialogRef = useRef(null);

  const handleOpenDialog = () => {
    if (dialogRef.current) dialogRef.current.showModal();
  };

  const handleCloseDialog = () => {
    if (dialogRef.current) dialogRef.current.close();
  };

  const handleCreateProjectDialog = () => {
    // write logic to create project
  };

  return (
    <div className={styles.projectsSection}>
      <div className={styles.headerSection}>
        <div className={styles.projectsTitle}>Projects</div>
        <Button text={"Create New Project"} openDialog={handleOpenDialog} />
      </div>
      <Dialog ref={dialogRef}>
        <h2>Create Project</h2>
        <label htmlFor="project-name">Enter Project Name:</label>
        <input type="text" id="project-name" placeholder="Type here" />
        <div className={styles.btnGroup}>
          <button className={styles.cancelBtn} onClick={handleCloseDialog}>
            Cancel
          </button>
          <button
            className={styles.createBtn}
            onClick={handleCreateProjectDialog}
          >
            Create
          </button>
        </div>
      </Dialog>
      <div className={styles.projectsGrid}>
        {projects?.map((project) => {
          console.log(project);
          return (
            <Link to={"/uploads"} key={project.projectId}>
              <ProjectCard project={project} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
