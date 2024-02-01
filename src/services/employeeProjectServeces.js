export const addNewEmployeeProject = async (epObj) => {
  const res = await fetch(`http://localhost:8088/employeeProjects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(epObj),
  });
  return await res.json();
};

export const deleteEmployeeProjectsByProjectId = async (projectId) => {
  const deleteOptions = {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  };
  await fetch(
    `http://localhost:8088/employeeProjects?projectId=${projectId}`,
    deleteOptions
  );
};
