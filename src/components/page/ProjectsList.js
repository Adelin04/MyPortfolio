import React, { useState } from "react";
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
    title: "Projects",
    to: "https://projects-app-node-react.netlify.app",
    toGhithub: "https://github.com/Adelin04/projects-app-node-react",
    details: [
      reactIcon,
      nodeIcon,
      mysqlIcon,
      aws_bucketIcon,
      herokuIcon,
      netlifyIcon
    ],
    photo: "../projects.png",
    description: `"Projects" as the name implies is a project management app:
    You can create new projects, assign team members, set deadlines, change statuses.
    It has user access rights the participants can see and edit only the projects they are part of.
    Tech stack used:
    -	ReacJS for the frontend
    -	Node.JS with Express for the backend
    -	MySQL for the database
    -	AWS S3 to serve images`
  },
  {
    title: "Snake",
    to: "https://snake-react-gam3.netlify.app",
    toGhithub: "https://github.com/Adelin04/Snake",
    details: [reactIcon, netlifyIcon],
    photo: "../snake.png",
    description: `A simple snake game. To make this game I used ReactJs framework.`
  },
  {
    title: "waterboat",
    to: "https://water-boat.netlify.app",
    toGhithub: "https://github.com/Adelin04/waterboat",
    details: [
      reactIcon,
      pythonIcon,
      flaskIcon,
      mysqlIcon,
      herokuIcon,
      netlifyIcon
    ],
    photo: "../waterboat.png",
    description: `"Waterboat" is a web site where people can book boats.
    It has 3 pages: main page, booking page and view reservation page.
    The frontend was created using ReactJs framework.
    The backend was created with Python (Flask framework).
    For database I used MySQL
      `
  },
  {
    title: "To-do-list",
    to: "https://todolist-demo-app.netlify.app",
    toGhithub: "https://github.com/Adelin04/ToDo-App-React",
    details: [javascriptIcon, reactIcon, netlifyIcon],
    photo: "../to-do.png",
    description: `"ToDo List" is a simple app for tasks management:
    The app was created with ReactJs framework and I used some hooks like reducer,useEffect.
    The application saves the tasks in browser’s local storage.`
  },
  {
    title: "Bibliotech",
    to:
      "https://github.com/Adelin04/Bibliotech/blob/main/Tema-punct%20bonus-Modul3-TFP.pdf",
    toGhithub: "https://github.com/Adelin04/Bibliotech",
    details: [pythonIcon, flaskIcon, netlifyIcon],
    photo: "../Bibliotech.png",
    description: `"Bibliotech" is the backend of a book renting app.
    This was a required task in module three of the courses I took at the 'Academia te fac programator'.
    It uses 4 .txt files to store the data:
    (DB_books,DB_reviews,
    DB_transactions,DB_users).
    In addition to the task’s requirements I created an algorithm that reads the text files and increment the number of the next item that will be added in the file to mimic the auto increment of a real database.
`
  }
];

const ProjectsList = () => {
  return (
    <div className="projects-list">
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
              toGhithub={project.toGhithub}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
