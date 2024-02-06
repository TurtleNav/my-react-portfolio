import { useState } from "react";

const imgWidth = 100;
const imgHeight = 100;

function ProjectCard(name, url, img) {
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
      <p>
        lorem ipsum
      </p>
    </div>
  );
}
