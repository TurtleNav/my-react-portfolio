import { useState } from "react";

function projectDetails(name, url) {
  return {name, url};
}

// My 6 projects to be in in this portfolio. Styling in App.css will render these as three rows of 2 projects
const projects = [
  projectDetails("my-react-portfolio", "https://github.com/TurtleNav/my-react-portfolio"),
  projectDetails("Healthy Living Recipe Creator", "https://github.com/TurtleNav/group2-recipe-app"),
  projectDetails("My Tech Blog", "https://github.com/TurtleNav/my-tech-blog"),
  projectDetails("My Weather Dashboard", "https://github.com/TurtleNav/my-weather-dashboard"),
  projectDetails("My Social Network", "https://github.com/TurtleNav/my-social-network-api"),
  projectDetails("My Web Text Editor", "https://github.com/TurtleNav/web-text-editor")
];

function ProjectCard({name, url}) {
  return (
    <div className="project-card" id={name}>
      <a href={url}>{name}</a>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      {/*Map through all projects. React will pester us about using a key so we appease it with a not-so-great key: the index of the project in the original array*/}
      <div id="project-card-container">
        {projects.map(({name, url}, index) => (
          <ProjectCard key={index} name={name} url={url}></ProjectCard>
        ))
        }
      </div>
    </div>
  );
}
