import React, { useEffect, useState } from "react";
import { formatToUSD } from "../../functions/formatUSD.js";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../../App.css";
import { getAllProjects } from "../../services/projectServices.js";
import { getAllEmployees } from "../../services/employeeServices.js";
import { addNewEmployeeProject } from "../../services/employeeProjectServeces.js";
import { Project } from "./project.js";

export const AllProjects = ({ currentUser }) => {
  const [allProjects, setAllProjects] = useState([]);

  const getAndSetProjects = () => {
    getAllProjects().then((projects) => {
      setAllProjects(projects);
    });
  };
  useEffect(() => {
    getAndSetProjects();
  }, [currentUser]);

  return (
    <>
      <div className="card-container">
        {allProjects.map((project) => {
          return (
            <Project
              key={project.id}
              project={project}
              currentUser={currentUser}
              getAndSetProjects={getAndSetProjects}
            />
          );
        })}
      </div>
    </>
  );
};
