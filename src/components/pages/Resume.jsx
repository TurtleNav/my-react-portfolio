
export default function Resume() {
  return (
    <div>
      <div>
        <h1 className="resume-header">My Resume and other skills</h1>
        <a href='/src/assets/resume.pdf' target="_blank" type="application/pdf">Download my resume</a>
      </div>
      <div className="skills">
        <div className="skill-card">
          <h2 className="resume-header">Programming Languages</h2>
          <ul>
            <li>C</li>
            <li>Golang</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skill-card">
          <h2 className="resume-header">Web Technologies</h2>
          <ul>
            <li>Apollo</li>
            <li>Express.js</li>
            <li>GraphQL</li>
            <li>Node.js</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-card">
          <h2>Database Technologies</h2>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>SQLite</li>
          </ul>
        </div>
      </div>
    </div>


  );
}