import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../../App.css";
import { getAllClients } from "../../services/clientServices.js";

export const AllClients = () => {
  const [allClients, setAllClients] = useState([]);
  useEffect(() => {
    getAllClients().then((clients) => {
      setAllClients(clients);
    });
  }, []);
  return (
    <div className="card-container">
      {allClients.map((client) => (
        <Card key={client.id} className="card card-link">
          <Link to={`/clients/${client.id}`}>
            <Card.Title>
              Client Name: {client.firstName} {client.lastName}
            </Card.Title>
            <Card.Text>Title: {client.title}</Card.Text>
            <Card.Text>Phone: {client.phone}</Card.Text>
            <Card.Text>Email: {client.email}</Card.Text>
          </Link>
        </Card>
      ))}
    </div>
  );
};
