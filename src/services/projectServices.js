import { deleteuserProjectsByProjectId } from "./userProjectServeces.js";

export const getAllProjects = async () => {
  const res = await fetch(
    "http://localhost:8088/projects?_expand=user&_embed=userProjects"
  );
  return await res.json();
};
export const getProjectById = async (projectId) => {
  const res = await fetch(
    `http://localhost:8088/projects/${projectId}?_expand=user`
  );
  return await res.json();
};

export const saveNewProject = async (projectObj) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectObj),
  };
  let res = await fetch("http://localhost:8088/projects", postOptions);
  let project = await res.json();
  return project;
};

export const saveEditedProject = async (projectId, updatedProjectObj) => {
  const editOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProjectObj),
  };

  let res = await fetch(
    `http://localhost:8088/projects/${projectId}`,
    editOptions
  );
};

export const deleteProject = async (projectId) => {
  await deleteuserProjectsByProjectId(projectId);
  const deleteOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  await fetch(`http://localhost:8088/projects/${projectId}`, deleteOptions);
};

export const editProject = async (projectId, updatedProjectObj) => {
  const editOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProjectObj),
  };

  let res = await fetch(
    `http://localhost:8088/projects/${projectId}`,
    editOptions
  );
};
