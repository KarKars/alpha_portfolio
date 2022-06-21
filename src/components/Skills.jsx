import React from "react";
import { SiJavascript, SiReact, SiExpress } from "react-icons/si";
import js from "../images/js.svg";
import react from "../images/react.svg";
import git from "../images/git.svg";
import nextjs from "../images/nextjs.svg";
import mongodb from "../images/mongodb.svg";
import tailwindCSS from "../images/tailwindCSS.svg";
import numpy from "../images/numpy.svg";
import pandas from "../images/pandas.svg";
import python from "../images/python.svg";
import node from "../images/node.svg";
import vite from "../images/vite.svg";
import mysql from "../images/mysql.svg";
import "../App.css";
const Skills = () => {
  return (
    <div className="text-light my-5 py-5 skills-top" id="skills">
      <div className="container mt-5">
        <div className="row text-center mb-3">
          <h1>Skills</h1>
        </div>
        <div className="row text-center gy-3 d-flex justify-content-center">
          <div className="col-md-6 col-lg-4">
            <img src={js} alt="js" className="skills-img " />
            <h4>Javascript</h4>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={react} alt="js" className="skills-img " />
              <h4>React.js</h4>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={nextjs} alt="js" className="skills-img " />
              <h4>Next.js</h4>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={git} alt="js" className="skills-img " />
              <h4>Git</h4>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={python} alt="js" className="skills-img" />
              <h4>Python</h4>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={mysql} alt="mysql" className="skills-img" />
              <h4>mySQL</h4>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4 ">
            <h1>
              <img src={mongodb} alt="js" className="skills-img " />
              <h4>MongoDB</h4>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={node} alt="js" className="skills-img" />
              <h4>NodeJS</h4>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={vite} alt="js" className="skills-img" />
              <h4>Vite</h4>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={tailwindCSS} alt="js" className="skills-img" />
              <h4>TailwindCSS</h4>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={numpy} alt="js" className="skills-img" />
              <h4>Numpy</h4>
            </h1>
          </div>
          <div className="col-md-6 col-lg-4">
            <h1>
              <img src={pandas} alt="js" className="skills-img" />
              <h4>Pandas</h4>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
