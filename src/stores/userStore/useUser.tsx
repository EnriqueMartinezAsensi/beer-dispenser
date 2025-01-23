import { create } from "zustand";
import { logIn, logOut } from "../../api/apiUser";

type UserStateType = {
  user?: User;
  logIn: (user: UserCredentials) => void;
  logOut: () => void;
};

const useUser = create<UserStateType>(
  (set): UserStateType => ({
    user: undefined,

    logIn: (user: UserCredentials) => {
      logIn(user).then((user) => set({ user }));
    },

    logOut: () => {
      logOut().then(() => set({ user: undefined }));
    },
  })
);

export default useUser;
