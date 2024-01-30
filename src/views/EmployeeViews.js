import { EmployeeNav } from "../components/nav/EmployeeNav.js";
import { AllProjects } from "../components/projects/AllProjects.js";
import { AllClients } from "../components/clients/AllClients.js";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import { ClientDetails } from "../components/clients/ClientDetails.js";
import { NewProject } from "../components/projects/NewProject.js";

export const EmployeeViews = () => {
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
        <Route path="projects" element={<AllProjects />} />
        <Route path="clients">
          <Route index element={<AllClients />} />
          <Route path=":clientId" element={<ClientDetails />} />
        </Route>
        <Route path="newProject" element={<NewProject />} />
      </Route>
    </Routes>
  );
};
