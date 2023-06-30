import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { UserInfo } from "../interfaces/interfaces";
import { LoginInterface } from "../interfaces/login";
import http from "../services/axios";
import {
  getTokensFromStorage,
  setTokensOnStorage,
  unsetTokensFromStorage,
} from "../utils/authTokens";
import { EResponseErrorCodes } from "../utils/errors";

export function useAuth() {
  const toast = useToast();

  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  async function handleLogin(payload: LoginInterface): Promise<void> {
    try {
      const {
        data: { id_token, refresh_token },
      } = await http.get("/auth/login", { params: { ...payload } });
      setupAuthenticatedUser(id_token, refresh_token);
      toast({
        title: "Usuário logado com sucesso",
        status: "success",
        duration: 8000,
        isClosable: true,
      });
    } catch (err: any) {
      console.error(err);
      let errorMessage = "Ocorreu um erro ao realizar o login";
      if (axios.isAxiosError(err)) {
        if (
          EResponseErrorCodes.ERROR_INVALID_CREDENTIALS ===
          (err.response?.data as any).description.message
        )
          errorMessage = "Credenciais inválidas";
      }
      toast({
        title: errorMessage,
        status: "error",
        duration: 8000,
        isClosable: true,
      });
      handleLogout(false);
      throw err;
    }
  }

  async function refresh() {
    const { idToken, refreshToken } = getTokensFromStorage();

    if (idToken && refreshToken) {
      try {
        const { id_token, refresh_token } = (
          await http.get("auth/refresh", {
            params: {
              id_token: idToken,
              refresh_token: refreshToken,
            },
          })
        ).data;
        setupAuthenticatedUser(id_token, refresh_token);
      } catch (error) {
        console.error(error);
        unsetTokensFromStorage();
        toast({
          title: "O usuário foi deslogado da sessão",
          status: "error",
          description: "Ocorreu um erro ao revalidar a sessão do usuário",
          duration: 8000,
          isClosable: true,
        });
      }
    } else {
      handleLogout(false);
    }
  }

  function handleDeleteAccount() {
    unsetTokensFromStorage();
    setUserInfo(null);
    setAuthenticated(false);
    window.location.replace("/");
  }

  function handleLogout(shouldRefresh = true): void {
    http.interceptors.request.use((config) => {
      if (config.headers!["Authorization"]) {
        delete config.headers!["Authorization"];
      }

      return config;
    });
    setAuthenticated(false);
    unsetTokensFromStorage();
    setUserInfo(null);
    shouldRefresh ?? window.location.replace("/");
  }

  function setupAuthenticatedUser(id_token: any, refresh_token: any) {
    setTokensOnStorage(id_token, refresh_token);
    http.interceptors.request.use((config) => {
      config.headers!["Authorization"] = `Bearer ${id_token}`;
      return config;
    });
    setUserInfo(JSON.parse(atob(id_token.split(".")[1])));
    setAuthenticated(true);
  }

  return {
    authenticated,
    loading,
    userInfo,
    handleLogin,
    handleLogout,
    refresh,
    handleDeleteAccount,
    setAuthenticated,
    setLoading,
  };
}
