import { deleteEmployeeProjectsByProjectId } from "./employeeProjectServeces.js";

export const getAllProjects = async () => {
  const res = await fetch(
    "http://localhost:8088/projects?_expand=client&_embed=employeeProjects"
  );
  return await res.json();
};

export const saveNewproject = async (projectObj) => {
  const postOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(projectObj),
  };
  let res = await fetch("http://localhost:8088/projects", postOptions);
  let project = await res.json();
  return project;
};

export const deleteProject = async (projectId) => {
  await deleteEmployeeProjectsByProjectId(projectId);
  const deleteOptions = {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  };

  await fetch(`http://localhost:8088/projects/${projectId}`, deleteOptions);
};
