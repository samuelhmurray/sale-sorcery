import { EmployeeNav } from "../components/nav/EmployeeNav.js";
import { AllProjects } from "../components/projects/AllProjects.js";
import { AllClients } from "../components/clients/AllClients.js";
import { Outlet, Route, Routes } from "react-router-dom";
import { ClientDetails } from "../components/clients/ClientDetails.js";
import { NewProject } from "../components/projects/NewProject.js";
import { useEffect, useState } from "react";
import "../output.css";

export const EmployeeViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localSaleUser = localStorage.getItem("sale_user");
    const saleUserObj = JSON.parse(localSaleUser);
    setCurrentUser(saleUserObj);
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
        <Route
          path="projects"
          element={<AllProjects currentUser={currentUser} />}
        />
        <Route path="clients">
          <Route index element={<AllClients />} />
          <Route path=":clientId" element={<ClientDetails />} />
        </Route>
        <Route path="newProject" element={<NewProject />} />
      </Route>
    </Routes>
  );
};
