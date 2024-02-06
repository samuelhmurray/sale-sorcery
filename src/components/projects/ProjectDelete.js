import React from "react";
import "./Project.css";
import "../../output.css";
import { deleteProject } from "../../services/projectServices.js";

export const ProjectDelete = ({ project, currentUser, getAndSetProjects }) => {
  const handleDelete = async (project) => {
    await deleteProject(project.id);
    getAndSetProjects();
  };
  return (
    <div>
      {project.userProjects.find((ep) => ep.userId === currentUser.id) && (
        <button
          class="bg-delete hover:bg-hoverdelete font-bold py1 px-4 rounded"
          onClick={() => {
            handleDelete(project);
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};
