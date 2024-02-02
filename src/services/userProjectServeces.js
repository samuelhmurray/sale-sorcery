export const addNewuserProject = async (epObj) => {
  const res = await fetch(`http://localhost:8088/userProjects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(epObj),
  });
  return await res.json();
};

export const deleteuserProjectsByProjectId = async (projectId) => {
  const deleteOptions = {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  };
  await fetch(
    `http://localhost:8088/userProjects?projectId=${projectId}`,
    deleteOptions
  );
};
