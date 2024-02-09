import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../output.css";
import { getAllUsers } from "../../services/userServices.js";

export const AllClients = ({ setTitle }) => {
  const [allClients, setAllClients] = useState([]);
  useEffect(() => {
    getAllUsers().then((clients) => {
      const filteredClients = clients.filter((client) => !client.isEmployee);
      setAllClients(filteredClients);
      setTitle("All Clients");
    });
  }, [setTitle]);

  return (
    <div className="flex flex-wrap ml-44 mt-36">
      {allClients.map((client) => (
        <div
          key={client.id}
          className="hover:shadow-2xl border-8 border-topbar rounded-3xl w-80 h-50 text-l p-4 m-1 "
        >
          <Link to={`/clients/${client.id}`}>
            <div>
              Client Name: {client.firstName} {client.lastName}
            </div>
            <div>Title: {client.title}</div>
            <div>Phone: {client.phone}</div>
            <div>Email: {client.email}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
