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
    description: `"Projects" is an app where a user can create a new project and he can choose the team to work with,sett a deadline and a description for this project.
    Just colleagues which make part of team can saw in their list this project and just the admin can it editing.
    The frontend was created in ReactJs framework and I used some hooks like  Reducers,Context and other.
    The backend was created with Node express.
    For database I used MySQL and for user profile pictures I used AWS S3.`
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
    description: `Waterboat is a web site where people can make booking for boats.
      It have 3 page,main page,booking page and view rezervation page.
      The frontend was created in ReactJs framework .
      The backend was created with Python (Flask framework).
      For database I used MySQL.
      `
  },
  {
    title: "To-do-list",
    to: "https://todolist-demo-app.netlify.app",
    toGhithub: "https://github.com/Adelin04/ToDo-App-React",
    details: [javascriptIcon, reactIcon, netlifyIcon],
    photo: "../to-do.png",
    description: `ToDo list is a simple app where you can create,editing and delete your tasks.
                  The app was created in ReactJs framework and I used some hooks like Reducers.
                  The application saves the tasks in localStorage.`
  },
  {
    title: "Bibliotech",
    to:
      "https://github.com/Adelin04/Bibliotech/blob/main/Tema-punct%20bonus-Modul3-TFP.pdf",
    toGhithub: "https://github.com/Adelin04/Bibliotech",
    details: [pythonIcon, flaskIcon, netlifyIcon],
    photo: "../Bibliotech.png",
    description: `Bibliotech represent a flask server for a website with rent a books.
    This was a topic in module three of the courses I took at the 'Academia te fac programtor'.
    The database was representated from four text files.
    (DB_books,DB_reviews,
    DB_transactions,DB_users //.txt).
    In addition to the requirements of theme 
    I created an algorithm that reads the text files and increment the number of the next item that will be added in the file,
    to mimic the autoIncrement of a real database.`
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
