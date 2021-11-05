import React from "react";
import ProjectTemplate from "../ProjectTemplate";
import "./ProjectsList.css";

const projects = [
  {
    title: "Projects",
    to: "https://projects-app-node-react.netlify.app",
    details: "",
    photo: "images/projects.png"
  },
  {
    title: "To-do",
    to: "https://todolist-demo-app.netlify.app",
    details: "",
    photo: "images/to-do.png"
  },
  {
    title: "To-do",
    to: "https://app.netlify.com/sites/todolist-demo-app",
    details: "",
    photo: ""
  },
  {
    title: "To-do",
    to: "https://app.netlify.com/sites/todolist-demo-app",
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
              to={{ pathname: `${project.to}` }}
              photo={project.photo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
