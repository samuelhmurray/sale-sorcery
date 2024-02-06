import React from "react";
import "./Project.css";
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
          class="bg-claim hover:bg-hoverclaim font-bold py1 px-4 rounded mt-1"
        >
          Claim
        </button>
      )}
    </div>
  );
};
