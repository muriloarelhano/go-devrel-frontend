import React, { createContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { UserInfo } from "../interfaces/interfaces";
import { LoginInterface } from "../interfaces/login";

export interface AuthContextProps {
  loading: boolean;
  authenticated: boolean;
  userInfo: UserInfo | null;
  handleLogin: (payload: LoginInterface) => Promise<void>;
  handleLogout: () => void;
  refresh: () => Promise<void>;
}

//@ts-ignore
export const AuthContext = createContext<AuthContextProps>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const {
    loading,
    authenticated,
    userInfo,
    handleLogin,
    handleLogout,
    refresh,
  } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        loading,
        authenticated,
        userInfo,
        handleLogin,
        handleLogout,
        refresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
