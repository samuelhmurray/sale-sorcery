import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Project.css";

import { getAllProjects } from "../../services/projectServices.js";
import { Project } from "./Project.js";
import { ProjectDelete } from "./ProjectDelete.js";

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
              key={`project-${project.id}`}
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
