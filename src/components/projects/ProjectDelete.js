import React from "react";
import "./Project.css";
import { deleteProject } from "../../services/projectServices.js";

export const ProjectDelete = ({ project, currentUser, getAndSetProjects }) => {
  const handleDelete = async (project) => {
    await deleteProject(project.id);
    getAndSetProjects();
  };
  return (
    <div>
      {project.employeeProjects.find(
        (ep) => ep.employeeId === currentUser.id
      ) && (
        <button
          className="form-btn del-btn"
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
