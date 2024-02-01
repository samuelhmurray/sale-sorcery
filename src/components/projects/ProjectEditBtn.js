import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const ProjectEdit = ({ project, currentUser }) => {
  const navigate = useNavigate();
  return (
    <div>
      {project.employeeProjects.find(
        (ep) => ep.employeeId === currentUser.id
      ) && (
        <button
          className="form-btn edit-btn"
          onClick={() => {
            navigate(`/editProject/${project.id}`);
          }}
        >
          Edit
        </button>
      )}
    </div>
  );
};
