import githubIcon from "../assets/github-mark.svg"
import linkedInIcon from "../assets/linkedin-icon.png"

// Re-constructed from svg elements on Medium's website. Can't be imported
// from SVG file, this is probably because of some missing metadata
const MediumIcon = () => (
<svg color="black" viewBox="0 0 1043.63 592.71" width="50" height="50">
  <g data-name="Layer 2">
    <g data-name="Layer 1">
      <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
    </g>
  </g>
</svg>);

function Footer() {
  return (
    <footer>
      <div className="footer-icon">
        <a href="https://medium.com/@tourangeauluc0">
          <MediumIcon />
        </a>
      </div>
      <div className="footer-icon">
        <a href="https://github.com/TurtleNav">
          <img src={githubIcon} alt="GitHub cat icon" height={50} width={50}></img>
        </a>
      </div>
      <div className="footer-icon">
        <a href="https://www.linkedin.com/in/luc-tourangeau-9b70a5186">
          <img src={linkedInIcon} alt="LinkedIn Icon" height={50} width={50}></img>
        </a>
      </div>
    </footer>
  )
}

export default Footer;