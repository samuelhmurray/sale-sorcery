import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getClientById } from "../../services/clientServices.js";
import { getAllProjects } from "../../services/projectServices.js";

export const ClientDetails = ({ allClients }) => {
  const [client, setClient] = useState([]);
  const [projects, setProjects] = useState([]);
  const { clientId } = useParams();

  useEffect(() => {
    getClientById(clientId).then((clientObj) => {
      setClient(clientObj);
    });
    getAllProjects().then((project) => {
      if (project.clientId === clientId) {
        setProjects(project);
      }
    });
  }, []);

  return (
    <>
      <Card className="card">
        <Card.Title className="card-title">
          {client?.firstName} {client?.lastName}
        </Card.Title>
        <Card.Text>Budget under managment: $xyz</Card.Text>
      </Card>
      <Card className="card">
        <Card.Text>Title: {client?.title}</Card.Text>
        <Card.Text>Phone: {client?.phone}</Card.Text>
        <Card.Text>Email: {client?.email}</Card.Text>
      </Card>
      <Card className="card">
        <Card.Title></Card.Title>
        <Card.Text>Project name: {client?.title}</Card.Text>
        <Card.Text>Market: {client?.phone}</Card.Text>
        <Card.Text>Budget: {client?.email}</Card.Text>
      </Card>
    </>
  );
};
