import { create } from "zustand";
import { logIn, logOut } from "../../api/apiUser";

type UserStateType = {
  user?: User;
  logIn: (user: UserLogin) => void;
  logOut: () => void;
};

const useUser = create<UserStateType>(
  (set): UserStateType => ({
    user: undefined,

    logIn: (user: UserLogin) => {
      logIn(user).then((user) => set({ user }));
    },

    logOut: () => {
      logOut().then(() => set({ user: undefined }));
    },
  })
);

export default useUser;
