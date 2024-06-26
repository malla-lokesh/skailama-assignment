import Button from "../../UI/Button/Button";
import styles from "../../styles/Projects.module.css";
import ProjectCard from "./ProjectCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import Dialog from "../../UI/Dialog";

const Projects = () => {
  const location = useLocation();
  const { projects } = location?.state || {};
  console.log(projects);
  const [projectName, setProjectName] = useState("");
  const navigate = useNavigate();

  const dialogRef = useRef(null);

  const handleOpenDialog = () => {
    if (dialogRef.current) dialogRef.current.showModal();
  };

  const handleCloseDialog = () => {
    if (dialogRef.current) dialogRef.current.close();
  };

  const handleCreateProjectDialog = async () => {
    // write logic to create project
    try {
      const response = await fetch(
        "https://skailama-assignment-backend.onrender.com/api/projects"
      );
      if (response.ok) {
        navigate("/projects");
      }
    } catch (error) {}
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
        <input
          type="text"
          id="project-name"
          placeholder="Type here"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
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
          return (
            <Link to={"/uploads"} state={{ project }} key={project.projectId}>
              <ProjectCard project={project} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
