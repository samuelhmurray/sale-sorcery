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

// export const getProjectByUserId = () => {
//   return fetch(
//     "http://localhost:8088/projects?_expand=client&_embed=employeeProjects"
//   ).then((res) => res.json());
// };
