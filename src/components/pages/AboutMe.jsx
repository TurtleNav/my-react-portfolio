export default function AboutMe() {
  return (
    <div style={{paddingLeft: "20px"}}>
      <h1>About me</h1>
      <p className="about-me-text">
        Hello! My name is Luc Tourangeau, I am an aspiring software developer
        with a background in pure science. I graduated from Penn State
        University with a B.S. in Physics. After school, I immediately started
        working in a <a href="https://taylorlab.web.unc.edu/research/">
        quantitative biology lab at UNC
        </a>, Chapel Hill, as a research assistant / programmer. My main
        responsibility in the lab was to implement bio-inspired navigational
        algorithms in robots.
      </p>
      <br></br>
      <p className="about-me-text">
        My main responsibility in the lab was to create a blank-slate robot
        platform complete with hardware and software. I opted to use the iRobot
        Create2 (a glorified Roomba) as the hardware since it was an easily
        programmable and robust robot. In software, I created a python API that
        abstracted robot motion opcodes into more user-friendly commands such
        as "drive straight". This project taught me about:
      </p>
      <br></br>
      <ul className="about-me-text">
        <li>low-level programming (for serial interface with robot)</li>
        <li>networking (for remote communication with the computer controlling the robot)</li>
        <li>API construction</li>
        <li>Databases (for storing robot data)</li>
      </ul>
    </div>
  );
}