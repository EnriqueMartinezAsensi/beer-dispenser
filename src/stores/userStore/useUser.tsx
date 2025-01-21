import { create } from "zustand";

type UserStateType = {
  user: userLogin | undefined;
  logIn: (user: userLogin) => boolean;
  logOut: () => boolean;
};

const isUserValid = (user: userLogin) => {
  return user.username === "admin" && user.password === "admin";
};

const useUser = create<UserStateType>(
  (set, get): UserStateType => ({
    user: undefined,

    logIn: (user: userLogin) => {
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
