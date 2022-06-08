import React from "react";
import { BsFillArrowUpCircleFill, BsGithub } from "react-icons/bs";
import { IoArrowRedoCircleSharp } from "react-icons/io5";
import cocktail from "../images/cocktail.svg";
import menu from "../images/menu.svg";
import tracker from "../images/tracker.svg";
import "../App.css";
const Projects = () => {
  return (
    <div className="container text-light pt-5 projects-top " id="projects">
      <h1 className="text-center mb-4">Projects</h1>
      <div className="row g-4 my-5 d-flex justify-content-center">
        <div className=" col-md-6 col-lg-4">
          <div class="card bg-dark border-0 align-items-center text-center">
            <a href="https://shoes-kar.netlify.app/" target="_blank">
              <img
                src={tracker}
                class="card-img-top mw-75 px-4 px-sm-0 img-fluid rounded"
                alt="..."
              />
            </a>
            <div class="card-body">
              <a
                href="https://shoes-kar.netlify.app/"
                target="_blank"
                className="d-flex align-items-center justify-content-center"
              >
                <IoArrowRedoCircleSharp className="h1" />
              </a>
              <h5 class="card-title">shoes tracker</h5>
              <p class="card-text my-3 d-flex flex-wrap justify-content-center">
                <span className="bg-secondary p-1 rounded m-1">HTML</span>
                <span className="bg-secondary p-1 rounded m-1">CSS</span>
                <span className="bg-secondary p-1 rounded m-1">Javascript</span>
                <span className="bg-secondary p-1 rounded m-1">React.js</span>
                <span className="bg-secondary p-1 rounded m-1">MongoDB</span>
                <span className="bg-secondary p-1 rounded m-1">tailwindCSS</span>
              </p>
              <a
                href="https://github.com/KarKars/ShoesStore"
                target="_blank"
                class="btn btn-primary my-auto"
              >
                <BsGithub /> source Code
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div class="card bg-dark border-0 align-items-center text-center">
            <a href="https://cocktail-kar.netlify.app/" target="_blank">
              <img
                src={cocktail}
                class="card-img-top mw-75 px-4 px-sm-0 img-fluid rounded"
                alt="..."
              />
            </a>
            <div class="card-body">
              <a
                href="https://cocktail-kar.netlify.app/"
                target="_blank"
                className="d-flex align-items-center justify-content-center"
              >
                <IoArrowRedoCircleSharp className="h1" />
              </a>
              <h5 class="card-title ">Cocktail List</h5>
              <p class="card-text my-3 d-flex flex-wrap justify-content-center">
                <span className="bg-secondary p-1 rounded m-1">HTML</span>
                <span className="bg-secondary p-1 rounded m-1">CSS</span>
                <span className="bg-secondary p-1 rounded m-1">Javascript</span>
                <span className="bg-secondary p-1 rounded m-1">React.js</span>
              </p>
              <a
                href="https://github.com/KarKars/ShoesStore"
                target="_blank"
                className="btn btn-primary my-auto"
              >
                <BsGithub /> source Code
              </a>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-4">
          <div class="card bg-dark border-0 align-items-center text-center">
            <a href="https://menu-kar.netlify.app/" target="_blank">
              <img src={menu} class="card-img-top mw-75 px-4 px-sm-0 img-fluid rounded" alt="..." />
            </a>
            <div class="card-body">
              <a
                href="https://menu-kar.netlify.app/"
                target="_blank"
                className="d-flex align-items-center justify-content-center"
              >
                <IoArrowRedoCircleSharp className="h1" />
              </a>
              <h5 class="card-title">Menu</h5>
              <p class="card-text my-3 d-flex flex-wrap justify-content-center">
                <span className="bg-secondary p-1 rounded m-1">HTML</span>
                <span className="bg-secondary p-1 rounded m-1">CSS</span>
                <span className="bg-secondary p-1 rounded m-1">Javascript</span>
                <span className="bg-secondary p-1 rounded m-1">React.js</span>
              </p>
              <a
                href="https://github.com/KarKars/Menu"
                target="_blank"
                class="btn btn-primary my-auto"
              >
                <BsGithub /> source Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="p-5 bg-dark text-light text-center position-relative mt-5">
        <div className="container ">
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
