import React from "react";
import programmer from "../images/programmer.svg";
import { ImProfile, ImLinkedin, ImGithub, ImGoogle } from "react-icons/im";
import { IoSchool } from "react-icons/io5";
import portrait from "../images/portrait.svg";
import "../App.css";

const Bio = () => {
  return (
    <div className="text-light my-5 pb-5">
      <section className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="row justify-content-center">
              <img
                src={portrait}
                alt="programmerImage"
                className="img-fluid img w-75 rounded-circle"
              />
            </div>
            <div className="row text-center mt-2 justify-content-center">
              <h1>Yahiaoui Abdelkrim</h1>
              <h5 className="fw-light">Software Engineer</h5>
              <h5 className="fw-light">Civil Engineer</h5>
              <div className="row justify-content-evenly align-items-center">
                <div className="col">
                  <h2>
                    <a href="mailto:yahiaoui.abdelkrim.997@gmail.com" target="_blank">
                      <ImGoogle />
                    </a>
                  </h2>
                </div>
                <div className="col">
                  <h2>
                    <a href="https://github.com/KarKars" target="_blank">
                      <ImGithub />
                    </a>
                  </h2>
                </div>
                <div className="col">
                  <h2>
                    <a
                      href="https://www.linkedin.com/in/abdelkrim-yahiaoui-1a351023a/"
                      target="_blank"
                    >
                      <ImLinkedin />
                    </a>
                  </h2>
                </div>
                <div className="col">
                  <h2>
                    <a
                      href="https://drive.google.com/file/d/1EbOndMgpXPBNR8PInOvDXv2KkXt6MA2V/view"
                      target="_blank"
                    >
                      <ImProfile />
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md text-center text-md-start mt-5 mt-md-0 ">
            <div className="row ">
              <h1>biography</h1>
            </div>
            <div className="row mt-5">
              <h4>
                Hi, Im Yahiaoui Abdelkrim, i'm a full stack developer with 3 years of experience. I
                have a extensive inowledge of both frontend and backend technologies. Passionate
                about learning new technologies, Bringing ideas to life and working with dedicated
                teams to build efficient and robust applications suited to the user's needs
              </h4>

              <div className="row mt-4">
                <div className="col-md">
                  <h4 className="fw-bold ">interests</h4>
                  <div className="container ">
                    <ul className="text-start ">
                      <li>Databases and web storage</li>
                      <li>frontend development</li>
                      <li>backend development</li>
                      <li>Data analysis</li>
                    </ul>
                  </div>
                </div>

                <div className="col-md">
                  <h4 className="fw-bold">education</h4>
                  <ul className="text-start">
                    <h5 className="fw-bold d-flex align-align-items-align-items-center">
                      <IoSchool />
                      &ensp;
                      <h6 className="fw-bold text-center">Experimental science bachelor, 2016</h6>
                    </h5>
                    <p>kasdi merbah hight school Algiers, Algeria</p>
                    <hr />
                    <h5 className="fw-bold d-flex align-align-items-align-items-center">
                      <IoSchool />
                      &ensp;
                      <h6 className="fw-bold text-center">
                        Master degree in civil engineering, 2021
                      </h6>
                    </h5>
                    <p>University Of Science And Technology Houari Boumediene</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bio;
