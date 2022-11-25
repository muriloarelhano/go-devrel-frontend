import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ErrosEnum } from "../errors";
import { LoginInterface } from "../interfaces/login";
import http from "../services/axios";

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const refreshToken = localStorage.getItem("refresh_token");
    const token = localStorage.getItem("id_token");

    if (token) {
      http.interceptors.request.use((config) => {
        config.headers!["Authorization"] = `Bearer ${JSON.parse(token)}`;
        return config;
      });
      setAuthenticated(true);
    }
    if (!refreshToken) {
      console.error("refresh_token is missing");
    }

    setLoading(false);
  }, []);

  async function handleLogin(payload: LoginInterface): Promise<void> {
    try {
      const {
        data: { id_token, refresh_token },
      } = await http.get("/auth/login", { params: { ...payload } });
      localStorage.setItem("id_token", JSON.stringify(id_token));
      localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
      http.interceptors.request.use((config) => {
        config.headers!["Authorization"] = `Bearer ${id_token}`;
        return config;
      });
      console.log(JSON.parse(atob(id_token.split(".")[1])))
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
      http.interceptors.request.use((config) => {
        //@ts-ignore
        config.headers!["Authorization"] = undefined;
        return config;
      });
      if (axios.isAxiosError(err)) {
        console.log(err.response!.data);
        if (
          ErrosEnum.ERROR_INVALID_CREDENTIALS ===
          //@ts-ignore
          err.response.data.description.message
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
    localStorage.removeItem("id_token");
    localStorage.removeItem("refresh_token");
    http.interceptors.request.use((config) => {
      //@ts-ignore
      config.headers["Authorization"] = undefined;
      return config;
    });
  }

  return { authenticated, loading, handleLogin, handleLogout, userInfo };
}
