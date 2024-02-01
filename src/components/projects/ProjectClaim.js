import React from "react";
import "./Project.css";
import { addNewEmployeeProject } from "../../services/employeeProjectServeces.js";

export const ProjectClaim = ({ project, currentUser, getAndSetProjects }) => {
  const handleClaimBtn = async (project) => {
    const newEmployeeProjectObj = {
      employeeId: currentUser.id,
      projectId: project.id,
    };

    await addNewEmployeeProject(newEmployeeProjectObj);
    getAndSetProjects();
  };

  return (
    <div>
      {!project.employeeProjects.find(
        (ep) => ep.employeeId === currentUser.id
      ) && (
        <button
          onClick={() => {
            handleClaimBtn(project);
          }}
          className="form-btn claim-btn"
        >
          Claim
        </button>
      )}
    </div>
  );
};
