import React from "react";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          transition:
            "background-color 0.3s ease, color 0.3s ease, padding 0.3s ease",
          position: "sticky",
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
                  href="/"
                  style={{ color: "white" }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "white" }}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "white" }}>
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "white" }}>
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "white" }}>
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
