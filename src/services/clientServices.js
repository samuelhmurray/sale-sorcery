export const getAllUsers = async () => {
  const res = await fetch("http://localhost:8088/users?_embed=projects");
  return await res.json();
};
export const getClientById = async (clientId) => {
  const res = await fetch(`http://localhost:8088/clients/${clientId}`);
  return await res.json();
};
