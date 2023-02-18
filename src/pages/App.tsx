import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import { AccountDashboard } from "./account/Dashboard";

import Forms from "./Forms";
import Home from "./Home";
import Model from "./Model";
import { WikiPage } from "./Wiki";

export const App = () => {
  const { authenticated, refresh } = useContext(AuthContext);

  useEffect(() => {
    if (authenticated) {
      setInterval(() => {
        refresh();
      }, 10000);
    } else {
      for (var i = 1; i < 100; i++) window.clearInterval(i);
      refresh();
    }
  }, [authenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<Model />} />
        <Route path="/my-stage" element={<Home />} />
        {authenticated ? (
          <>
            <Route path="/forms" element={<Forms />} />
            <Route path="/dashboard" element={<AccountDashboard />} />
          </>
        ) : (
          ""
        )}
        <Route path="/wiki" element={<WikiPage />} />
      </Routes>
    </BrowserRouter>
  );
};
