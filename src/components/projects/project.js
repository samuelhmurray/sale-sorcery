import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatToUSD } from "../../functions/formatUSD.js";
import { ProjectClaim } from "./ProjectClaim.js";
import { ProjectDelete } from "./ProjectDelete.js";
import "./Project.css";
import { ProjectEditBtn } from "./ProjectEditBtn.js";
import "../../output.css";

export const Project = ({ project, currentUser, getAndSetProjects }) => {
  return (
    <Card key={project.id} className="card">
      <Card.Title className="card-title">{project.name}</Card.Title>
      <Card.Text>
        Client Name:{" "}
        <Link className="text-link" to={`/clients/${project.user.id}`}>
          {project.user.firstName} {project.user.lastName}
        </Link>
      </Card.Text>
      <Card.Text>Market: {project.market}</Card.Text>
      <Card.Text>Budget: {formatToUSD(project.budget)}</Card.Text>
      <ProjectClaim
        project={project}
        currentUser={currentUser}
        getAndSetProjects={getAndSetProjects}
      />
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
    </Card>
  );
};
