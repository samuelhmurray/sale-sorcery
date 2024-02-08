import React from "react";
import "../../output.css";
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
          className="mt-2 px-3 py-2 text-sm font-medium text-center text-text bg-claim rounded-lg hover:bg-hoverclaim focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Claim
        </button>
      )}
    </div>
  );
};
