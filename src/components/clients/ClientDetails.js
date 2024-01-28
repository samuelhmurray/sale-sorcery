import React from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export const ClientDetails = ({ allClients }) => {
  let { clientId } = useParams();

  return (
    <>
      {allClients.map((client) => (
        <Link key={client.id} to={`/client/${client.id}`} className="card-link">
          <Card className="card">
            <Card.Title className="card-title">{client.name}</Card.Title>
            <Card.Text>
              Client Name: {client.client.firstName} {client.client.lastName},
              Client Id:{client.id}
            </Card.Text>
          </Card>
        </Link>
      ))}
    </>
  );
};
