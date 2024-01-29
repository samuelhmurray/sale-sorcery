export const getAllClients = () => {
  return fetch("http://localhost:8088/clients?_embed=projects").then((res) =>
    res.json()
  );
};
export const getClientById = (clientId) => {
  return fetch(`http://localhost:8088/clients/${clientId}`).then((res) =>
    res.json()
  );
};
