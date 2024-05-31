import React from "react";
import About_Template from "../About_Template";

import phoneIcon from "../icons/phone.svg";
import emailIcon from "../icons/email.svg";
import addressIcon from "../icons/address.svg";
import linkedinIcon from "../icons/linkedin.svg";
import githubIcon from "../icons/github2.svg";

//Style
import "./About.css";
import ProjectsList from "./ProjectsList";

const personalInfo = {
  email: "adelin.marin04@yahoo.com",
  phone: "0774617663",
  address: "Pitesti, Romania",
  linkedin: "https://www.linkedin.com/in/adelin-marin-5b1a881b8/",
  github: "https://github.com/Adelin04",
  photo: "../Adelin.jpg",
};

const iconsList = {
  phone: phoneIcon,
  email: emailIcon,
  address: addressIcon,
  linkedin: linkedinIcon,
  github: githubIcon,
};

const projects = [
  {
    title: "E-commerce",
    description: `
    "E-commerce" as the name implies is an online store.
    Tech stack used:
     - .NET Core 6 for the backend
              - User authorization and authentication
              - RESTful API
     - ReacJS for the frontend
              - Online store
              - Admin dashboard  
     - Redux-Toolkit for State Management
     - PostgreSQL for the database 
     - AWS S3 to serve images
     - CSS and TAILWIND for UI
    `,
  },
  {
    title: "PROJECTS",
    description: ` "Projects" as the name implies is a project management app: 
    You can create new projects, assign team members, set deadlines, change statuses. It has user access rights the participants can see and edit only the projects they are part of. 
    Tech stack used:
     - Node.js for the backend 
                - User authorization and authentication
                - RESTful API
     - ReacJS for the frontend
     - CSS  for UI
     - MySQL for the database 
     - AWS S3 to serve images
    `,
  },
  {
    title: "SNAKE",
    description: `A simple snake game. To make this game I used ReactJs framework.`,
  },
  {
    title: "Waterboat",
    description: `"Waterboat"  is a web site where people can book boats .
    It was created for one of the exams during the course I took. The web site has 3 pages: main page, booking page and view reservation page. 
    Tech stack used:
    - The frontend was created using ReactJs framework. 
    - The backend was created with  NodeJS.
    - CSS for UI
    - For database I used PostgreSQL.
    `,
  },

  {
    title: "TO-DO LIST",
    description: `"ToDo List" is a simple app for tasks management:
    The app was created with ReactJs framework and I used some hooks like reducer,useEffect.
    The application saves the tasks in browser’s local storage.`,
  },
  {
    title: "BIBLIOTECH",
    description: `"Bibliotech" is the backend of a book renting app and it was created in Python Flask.
    This was a required task in module three of the courses I took at the 'Academia te fac programator'.
    It uses 4 .txt files to store the data:
    (DB_books,DB_reviews,
    DB_transactions,DB_users).
    In addition to the task’s requirements I created an algorithm that reads the text files and increment the number of the next item that will be added in the file to mimic the auto increment of a real database.
`,
  },
];

const experince = [
  {
    title: "TEILOR",
    position: "Fotograf (bijuterii)",
    from_to: "2019 - curent | Pitesti",
  },
  {
    title: "",
    position: "Specialist Achizitii",
    from_to: "Martie 2015 - Decembrie 2019 | Pitesti",
  },
  {
    title: "NEW YORKER",
    position: "Responsabil Departament",
    from_to: "Iulie 2011 - Februarie 2015 | Pitesti",
  },
  {
    title: "FOX",
    position: "Casier",
    from_to: "Iunie 2008 - Iulie 2011 | Pitesti",
  },
  /*   {
    title: "BETTY ICE",
    position: "Casier",
    from_to: "Mai 2006 - Septembrie 2006 | Bucuresti"
  } */
];

const schools = [
  {
    profile: "Tehnician,Electromecanica",
    name: 'Liceul ICM "DACIA" ',
    from_to: "2004-2009 | Pitesti",
  },
];

const certifications = [{ name: "'Te Fac Programator'", certification: "" }];

const languages = [{ language: "Romain", nivel: "Native" }, { language: "English", nivel: "B2" }];

const About = () => {
  return (
    <div className="about">
      <About_Template
        personlInfo={personalInfo}
        iconsList={iconsList}
        experince={experince}
        projects={projects}
        schools={schools}
        languages={languages}
        certifications={certifications}
      />
    </div>
  );
};

export default About;
