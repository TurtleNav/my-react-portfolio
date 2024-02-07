// All the navbar functionality is contained in this file
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Luc Tourangeau</h1>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
            href="#portfolio" id="portfolio-link"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
            Portfolio
            </a>
            <div id="leaf-container-1"></div>
          </li>
          <li className="nav-item">
            <a
            href="#about"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>

  );
}

export default NavTabs;

