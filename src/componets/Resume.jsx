import React from "react";
import internship from "../Images/InternshipCertificate.jpg";
import "./EducationSection.css";

const educationData = [
  {
    year: "2022 - 2024",
    institution: "Islington College",
    degree: "Bachelor of Science Honours",
    specialization: "Computing",
    side: "right",
  },
  {
    year: "2020 - 2021",
    institution: "Tilottama College",
    degree: "School Leaving Certificate Examination (Grade XII)",
    specialization: "Science",
    side: "left",
  },
  {
    year: "2015 - 2019",
    institution: "Arghakhanchi Secondary Boarding School",
    degree: "SEE",
    specialization: "School Level",
    side: "right2",
  },
];

function Resume() {
  return (
    <>
      <div>
        <h2 id="div2" className="reas mt-5 text-center">
          My Resume
        </h2>
        <p className="reas mt-3 text-center">
          Work Experience and Education History
        </p>{" "}
        <hr />
      </div>

      {/* --------------------Work Experience Start Here --------------- */}
      <div
        className="container"
        style={{ display: "flex", flexDirection: "row", gap: "10%" }}
      >
        <div style={{ width: "30%" }}>
          <img
            src={internship}
            style={{
              width: "500px",
              height: "320px",
              objectFit: "cover",
              marginTop: "20px",
              borderRadius: "10px",
              boxShadow:
                " 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div
          className="intro"
          style={{
            float: "right",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            class="accordion"
            id="accordionPanelsStayOpenExample"
            style={{ width: "80%" }}
          >
            <h4 id="div2" className="reas text-center">
              Work Experience
            </h4>
            <div class="accordion-item" style={{ width: "100%" }}>
              <h2
                class="accordion-header"
                style={{ width: "100%", color: "white" }}
              >
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.85)",
                    color: "white",
                    borderColor: "white",
                  }}
                >
                  Full Stack Developer - Internship
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
              >
                <div class="accordion-body">
                  <ul>
                    <li>Company Name: Seek International Education Services</li>
                    <li>Department Name: Seek-IT Department</li>
                    <li>Start : September, 2023 & End : January, 2024</li>
                    <li>Position : Intern</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.85)",
                    color: "white",
                    borderColor: "white",
                  }}
                >
                  Responsibilties and Skills
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <p>
                    <p>Responsibilities:</p> During my internship at Seek
                    International Education Services, I worked as a Full Stack
                    Developer Intern. My main tasks included researching and
                    implementing web development technologies, collaborating on
                    projects, managing time to meet deadlines, participating in
                    training sessions, and deploying websites on the Hostinger
                    platform.
                  </p>
                  <p className="mt-2">Skills:</p>
                  <p>
                    I gained skills in web development basics, front-end
                    technologies (HTML, CSS, JavaScript), teamwork,
                    communication, time management, project management tools,
                    and WordPress development. These skills enabled me to design
                    responsive web interfaces, manage projects efficiently, and
                    work effectively with my team
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.85)",
                    color: "white",
                    borderColor: "white",
                  }}
                >
                  Achievements
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  I successfully developed and deployed multiple web projects,
                  including dynamic and responsive websites. I consistently met
                  project deadlines, ensured high-quality work through effective
                  project testing and documentation, and deployed websites on
                  Hostinger, managing domains and DNS settings. These
                  achievements showcased my technical capabilities and
                  dedication to the organization's mission
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 id="div2" className="reas text-center mt-5">
          Education History
        </h4>
      </div>
      <div className="education-section" style={{ width: "100%" }}>
        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div key={index} className={`education-item ${item.side}`}>
              <div className="education-year">{item.year}</div>
              <div className="education-content">
                <h3 className="education-institution">{item.institution}</h3>
                <p className="education-degree">{item.degree}</p>
                <p className="education-specialization">
                  {item.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Resume;
