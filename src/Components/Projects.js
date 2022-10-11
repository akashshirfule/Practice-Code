/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

import expense from "./petracker.png";
import movie from "./Movie-info.png";
import tfeature from "./TableFeature.png";
import rform from "./reg-form.png";
import todo from "./todolist.png";

function Projects() {
  return (
    <div className="pdiv">
      <section className="projects">
        <div className="container">
          <div className="title text-center">
            <h3>Featured Projects</h3>
          </div>
          <div className="projects-wrapper">
            <div className="project">
              <div className="img-container">
                <img src={expense} />
              </div>
              <div className="description">
                <h4>Expense Tracker</h4>
                <div className="links">
                  <a></a>
                  <a></a>
                </div>
              </div>
              <p>
                Expense Tracker - The aim of this project is to help user add
                their daily expenses and income.
              </p>
            </div>
          </div>

          <div className="projects-wrapper">
            <div className="project">
              <div className="img-container">
                <img src={movie} />
              </div>
              <div className="description">
                <h4>Movie information Search</h4>
                <div className="links">
                  <a></a>
                  <a></a>
                </div>
              </div>
              <p>
                This app help user to get movie information easily and user will
                get all information on one click.
              </p>
            </div>
          </div>

          <div className="projects-wrapper">
            <div className="project">
              <div className="img-container">
                <img src={rform} />
              </div>
              <div className="description">
                <h4>Register with formik and yup library</h4>
                <div className="links">
                  <a></a>
                  <a></a>
                </div>
              </div>
              <p>
                Register with formik and yup library The form ui offers user to
                add easily their with input if they are not valid then it will
                show error messages with condition
              </p>
            </div>
          </div>

          <div className="projects-wrapper">
            <div className="project">
              <div className="img-container">
                <img src={tfeature} />
              </div>
              <div className="description">
                <h4>Table data with some feature</h4>
                <div className="links">
                  <a></a>
                  <a></a>
                </div>
              </div>
              <p>
                Displaying table data with some feature - This app will fetch
                data from api and will display in table with some tools such as
                pagination ,filter and sorting.
              </p>
            </div>
          </div>

          <div className="projects-wrapper">
            <div className="project">
              <div className="img-container">
                <img src={todo} />
              </div>
              <div className="description">
                <h4>Todo List</h4>
                <div className="links">
                  <a></a>
                  <a></a>
                </div>
              </div>
              <p>
                Todolist- This app will offers an user to add their task in list
                and user will see the list of task and user can delete the task.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
