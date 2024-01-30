export const getAllProjects = async () => {
  const res = await fetch(
    "http://localhost:8088/projects?_expand=client&_embed=employeeProjects"
  );
  return await res.json();
};
// export const getProjectByUserId = () => {
//   return fetch(
//     "http://localhost:8088/projects?_expand=client&_embed=employeeProjects"
//   ).then((res) => res.json());
// };
