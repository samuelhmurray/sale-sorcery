export const getAllProjects = () => {
  return fetch(
    "http://localhost:8088/projects?_expand=client&_embed=employeeProjects"
  ).then((res) => res.json());
};
