import React from "react";
import "./ProjectsList.css";

import ProjectTemplate from "../ProjectTemplate";
import reactIcon from "../icons/react.svg";
import mysqlIcon from "../icons/mysql.svg";
import javascriptIcon from "../icons/javascript.svg";
import pythonIcon from "../icons/python.svg";
import flaskIcon from "../icons/flask.svg";
import nodeIcon from "../icons/nodejs.svg";
import aws_bucketIcon from "../icons/aws_bucket.svg";
import herokuIcon from "../icons/heroku.svg";
import netlifyIcon from "../icons/netlify.svg";

const projects = [
  {
    title: "Snake",
    to: "https://snake-react-gam3.netlify.app",
    details: [reactIcon, netlifyIcon],
    photo: "../snake.png",
    description:
      "A simple snake game. To make this game I used ReactJs framework.",
  },
  {
    title: "Projects",
    to: "https://projects-app-node-react.netlify.app",
    details: [
      reactIcon,
      nodeIcon,
      mysqlIcon,
      aws_bucketIcon,
      herokuIcon,
      netlifyIcon,
    ],
    photo: "../projects.png",
    description: "......",
  },
  {
    title: "waterboat",
    to: "https://water-boat.netlify.app",
    details: [
      reactIcon,
      pythonIcon,
      flaskIcon,
      mysqlIcon,
      herokuIcon,
      netlifyIcon,
    ],
    photo: "../waterboat.png",
    description: "......",
  },
  {
    title: "To-do-list",
    to: "https://todolist-demo-app.netlify.app",
    details: [javascriptIcon, reactIcon, netlifyIcon],
    photo: "../to-do.png",
    description: "......",
  },
];

const ProjectsList = () => {
  return (
    <div className="projects-list">
      {/*       <h1 className="projects-list-tile" style={{ textAlign: "center" }}>
        My Projects
      </h1> */}

      <div className="container-projects">
        {projects.map((project, index) => {
          return (
            <ProjectTemplate
              key={index}
              title={project.title}
              to={{ pathname: `${project.to}` }}
              photo={project.photo}
              details={project.details}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
