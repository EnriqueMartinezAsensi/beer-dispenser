import { create } from "zustand";

type UserStateType = {
  user?: UserLogin;
  logIn: (user: UserLogin) => boolean;
  logOut: () => boolean;
};

const isUserValid = (user: UserLogin) => {
  return user.username === "admin" && user.password === "admin";
};

const useUser = create<UserStateType>(
  (set, get): UserStateType => ({
    user: undefined,

    logIn: (user: UserLogin) => {
      if (!isUserValid(user)) return false;

      set({ user });
      return true;
    },

    logOut: () => {
      if (!get().user) return false;

      set({ user: undefined });
      return true;
    },
  })
);

export default useUser;
