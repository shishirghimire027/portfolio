import React from "react";
import html from "../Images/skills/html5.png";
import css from "../Images/skills/css3.png";
import js from "../Images/skills/js.png";
import bootstrap from "../Images/skills/bootstrap.png";
import java from "../Images/skills/java.png";
import rest from "../Images/skills/rest.png";
import json from "../Images/skills/json.png"
import react from "../Images/skills/react.png";
import node from "../Images/skills/node.png";
import express from "../Images/skills/express.png";
import reactNative from "../Images/skills/react-native.png";
import xml from "../Images/skills/xml.png"
import oracle from "../Images/skills/oracle.png"
import mongo from "../Images/skills/mongo.jpg"
import sql from "../Images/skills/mysql.png"
import git from "../Images/skills/git.png"
import gitHub from "../Images/skills/github.png"

function Skills() {
  return (
    <>
      <div>
        <h2 id="div2" className="reas mt-5 text-center">
          Development Skills
        </h2>
        <p className="reas mt-3 text-center">
          Crafting Code, Shaping Experiences
        </p>{" "}
        <hr />
      </div>

      <div
        className="first-row"
        style={{ display: "flex", flexDirection: "row", gap: "50px" }}
      >
        <img
          src={html}
          alt="html5"
          title="html5"
          style={{ height: "80px", width: "80px", objectFitL: "cover" }}
        />
        <img
          src={css}
          alt="css3"
          title="css3"
          style={{ height: "80px", width: "80px", objectFitL: "cover" }}
        />
        <img
          src={js}
          alt="js"
          title="js"
          style={{ height: "80px", width: "80px", objectFitL: "cover" }}
        />
        <img
          src={bootstrap}
          alt="bootstrap"
          title="bootstrap"
          style={{ height: "80px", width: "80px", objectFitL: "cover" }}
        />
        <img
          src={java}
          alt="java"
          title="java"
          style={{ height: "80px", width: "80px", objectFitL: "cover" }}
        />
        <img
          src={rest}
          alt="rest"
          title="RESTful"
          style={{ height: "80px", width: "80px", objectFitL: "cover" }}
        />
         <img
          src={json}
          alt="json"
          title="json"
          style={{ height: "80px", width: "100px", objectFitL: "cover" }}
        />
      </div>


      {/* Second Row starts here */}

      <div
        className="second-row mt-5"
        style={{ display: "flex", flexDirection: "row", gap: "30px" }}
      >
        <img
          src={react}
          alt="react"
          title="React.js"
          style={{ height: "80px", width: "80px", objectFitL: "cover" }}
        />
        <img
          src={node}
          alt="node"
          title="Node.js"
          style={{ height: "80px", width: "100px", objectFitL: "cover" }}
        />
        <img
          src={express}
          alt="express"
          title="Express.js"
          style={{ height: "80px", width: "130px", objectFitL: "cover" }}
        />
        <img
          src={reactNative}
          alt="reactNative"
          title="React-Native"
          style={{ height: "80px", width: "90px", objectFitL: "cover" }}
        />
        <img
          src={xml}
          alt="xml"
          title="XML"
          style={{ height: "80px", width: "80px", objectFitL: "cover" }}
        />
      </div>


      {/* Third Row Starts here */}
      <div
        className="third-row mt-5"
        style={{ display: "flex", flexDirection: "row", gap: "30px" }}
      >
        <img
          src={oracle}
          alt="oracle"
          title="Oracle database"
          style={{ height: "80px", width: "100px", objectFitL: "cover" }}
        />
        <img
          src={mongo}
          alt="mongo"
          title="mongoDB"
          style={{ height: "80px", width: "130px", objectFitL: "cover" }}
        />
        <img
          src={sql}
          alt="sql"
          title="mySQL"
          style={{ height: "80px", width: "130px", objectFitL: "cover" }}
        />
      </div>

      {/* Fourth Row Starts here */}
      <div
        className="fourth-row mt-5"
        style={{ display: "flex", flexDirection: "row", gap: "30px" }}
      >
        <img
          src={git}
          alt="git"
          title="git"
          style={{ height: "80px", width: "80px", objectFitL: "cover" }}
        />
        <img
          src={gitHub}
          alt="gitHub"
          title="gitHub"
          style={{ height: "80px", width: "80px", objectFitL: "cover" }}
        />
      </div>
    </>
  );
}

export default Skills;
