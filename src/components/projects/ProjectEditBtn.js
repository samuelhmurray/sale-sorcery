import React from "react";
import { useNavigate } from "react-router-dom";
import "../../output.css";

export const ProjectEditBtn = ({ project, currentUser }) => {
  const navigate = useNavigate();
  return (
    <div>
      {project.userProjects.find((ep) => ep.userId === currentUser.id) && (
        <button
          class=""
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
