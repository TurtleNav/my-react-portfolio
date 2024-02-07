import { useState } from "react";

// TODO: Refactor to css at some point
const imgWidth = 100;
const imgHeight = 100;

function projectDetails(name, url) {
  return {name, url};
}

const projects = [
  projectDetails("my-react-portfolio", "https://github.com/TurtleNav/my-react-portfolio"),
  projectDetails("Healthy Living Recipe Creator", "https://github.com/TurtleNav/group2-recipe-app"),
  projectDetails("My Tech Blog", "https://github.com/TurtleNav/my-tech-blog"),
  projectDetails("My Weather Dashboard", "https://github.com/TurtleNav/my-weather-dashboard")
]


function ProjectCard({name, url}) {
  return (
    <div className="project-card" id={name}>
        <a href={url}></a>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      {/*Map through all projects. React will pester us about using a key so we appease it with a not-so-great key: the index of the project in the original array*/}
      {projects.map(({name, url}, index) => (
        <ProjectCard key={index} name={name} url={url}></ProjectCard>
      ))
      }
    </div>
  );
}
