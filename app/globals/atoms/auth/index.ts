import { atom } from "recoil";

interface Auth {
  isAuthenticated: boolean;
}

const AuthStatus = atom<Auth>({
  key: "AuthStatus",
  default: { isAuthenticated: false },
});

export default AuthStatus;
