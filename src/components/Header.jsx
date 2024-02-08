import {Link} from 'react-router-dom';

// All the navbar functionality is contained in this file
function Header() {
  return (
    <header>
      <h1>Luc Tourangeau</h1>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="Portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="AboutMe">About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="Contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="Resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>

  );
}

export default Header;