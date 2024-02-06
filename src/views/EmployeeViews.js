import { EmployeeNav } from "../components/nav/EmployeeNav.js";
import { AllProjects } from "../components/projects/AllProjects.js";
import { AllClients } from "../components/clients/AllClients.js";
import { Outlet, Route, Routes } from "react-router-dom";
import { ClientDetails } from "../components/clients/ClientDetails.js";
import { NewProject } from "../components/projects/NewProject.js";
import { useEffect, useState } from "react";
import "../output.css";
import { SideBar } from "../components/nav/SideBar.js";

export const EmployeeViews = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [title, setTitle] = useState("");

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
            <EmployeeNav title={title} />
            <SideBar />

            <Outlet />
          </>
        }
      >
        <Route
          path="projects"
          element={
            <AllProjects setTitle={setTitle} currentUser={currentUser} />
          }
        />
        <Route path="clients">
          <Route index element={<AllClients setTitle={setTitle} />} />
          <Route
            path=":clientId"
            element={<ClientDetails setTitle={setTitle} />}
          />
        </Route>
        <Route path="newProject" element={<NewProject setTitle={setTitle} />} />
      </Route>
    </Routes>
  );
};
