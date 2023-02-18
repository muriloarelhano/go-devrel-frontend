import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const AuthenticationWrapper: React.FC = ({ children }) => {
  const { authenticated, userInfo } = useContext(AuthContext);

  return (
    <>{authenticated && userInfo ? children : window.location.replace("/")}</>
  );
};
