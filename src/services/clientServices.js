export const getAllClients = () => {
  return fetch("http://localhost:8088/clients?_embed=projects").then((res) =>
    res.json()
  );
};
