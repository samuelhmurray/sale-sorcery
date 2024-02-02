import React from "react";
import "./Project.css";
import { addNewuserProject } from "../../services/userProjectServeces.js";

export const ProjectClaim = ({ project, currentUser, getAndSetProjects }) => {
  const handleClaimBtn = async (project) => {
    const newuserProjectObj = {
      userId: currentUser.id,
      projectId: project.id,
    };

    await addNewuserProject(newuserProjectObj);
    getAndSetProjects();
  };

  return (
    <div>
      {!project.userProjects.find((ep) => ep.userId === currentUser.id) && (
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
