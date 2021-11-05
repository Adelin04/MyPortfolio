import React from "react";
import ProjectTemplate from "../ProjectTemplate";
import "./ProjectsList.css";

const projects = [
  {
    title: "Projects",
    to: "https://app.netlify.com/sites/projects-app-node-react",
    details: "",
    photo: ""
  },
  {
    title: "To-do",
    to: "/https://app.netlify.com/sites/todolist-demo-app",
    details: "",
    photo: "images/to-do.png"
  },
  {
    title: "To-do",
    to: "/https://app.netlify.com/sites/todolist-demo-app",
    details: "",
    photo: ""
  },
  {
    title: "To-do",
    to: "/https://app.netlify.com/sites/todolist-demo-app",
    details: "",
    photo: ""
  }
];

const ProjectsList = () => {
  return (
    <div className="projects-list">
      <h1 className="projects-list-tile" style={{ textAlign: "center" }}>
        My Projects
      </h1>

      <div className="container-projects">
        {projects.map((project, index) => {
          return (
            <ProjectTemplate
              key={index}
              title={project.title}
              to={project.to}
              photo={project.photo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
