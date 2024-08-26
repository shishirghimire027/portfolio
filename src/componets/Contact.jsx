import React from "react";

import { BiLogoGmail } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(249, 249, 255, 0.8)",
          width: "100%",
          justifyContent: "center",
          marginTop: '50px'
        }}
      >
        <h2 id="div2" className="reas mt-3 text-center">
          CONTACT
        </h2>
        <h6
          className="reas mt-3 text-center"
          style={{ fontWeight: "bolder", fontSize: "16px" }}
        >
          Lets Get In Touch!
        </h6>{" "}
      
        <p className="reas mt-3 text-center" style={{ width: "100%" }}>
          Feel free to send me an email or contact me and I will get back to you
          as soon as possible!
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "100px",
          backgroundColor: "rgba(249, 249, 255, 0.8)",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BiLogoGmail style={{ width: "60px", height: "60px" }} />
          <a
            className="email"
            href="mailto:shishirghimire027@gmail.com"
            target="blank"
            style={{ textDecoration: "none", color: "black", marginTop: "5px" }}
          >
            shishirghimire027@gmail.com
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IoCallSharp style={{ width: "60px", height: "60px" }} />
          <p
            style={{ textDecoration: "none", color: "black", marginTop: "5px" }}
          >
            +977-9867009290
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ textDecoration: "none", color: "black" }}>
            You can also fine me on...
          </p>
          <div style={{}}>
            <a href="https://github.com/shishirghimire027" target="blank">
              <FaGithubSquare
                style={{
                  width: "60px",
                  height: "60px",
                  textDecoration: "none",
                  color: "black",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shishir-ghimire-752543230/"
              target="blank"
            >
              <FaLinkedin
                style={{
                  width: "60px",
                  height: "60px",
                  textDecoration: "none",
                  color: "black",
                }}
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p style={{margin: '2px', width: "100%", background: "rgba(0, 0, 0, 0.85)", color: 'white', padding: "5px"}}>Designed and developed by Shishir Ghimire © 2024</p>
      </div>
    </>
  );
}

export default Contact;
