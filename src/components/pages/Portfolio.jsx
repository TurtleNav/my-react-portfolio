import { useState } from "react";

// TODO: Refactor to css at some point
const imgWidth = 100;
const imgHeight = 100;

function projectDetails(name, url, img) {
  return {name, url, img};
};

const projects = [
  projectDetails("my-react-portfolio", "https://github.com/TurtleNav/my-react-portfolio", )
]


function ProjectCard({name, url, img}) {
  return (
    <div className="project-card" id={name}>
      <div>
        <a href={url}>
          <img src={img} alt={`Stock image of ${name}`} width={imgWidth} height={imgHeight}></img>
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div id="card-container">
        <ProjectCard name="my-react-portfolio" url="https://github.com/TurtleNav/my-react-portfolio" img="../../assets/react.svg"/>
      </div>
    </div>
  );
}
