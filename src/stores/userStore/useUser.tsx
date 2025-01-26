import { create } from "zustand";
import { logIn, logOut } from "../../api/apiUser";

type UserStateType = {
  user?: User;
  logIn: (user: UserCredentials) => Promise<void>;
  logOut: () => Promise<void>;
};

const useUser = create<UserStateType>(
  (set): UserStateType => ({
    user: undefined,

    logIn: (user: UserCredentials) => {
      return logIn(user).then((user) => set({ user }));
    },

    logOut: () => {
      return logOut().then(() => set({ user: undefined }));
    },
  })
);

export default useUser;
