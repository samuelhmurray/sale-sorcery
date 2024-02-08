import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../services/userServices.js";
import { getAllProjects } from "../../services/projectServices.js";
import "../../output.css";

export const ClientDetails = ({ setTitle }) => {
  const [client, setClient] = useState({});
  const [projects, setProjects] = useState([]);
  const [clientsProjects, setClientsProjects] = useState([]);
  const { clientId } = useParams();

  useEffect(() => {
    getUserById(clientId).then((clientObj) => {
      setClient(clientObj);
    });
    getAllProjects().then((allProjects) => {
      const filteredClientProjects = allProjects.filter(
        (project) => project.userId === clientId
      );
      setClientsProjects(filteredClientProjects);
    });
  }, [clientId]);
  const clientName = client.firstName + " " + client.lastName;
  setTitle(clientName);

  return (
    <div className="ml-40 flex-nowrap">
      <div className="text-center border-8 border-topbar rounded-3xl  p-4 m-1">
        <div className="text-4xl">Budget under managment: $xyz</div>
        <div className="">
          <div>Email: {client.email}</div>
          <div>Phone: {client.phone}</div>
          <div>Title: {client.title}</div>
        </div>
      </div>

      {/* needs to be fixed  */}
      <div className=" text-center border-8 border-topbar rounded-3xl p-4 m-1">
        <div>Project name: {projects.name}</div>
        <div>Market: {projects.market}</div>
        <div>Budget: {client.budget}</div>
      </div>
    </div>
  );
};
