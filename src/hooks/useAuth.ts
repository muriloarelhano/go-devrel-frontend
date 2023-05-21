import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
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
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

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
      console.error("refresh_token is missing");
    }

    setLoading(false);
  }, [authenticated, userInfo]);

  async function handleLogin(payload: LoginInterface): Promise<void> {
    try {
      const {
        data: { id_token, refresh_token },
      } = await http.get("/auth/login", { params: { ...payload } });
      setTokensOnStorage(id_token, refresh_token);
      http.interceptors.request.use((config: any) => {
        config.headers!["Authorization"] = `Bearer ${id_token}`;
        return config;
      });
      setUserInfo(JSON.parse(atob(id_token.split(".")[1])));
      setAuthenticated(true);

      toast({
        title: "Usuário logado com sucesso",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err: any) {
      let errorMessage = "Ocorreu um erro ao realizar o login";
      http.interceptors.request.use((config: any) => {
        //@ts-ignore
        config.headers!["Authorization"] = undefined;
        return config;
      });
      if (axios.isAxiosError(err)) {
        if (
          EResponseErrorCodes.ERROR_INVALID_CREDENTIALS ===
          (err.response?.data as any).description.message
        )
          errorMessage = "Credenciais inválidas";
      }
      setAuthenticated(false);
      toast({
        title: errorMessage,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      throw err;
    }
  }

  function handleLogout(): void {
    setAuthenticated(false);
    unsetTokensFromStorage();
    http.interceptors.request.use((config) => {
      //@ts-ignore
      config.headers["Authorization"] = undefined;
      return config;
    });
    setUserInfo(null);
    window.location.replace("/");
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
        setTokensOnStorage(id_token, refresh_token);
        http.interceptors.request.use((config) => {
          config.headers!["Authorization"] = `Bearer ${id_token}`;
          return config;
        });
        setUserInfo(JSON.parse(atob(id_token.split(".")[1])));
        setAuthenticated(true);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast({
            //@ts-ignore
            title: error.response?.data,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      }
    } else {
      unsetTokensFromStorage();
      setUserInfo(null);
      setAuthenticated(false);
    }
  }

  function handleDeleteAccount() {
    unsetTokensFromStorage();
    setUserInfo(null);
    setAuthenticated(false);
    window.location.replace("/");
  }

  return {
    authenticated,
    loading,
    userInfo,
    handleLogin,
    handleLogout,
    refresh,
    handleDeleteAccount,
  };
}
