import React from "react";
import { SiJavascript, SiReact } from "react-icons/si";
import js from "../images/js.svg";
import react from "../images/react.svg";
import docker from "../images/docker.svg";
import python from "../images/python.svg";
import node from "../images/node.svg";
import db from "../images/db.svg";
import "../App.css";
const Skills = () => {
  return (
    <div className="text-light my-5 py-5 skills-top" id="skills">
      <div className="container mt-5">
        <div className="row text-center mb-3">
          <h1>Skills</h1>
        </div>
        <div className="row text-center gy-3">
          <div className="col-md-6 col-lg-4">
            <img src={js} alt="js" className="skills-img " />
            <h4>Javascript</h4>
            <p className="fs-6">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={react} alt="js" className="skills-img " />
              <h4>React.js</h4>
              <p className="fs-6">Lorem ipsum dolor sit amet.</p>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={python} alt="js" className="skills-img" />
              <h4>python</h4>
              <p className="fs-6">Lorem ipsum dolor sit amet.</p>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4 ">
            <h1>
              <img src={docker} alt="js" className="skills-img " />
              <h4>docker</h4>
              <p className="fs-6">Lorem ipsum dolor sit amet.</p>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={node} alt="js" className="skills-img" />
              <h4>node</h4>
              <p className="fs-6">Lorem ipsum dolor sit amet.</p>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={db} alt="js" className="skills-img" />
              <h4>databases</h4>
              <p className="fs-6">Lorem ipsum dolor sit amet.</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
