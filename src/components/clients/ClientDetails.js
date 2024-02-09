import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../services/userServices.js";
import "../../output.css";
import { formatToUSD } from "../../functions/formatUSD.js";

export const ClientDetails = ({ setTitle }) => {
  const [client, setClient] = useState([]);
  const { clientId } = useParams();
  let totalBudget = 0;

  useEffect(() => {
    getUserById(clientId).then((clientObj) => {
      setClient(clientObj);
      const clientName = `${clientObj.firstName} ${clientObj.lastName}`;
      setTitle(clientName);
    });
  }, [clientId, setTitle]);

  if (client.projects) {
    client.projects.forEach((project) => {
      totalBudget += project.budget;
    });
  }

  return (
    <div className="ml-44 mt-36 mr-10 flex-nowrap">
      <div className="text-center border-8 border-topbar rounded-3xl  p-4 m-1">
        <div className="text-4xl">
          Budget under managment: {formatToUSD(totalBudget)}
        </div>
        <div className="">
          <div>Email: {client.email}</div>
          <div>Phone: {client.phone}</div>
          <div>Title: {client.title}</div>
        </div>
      </div>
      <div className="flex justify-between">
        {client.projects &&
          client.projects.map((project, index) => (
            <div
              key={index}
              className="text-center border-8 border-topbar rounded-3xl p-4 m-1 w-96 "
            >
              <div>Project name: {project.name}</div>
              <div>Market: {project.market}</div>
              <div>Budget: {formatToUSD(project.budget)}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
