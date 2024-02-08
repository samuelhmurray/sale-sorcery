import React from "react";
import { useNavigate } from "react-router-dom";
import "../../output.css";

export const ProjectEditBtn = ({ project, currentUser }) => {
  const navigate = useNavigate();
  return (
    <div>
      {project.userProjects.find((ep) => ep.userId === currentUser.id) && (
        <button
          class="mt-2 px-3 py-2 text-sm font-medium text-center text-slate-300 bg-edit rounded-lg hover:bg-hoveredit focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
