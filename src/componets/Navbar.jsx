import React from "react";

function Navbar({
  scrollToAbout,
  scrollToProjects,
  scrollToSkills,
  scrollToResume,
  scrollToContact,
}) {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          transition:
            "background-color 0.3s ease, color 0.3s ease, padding 0.3s ease",
          position: "fixed",
          zIndex: "1000",
          width: "100%",
        }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link "
                  aria-current="page"
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    scrollToAbout(); // Scroll to Projects section
                  }}
                  style={{ color: "white" }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    scrollToProjects(); // Scroll to Projects section
                  }}
                  style={{ color: "white" }}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    scrollToSkills(); // Scroll to Projects section
                  }}
                  style={{ color: "white" }}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume"  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    scrollToResume(); // Scroll to Projects section
                  }} style={{ color: "white" }}>
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact"  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    scrollToContact(); // Scroll to Projects section
                  }} style={{ color: "white" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
