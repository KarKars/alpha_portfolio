import React from "react";
import programmer from "../images/programmer.svg";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "../App.css";
const Projects = () => {
  return (
    <div className="container text-light mt-5" id="projects">
      <h1 className="text-center mb-4">Projects</h1>
      <div className="row g-4 my-5">
        <div className="col-md-6 col-lg-4">
          <div class="card bg-dark border-0 align-items-center text-center">
            <img src={programmer} class="card-img-top w-50 mw-75 img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div class="card bg-dark border-0 align-items-center text-center">
            <img src={programmer} class="card-img-top w-50 mw-75 img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div class="card bg-dark align-items-center border-0 text-center">
            <img src={programmer} class="card-img-top w-50 mw-75 img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="p-5 bg-dark text-light text-center position-relative mt-5">
        <div className="container">
          <p className="lead"> Yahiaoui Abdelkrim &copy; </p>
          <a href="#" className="position-absolute bottom-0 end-0 p-5 h1" id="">
            <BsFillArrowUpCircleFill />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
