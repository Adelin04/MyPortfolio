import React from "react";
import ProjectTemplate from "../ProjectTemplate";
import "./ProjectsList.css";

const projects = [
  {
    title: "Projects",
    to: "https://app.netlify.com/sites/projects-app-node-react",
    details: "",
    photo: "",
  },
  {
    title: "To-do",
    to: "/https://app.netlify.com/sites/todolist-demo-app",
    details: "",
    photo: "",
  },
];

const ProjectsList = () => {
  return (
    <div className="container-page">
      <div className="container-projects">
        {projects.map((project) => {
          <ProjectTemplate
            title={project.title}
            to={project.to}
            photo={project.photo}
          />;
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
