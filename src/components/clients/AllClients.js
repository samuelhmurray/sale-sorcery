import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../../App.css";
import { Link as EmailLink } from "@react-email/components";

export const AllClients = ({ allClients }) => {
  return (
    <>
      {allClients.map((client) => (
        <Link
          key={client.id}
          to={`/clients/${client.id}`}
          className="card-link"
        >
          <Card className="card">
            <Card.Text>
              Client Name: {client.firstName} {client.lastName}
            </Card.Text>
            <Card.Text>Title: {client.title}</Card.Text>
            <Card.Text>Phone: {client.phone}</Card.Text>

            <Card.Text>
              Email:
              <EmailLink href={client.email} className="text-link">
                {client.email}
              </EmailLink>
            </Card.Text>
          </Card>
        </Link>
      ))}
    </>
  );
};
