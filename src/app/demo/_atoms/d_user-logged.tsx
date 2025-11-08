import { atomWithStorage } from "jotai/utils";

export type UserLogged = {
  isLogged: boolean;
  email: string;
  name: string;
};

export const userLoggedAtom = atomWithStorage<UserLogged>(
  "user-logged",
  {
    isLogged: false,
    email: "",
    name: "",
  },
  {
    getItem: key => {
      const stored = sessionStorage.getItem(key);
      return stored ? JSON.parse(stored) : {};
    },
    setItem: (key, value) =>
      sessionStorage.setItem(key, JSON.stringify(value)),
    removeItem: key => sessionStorage.removeItem(key),
  }
);