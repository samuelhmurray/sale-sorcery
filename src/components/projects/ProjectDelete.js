import React from "react";
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
          className="mt-2 px-3 py-2 text-sm font-medium text-center text-slate-100 bg-delete rounded-lg hover:bg-hoverdelete focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
