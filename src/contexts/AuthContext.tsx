import React, { createContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { LoginInterface } from "../interfaces/login";

export interface AuthContextProps {
  loading: boolean;
  authenticated: boolean;
  userInfo: unknown | null;
  handleLogin: (payload: LoginInterface) => Promise<void>;
  handleLogout: () => void;
}

//@ts-ignore
export const AuthContext = createContext<AuthContextProps>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const { loading, authenticated, userInfo, handleLogin, handleLogout } =
    useAuth();

  return (
    <AuthContext.Provider
      value={{ loading, authenticated, userInfo, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
