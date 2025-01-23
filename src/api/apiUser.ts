
export const logIn = async (user: { userName: string; password: string }): Promise<User> => {
  const artificialDelay = Math.round(Math.random() * 1000); // Simulate network delay

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.userName === "admin" && user.password === "admin") resolve({ id: 1, userName: "admin" });
      else reject(new Error("Invalid credentials"));
    }, artificialDelay);
  });
};

export const logOut = async () => {
  const artificialDelay = Math.round(Math.random() * 1000); // Simulate network delay
  return new Promise((resolve) => setTimeout(() => resolve(true), artificialDelay));
};
