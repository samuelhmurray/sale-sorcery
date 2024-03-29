import React from "react";
import { Link } from "react-router-dom";
import { formatToUSD } from "../../functions/formatUSD.js";
import { ProjectClaim } from "./ProjectClaim.js";
import { ProjectDelete } from "./ProjectDelete.js";
import { ProjectEditBtn } from "./ProjectEditBtn.js";
import "../../output.css";

export const Project = ({ project, currentUser, getAndSetProjects }) => {
  return (
    <div
      key={project.id}
      className="border-8 border-topbar rounded-3xl w-72 h-56 text-l p-4 m-1  "
    >
      <Link to={`/projects/${project.id}`}>
        <div className="text-sky-950 hover:text-sky-600 mb-2 font-bold text-xl">
          {project.name}
        </div>
      </Link>
      <div>
        Client Name:{" "}
        <Link
          className="text-sky-950 hover:text-sky-600"
          to={`/clients/${project.user.id}`}
        >
          {project.user.firstName} {project.user.lastName}
        </Link>
      </div>
      <div>Market: {project.market}</div>
      <div>Budget: {formatToUSD(project.budget)}</div>

      <ProjectClaim
        project={project}
        currentUser={currentUser}
        getAndSetProjects={getAndSetProjects}
      />
      <div className="flex space-x-2 mt-1">
        <ProjectDelete
          project={project}
          currentUser={currentUser}
          getAndSetProjects={getAndSetProjects}
        />

        <ProjectEditBtn
          project={project}
          currentUser={currentUser}
          getAndSetProjects={getAndSetProjects}
        />
      </div>
    </div>
  );
};
