import React, { useEffect, useState } from "react";
import { formatToUSD } from "../../functions/formatUSD.js";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../../App.css";
import { getAllProjects } from "../../services/projectServices.js";

export const AllProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    getAllProjects().then((projects) => {
      setAllProjects(projects);
    });
  }, []);
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
          </Card>
        ))}
      </div>
    </>
  );
};
