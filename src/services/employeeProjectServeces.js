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
