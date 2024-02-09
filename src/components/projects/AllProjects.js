import React, { useEffect, useState } from "react";
import "../../output.css";

import { getAllProjects } from "../../services/projectServices.js";
import { Project } from "./project.js";

export const AllProjects = ({ currentUser, setTitle }) => {
  const [allProjects, setAllProjects] = useState([]);

  const getAndSetProjects = () => {
    getAllProjects().then((projects) => {
      setAllProjects(projects);
    });
  };
  useEffect(() => {
    setTitle("All Projects");
    getAndSetProjects();
  }, [currentUser, setTitle]);

  return (
    <>
      <div className="flex flex-wrap ml-44">
        {allProjects.map((project) => {
          return (
            <div key={`project-container-${project.id}`}>
              <Project
                key={`project-${project.id}`}
                project={project}
                currentUser={currentUser}
                getAndSetProjects={getAndSetProjects}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
