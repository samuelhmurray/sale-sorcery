import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatToUSD } from "../../functions/formatUSD.js";
import { addNewEmployeeProject } from "../../services/employeeProjectServeces.js";

export const Project = ({ project, currentUser, getAndSetProjects }) => {
  const handleClaimBtn = async (project) => {
    const employeeProject = project.employeeProjects;
    const firstEmployeeProject = Array.isArray(employeeProject)
      ? employeeProject[0]
      : undefined;

    const epObj = {
      employeeId: currentUser?.id,
      projectId: firstEmployeeProject?.projectId || project.id,
    };

    await addNewEmployeeProject(epObj);
    getAndSetProjects();
  };

  return (
    <Card key={project.id} className="card">
      <Card.Title className="card-title">{project.name}</Card.Title>
      <Card.Text>
        Client Name:{" "}
        <Link className="text-link" to={`/clients/${project.client.id}`}>
          {project.client.firstName} {project.client.lastName}
        </Link>
      </Card.Text>
      <Card.Text>Market: {project.market}</Card.Text>
      <Card.Text>Budget: {formatToUSD(project.budget)}</Card.Text>
      <div>
        {!project.employeeProjects.find(
          (ep) => ep.employeeId === currentUser.id
        ) && (
          <button
            onClick={() => {
              handleClaimBtn(project);
            }}
            className="card-btn"
          >
            Claim
          </button>
        )}
      </div>
    </Card>
  );
};
