import React, { useEffect, useState } from "react";
import { EmployeeNav } from "../components/nav/EmployeeNav.js";
import { getAllProjects } from "../services/projectServices";
import { getAllClients } from "../services/clientServices.js";
import { AllProjects } from "../components/projects/AllProjects.js";
import { AllClients } from "../components/clients/AllClients.js";
import { Outlet, Route, Routes } from "react-router-dom";
import { ClientDetails } from "../components/clients/ClientDetails.js";

export const EmployeeViews = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [allClients, setAllClients] = useState([]);
  useEffect(() => {
    getAllClients().then((clients) => {
      setAllClients(clients);
    });
    getAllProjects().then((projects) => {
      setAllProjects(projects);
    });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <EmployeeNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<AllProjects allProjects={allProjects} />} />
        <Route
          path="projects"
          element={<AllProjects allProjects={allProjects} />}
        />
        <Route path="clients" element={<AllClients allClients={allClients} />}>
          <Route
            path="clients/:client.id"
            element={<ClientDetails allClients={allClients} />}
          />
        </Route>{" "}
      </Route>
    </Routes>
  );
};
