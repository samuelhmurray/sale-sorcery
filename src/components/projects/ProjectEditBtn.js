import React from "react";
import { useNavigate } from "react-router-dom";

export const ProjectEdit = ({ project, currentUser }) => {
  const navigate = useNavigate();
  return (
    <div>
      {project.userProjects.find((ep) => ep.userId === currentUser.id) && (
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
