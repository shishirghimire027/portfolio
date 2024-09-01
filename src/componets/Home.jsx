import React, { useRef } from "react";
import profile from "../Images/profile.png";
import AAA from "../Images/AAA.jpg";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";

import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Whyme from "./Whyme";
import Contact from "./Contact";
import Navbar from "./Navbar";

function Profile() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToResume={() => scrollToSection(resumeRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />

      <div
        className="main-container"
        ref={aboutRef}
        style={{
          minHeight: "500px",
          border: "1px solid black",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          boxSizing: "border-box",
        }}
      >
        <div
          className="sub"
          
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            maxWidth: "1700px",
            gap: "20px",
            marginBottom: "20px",
            backgroundColor: "rgba(249, 249, 255, 0.8)",
            marginTop: "40px",
          }}
        >
          <div style={{ flex: 1, marginLeft: "20%", width: "100%" }}>
            <p
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "36px" }}
            >
              Hi There,
            </p>
            <p
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "36px" }}
            >
              I'm <span style={{ color: "#f39c12" }}>Shishir Ghimire</span>
            </p>
            <p
              style={{ fontFamily: "'Raleway', sans-serif", fontSize: "24px" }}
            >
              I Am Into{" "}
              <span style={{ color: "#e74c3c" }}>Web Development !</span>
            </p>
            <a
              href="https://drive.google.com/file/d/1_H65lzEULAOxkrG33WjE3AlCG8sXo2I-/view?usp=sharing"
              target="blank"
              className="btn btn-dark"
              style={{
                padding: "3%",
                borderRadius: "10px",
                fontFamily: "sans-serif",
              }}
            >
              View Resume{" "}
            </a>
            <div
              className="icons mt-4"
              style={{ display: "flex", flexDirection: "row", gap: "5px" }}
            >
              <a
                href="https://www.linkedin.com/in/shishir-ghimire-752543230/"
                style={{ color: "black" }}
                target="blank"
              >
                <FaLinkedin style={{ height: "40px", width: "40px" }} />
              </a>
              <a
                href="https://github.com/shishirghimire027"
                style={{ color: "black" }}
                target="blank"
              >
                <FaGithubSquare style={{ height: "40px", width: "40px" }} />
              </a>
              <a
                href="https://x.com/_Shishirghimire"
                style={{ color: "black" }}
                target="blank"
              >
                <FaSquareXTwitter style={{ height: "40px", width: "40px" }} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100077893575494"
                style={{ color: "black" }}
                target="blank"
              >
                <FaSquareFacebook style={{ height: "40px", width: "40px" }} />
              </a>
              <a
                href="https://www.instagram.com/_shishir_ghimire/"
                style={{ color: "black" }}
                target="blank"
              >
                <FaSquareInstagram style={{ height: "40px", width: "40px" }} />
              </a>
            </div>
          </div>
          <img
            src={profile}
            alt="profile image"
            style={{
              width: "430px",
              height: "430px",
              objectFit: "cover",
              marginRight: "15%",
            }}
          />
        </div>
        <div
          className="additional-image"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: "10%",
            alignItems: "center",
          }}
        >
          <img
            src={AAA}
            alt="additional image"
            style={{
              width: "400px",
              height: "285px",
              objectFit: "cover",
              marginLeft: "20%",
              borderRadius: "5px",
            }}
          />
          <div > 
            <p style={{ color: "#808080", fontWeight: "bold" }}>ABOUT ME</p>
            <p style={{ fontSize: "28px", fontWeight: "bold" }}>
              PERSONAL DETAILS
            </p>
            <p style={{ width: "70%", textAlign: "justify" }}>
              Driven and enthusiastic undergraduate individual. Actively
              pursuing an opportunity to gain practical experience in the field
              of web application development. Currently developing skills in
              MERN stack. Highly motivated to apply my theoretical knowledge,
              coupled with a genuine passion to make valuable contributions to a
              dynamic and innovative company.
            </p>
            <button className="btn btn-dark">
              Learn More{" "}
              <HiMiniInformationCircle
                style={{ marginLeft: "7px", height: "20px", width: "20px" }}
              />
            </button>
          </div>
        </div>

        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={skillsRef} >
          <Skills />
        </div>

        <div ref={resumeRef} style={{width: "100%"}}>
          <Resume />
        </div>
        <Whyme />
        <div ref={contactRef} style={{width: "99%", textAlign: "center"}}>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Profile;
