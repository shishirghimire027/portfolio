import React from "react";
import HostelHarbor from "../Images/HostelHarbor.png";
import BlogApp from "../Images/BlogAppLogo.png";
import Seek from "../Images/SeekLogo.png";
import SeekIt from "../Images/SeekIT.jpg";
import Luga from "../Images/Luga.jpg";
import Seekmandu from "../Images/Seekmandu.png"
import { MdDescription } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function Projects() {
  return (
    <>
      <div>
        <h2 id="div2" className="reas mb-5 mt-5">
          MY PROJECTS
        </h2>{" "}
      </div>

      {/* Projects Cards */}
      <div
        className="cards"
        style={{ display: "flex", flexDirection: "row", gap: "40px" }}
      >
        <div className="card" style={{ width: "400px", height: "450px", borderRadius: '10px', boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)' }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={HostelHarbor}
              style={{
                marginTop: "10px",
                height: "200px",
                width: "200px",
              }}
              className="card-img-top"
              alt="..."
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">Hostel Harbor</h5>
            <p className="card-text">
              This platform act as a bridge between hostel owners and hostel
              accommodation seekers.
              <p style={{ marginTop: "10px", fontSize: "18px" }}>
                Technology used:
              </p>
              <p>React.js, Node.js, Express.js, MongoDB, Socket.IO</p>
            </p>

            {/* <!-- Button trigger modal --> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                type="button"
                title="Learn more"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn btn-dark"
              >
                <MdDescription
                  style={{ width: "25px", height: "25px", marginRight: "10px" }}
                />{" "}
                Learn More
              </button>
            </div>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2
                      className="modal-title fs-5"
                      id="exampleModalLabel"
                      style={{ textAlign: "center" }}
                    >
                      Hostel Harbor - The Streamlined Hostel Management and
                      Accommodation System
                    </h2>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    Hostel Harbor is a comprehensive web application designed to
                    streamline hostel management and enhance the accommodation
                    experience for both users and hostel administrators. It
                    serves as a seamless bridge between hostel seekers and
                    hostel managers, facilitating easy and secure bookings
                    through integrated payment gateways. Beyond bookings, Hostel
                    Harbor offers a suite of management tools that simplify
                    daily operations like check-ins, room allocations, and more.
                    With features like group chat, it fosters a sense of
                    community among residents and staff, ensuring a convenient,
                    user-friendly, and connected experience for everyone
                    involved.
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <a
                      href="https://github.com/shishirghimire027/FYP-HostelHarbor"
                      target="blank"
                      type="button"
                      className="btn btn-dark"
                    >
                      View Project{" "}
                      <FaGithub
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "10px",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "400px", height: "450px", borderRadius: '10px', boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)' }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={BlogApp}
              style={{
                marginTop: "10px",
                height: "200px",
                width: "200px",
              }}
              className="card-img-top"
              alt="..."
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">BlogApp</h5>
            <p className="card-text">
              This blog application provides a platform for users to browse,
              post, and comment on blogs.
              <p style={{ marginTop: "10px", fontSize: "18px" }}>
                Technology used:
              </p>
              <p>React.js, C# ASP.NET Core, Microsoft SSMS</p>
            </p>

            {/* <!-- Button trigger modal --> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                type="button"
                title="Learn more"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
                className="btn btn-dark"
              >
                <MdDescription
                  style={{ width: "25px", height: "25px", marginRight: "10px" }}
                />{" "}
                Learn More
              </button>
            </div>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal1"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2
                      className="modal-title fs-5"
                      id="exampleModalLabel1"
                      style={{ textAlign: "center" }}
                    >
                      BlogApp
                    </h2>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      This blog application is developed with the sole intention
                      of facilitating a blogging platform where the users can
                      get various blogging related services. The application
                      defines two main categories of users: regular users and
                      administrators. Regular users are further divided into
                      bloggers and surfers. Surfers can only browse the
                      available blogs, while bloggers can view, post, and
                      comment on blogs. Both bloggers and administrators are
                      authenticated users. To become a blogger, users must sign
                      up and log in, and administrators must log in to access
                      their administrative privileges.{" "}
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <a
                      href="https://github.com/shishirghimire027/BlogApp"
                      target="blank"
                      type="button"
                      className="btn btn-dark"
                    >
                      View Project{" "}
                      <FaGithub
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "10px",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "400px", height: "450px", borderRadius: '10px', boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)' }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Seek}
              style={{
                marginTop: "10px",
                height: "200px",
                width: "300px",
              }}
              className="card-img-top"
              alt="..."
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">Seek Website</h5>
            <p className="card-text">
              This project was the part of my Internship and developed the
              website for Seek International.
              <p style={{ marginTop: "10px", fontSize: "18px" }}>
                Technology used:
              </p>
              <p>HTML, CSS, JavaScript, PHP</p>
            </p>

            {/* <!-- Button trigger modal --> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                type="button"
                title="Learn more"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
                className="btn btn-dark"
              >
                <MdDescription
                  style={{ width: "25px", height: "25px", marginRight: "10px" }}
                />{" "}
                Learn More
              </button>
            </div>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal2"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2
                      className="modal-title fs-5"
                      id="exampleModalLabel"
                      style={{ textAlign: "center" }}
                    >
                      Seek International Education Services - Website
                    </h2>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    During my internship, I, along with a group of other
                    interns, developed a website for Seek International
                    Education Services, which is the parent company of Seek IT.
                    The website was designed to provide essential information
                    about studying abroad, guiding students through the process,
                    and offering counseling services. It served as a
                    comprehensive resource for those interested in pursuing
                    education opportunities overseas.
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <a
                      href="https://seekinternationaledu.com/seekall/default.php"
                      target="blank"
                      type="button"
                      className="btn btn-dark"
                    >
                      View Project{" "}
                      <CgWebsite
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "10px",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Next Row */}

      <div
        className="cards mt-5"
        style={{ display: "flex", flexDirection: "row", gap: "40px", borderRadius: '10px' }}
      >
        <div className="card" style={{ width: "400px", height: "450px", borderRadius: '10px', boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)' }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={SeekIt}
              style={{
                marginTop: "10px",
                height: "200px",
                width: "200px",
              }}
              className="card-img-top"
              alt="..."
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">SeekIT</h5>
            <p className="card-text">
              The project was to develop the Seek-IT Website whichh provides
              various client related services.
              <p style={{ marginTop: "10px", fontSize: "18px" }}>
                Technology used:
              </p>
              <p>WordPress</p>
            </p>

            {/* <!-- Button trigger modal --> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                type="button"
                title="Learn more"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
                className="btn btn-dark"
              >
                <MdDescription
                  style={{ width: "25px", height: "25px", marginRight: "10px" }}
                />{" "}
                Learn More
              </button>
            </div>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal3"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2
                      className="modal-title fs-5"
                      id="exampleModalLabel"
                      style={{ textAlign: "center" }}
                    >
                      Seek-IT - Website
                    </h2>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    During my internship, I, along with a group of other
                    interns, developed a website for Seek-IT, which is the
                    sister company of Seek International Education Services. The
                    website was designed to provide essential information about
                    the different client related services that SeekIT provides
                    which includes Software Development, Web development, IT
                    counselling and so on.{" "}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <a
                      href="https://seekit.seekinternationaledu.com/"
                      target="blank"
                      type="button"
                      className="btn btn-dark"
                    >
                      View Project{" "}
                      <CgWebsite
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "10px",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "400px", height: "450px", borderRadius: '10px', boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)' }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Luga}
              style={{
                marginTop: "10px",
                height: "200px",
                width: "400px",
              }}
              className="card-img-top"
              alt="..."
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">Luga</h5>
            <p className="card-text">
              Developed an MVC-pattern-based e-commerce, featuring user
              authentication and robust database.
              <p style={{ marginTop: "10px", fontSize: "18px" }}>
                Technology used:
              </p>
              <p>Java, Apache Struts, Hibernate, XAMPP, MySQL</p>
            </p>

            {/* <!-- Button trigger modal --> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                type="button"
                title="Learn more"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
                className="btn btn-dark"
              >
                <MdDescription
                  style={{ width: "25px", height: "25px", marginRight: "10px" }}
                />{" "}
                Learn More
              </button>
            </div>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal4"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2
                      className="modal-title fs-5"
                      id="exampleModalLabel1"
                      style={{ textAlign: "center" }}
                    >
                      Luga - e-commerce website for clothing
                    </h2>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      This project involved the design and development of an
                      e-commerce website for selling clothes, following the MVC
                      pattern to ensure a well-structured codebase. Key features
                      include a home page, product page, login/signup pages, and
                      a contact us page. The site allows users to register by
                      uploading an image, with passwords securely encrypted, and
                      sessions/cookies properly managed. Logged-in users can
                      edit their profiles, change passwords, and add products to
                      their cart, while admins have the ability to manage
                      products and view orders. The product page includes a
                      search bar with filtering options, and browsing is open to
                      all, but adding items to the cart requires login
                      credentials. The project focused on secure data handling,
                      a user-friendly interface, and effective group
                      collaboration.{" "}
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <a
                      href="https://github.com/shishirghimire027/Web-debelopment-with-jdbc"
                      target="blank"
                      type="button"
                      className="btn btn-dark"
                    >
                      View Project{" "}
                      <FaGithub
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "10px",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "400px", height: "450px", borderRadius: '10px', boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)' }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Seekmandu}
              style={{
                marginTop: "10px",
                height: "200px",
                width: "400px",
              }}
              className="card-img-top"
              alt="..."
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">Seekmandu</h5>
            <p className="card-text">
              This project was the part of my Internship where I developed
              e-commerce clothing website.
              <p style={{ marginTop: "10px", fontSize: "18px" }}>
                Technology used:
              </p>
              <p>WordPress</p>
            </p>

            {/* <!-- Button trigger modal --> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                type="button"
                title="Learn more"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal5"
                className="btn btn-dark"
              >
                <MdDescription
                  style={{ width: "25px", height: "25px", marginRight: "10px" }}
                />{" "}
                Learn More
              </button>
            </div>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal5"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2
                      className="modal-title fs-5"
                      id="exampleModalLabel"
                      style={{ textAlign: "center" }}
                    >
                      Seekmandu - e-commerce website for clothing
                    </h2>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    During my internship, I collaborated with a team of fellow
                    interns to develop a fully functional e-commerce website for
                    a clothing brand named Seekmandu, using WordPress as the
                    platform. The project involved customizing themes and
                    plugins to meet the brand's specific requirements, creating
                    an intuitive user interface, and ensuring a seamless
                    shopping experience for customers. We focused on optimizing
                    the website for both desktop and mobile users, integrating
                    secure payment gateways, and setting up product categories
                    and filters to enhance the shopping experience. The final
                    product was a dynamic and responsive site that effectively
                    showcased Seekmandu's clothing line while providing a smooth
                    and secure online shopping experience.
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <a
                      href="http://seekmandu.seekinternationaledu.com/"
                      target="blank"
                      type="button"
                      className="btn btn-dark"
                    >
                      View Project{" "}
                      <CgWebsite
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "10px",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
