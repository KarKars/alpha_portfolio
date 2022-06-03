import React from "react";
import programmer from "../images/programmer.svg";
import { ImProfile, ImLinkedin, ImGithub, ImGoogle } from "react-icons/im";
import { IoSchool } from "react-icons/io5";
import "../App.css";

const Bio = () => {
  return (
    <div className="text-light my-5 pb-5">
      <section className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="row justify-content-center">
              <img src={programmer} alt="programmerImage" className="img-fluid img w-75" />
            </div>
            <div className="row text-center mt-2 justify-content-center">
              <h1>Yahiaoui Abdelkrim</h1>
              <h5 className="fw-light">Software Engineer</h5>
              <h5 className="fw-light">Civil Engineer</h5>
              <div className="row justify-content-evenly align-items-center">
                <div className="col">
                  <h2>
                    <a href="#">
                      <ImGoogle />
                    </a>
                  </h2>
                </div>
                <div className="col">
                  <h2>
                    <a href="#">
                      <ImGithub />
                    </a>
                  </h2>
                </div>
                <div className="col">
                  <h2>
                    <a href="#">
                      <ImLinkedin />
                    </a>
                  </h2>
                </div>
                <div className="col">
                  <h2>
                    <a href="#">
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
            <div className="row">
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro saepe minus
                accusamus! Iusto dolorem blanditiis corporis dolores eaque voluptatum hic voluptas
                ratione laudantium optio, impedit itaque quaerat sapiente, dicta et rerum veniam
                aspernatur enim doloribus. Reiciendis, tempore officiis modi debitis consequatur
                saepe quasi exercitationem rem officia expedita accusantium minus vel earum dolor
                <hr />
                dolorem libero ipsum quo. Dolorum, voluptatum tempora? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Beatae ducimus molestiae aliquam quos incidunt odio
                minus atque! Officiis, possimus velit.
              </h5>
              <div className="row mt-4">
                <div className="col">
                  <h4 className="fw-bold">interests</h4>
                  <ul>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                    <li>hello</li>
                  </ul>
                </div>

                <div className="col">
                  <h4 className="fw-bold">education</h4>
                  <ul>
                    <h5>
                      <span>
                        <IoSchool />
                        &ensp;
                      </span>
                      hello
                    </h5>
                    <h5>
                      <span>
                        <IoSchool />
                        &ensp;
                      </span>
                      hello
                    </h5>
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
