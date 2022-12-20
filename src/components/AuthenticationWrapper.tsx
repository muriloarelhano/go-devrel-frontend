import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const AuthenticationWrapper: React.FC = ({ children }) => {
  const { authenticated } = useContext(AuthContext);

  return <>{authenticated ? children : window.location.replace("/")}</>;
};
