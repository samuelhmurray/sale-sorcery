import React, { useEffect, useState } from "react";
import { formatToUSD } from "../../functions/formatUSD.js";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../../App.css";
import { getAllProjects } from "../../services/projectServices.js";
import { getAllEmployees } from "../../services/employeeServices.js";
import { addNewEmployeeProject } from "../../services/employeeProjectServeces.js";

export const AllProjects = ({ currentUser }) => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    getAllProjects().then((projects) => {
      setAllProjects(projects);
    });
  }, []);

  const handleClaimBtn = (project) => {
    const employeeProject = project.employeeProjects;
    const firstEmployeeProject = Array.isArray(employeeProject)
      ? employeeProject[0]
      : employeeProject;

    const epObj = {
      id: firstEmployeeProject?.id,
      employeeId: currentUser?.id,
      projectId: firstEmployeeProject?.projectId,
    };
    addNewEmployeeProject(epObj);
  };
  return (
    <>
      <div className="card-container">
        {allProjects.map((project) => (
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
        ))}
      </div>
    </>
  );
};
