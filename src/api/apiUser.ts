export const logIn = async (user: UserLogin): Promise<User> => {
  if (user.userName === "admin" && user.password === "admin") return { id: 1, userName: "admin" };
  else throw new Error("Invalid credentials");
};

export const logOut = async () => {
  return true;
};
