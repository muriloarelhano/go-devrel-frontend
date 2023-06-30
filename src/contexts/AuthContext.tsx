import React, { createContext, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { UserInfo } from "../interfaces/interfaces";
import { LoginInterface } from "../interfaces/login";
import http from "../services/axios";
import { getTokensFromStorage } from "../utils/authTokens";

export interface AuthContextProps {
  loading: boolean;
  authenticated: boolean;
  userInfo: UserInfo | null;
  handleLogin: (payload: LoginInterface) => Promise<void>;
  handleLogout: () => void;
  refresh: () => Promise<void>;
  handleDeleteAccount: () => void;
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
    handleDeleteAccount,
    setAuthenticated,
    setLoading,
  } = useAuth();

  useEffect(() => {
    const { idToken, refreshToken } = getTokensFromStorage();

    if (idToken) {
      http.interceptors.request.use((config: any) => {
        config.headers!["Authorization"] = `Bearer ${
          getTokensFromStorage().idToken
        }`;
        return config;
      });
      setAuthenticated(true);
    }
    if (!refreshToken) {
      console.warn("refresh_token is missing");
    }

    setLoading(false);
  }, [authenticated, setAuthenticated, setLoading, userInfo]);

  return (
    <AuthContext.Provider
      value={{
        loading,
        authenticated,
        userInfo,
        handleLogin,
        handleLogout,
        refresh,
        handleDeleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
