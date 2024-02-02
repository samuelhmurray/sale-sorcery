export const getUsersByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  );
};
export const getAllUsers = () => {
  return fetch(
    `http://localhost:8088/users?_expand=company&_embed=userProjects`
  ).then((res) => res.json());
};

export const getUserById = (id) => {
  return fetch(
    `http://localhost:8088/users/${id}?_expand=company&_embed=userProjects`
  ).then((res) => res.json());
};
