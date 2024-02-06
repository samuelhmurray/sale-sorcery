import React, { useEffect, useState } from "react";
import "../../App.css";
import "./Project.css";
import "../../output.css";

import { getAllProjects } from "../../services/projectServices.js";
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
      <div class="flex flex-wrap ml-40">
        {allProjects.map((project) => {
          return (
            <div>
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
