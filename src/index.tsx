import React from "react";
import ReactDOM from "react-dom";
import { App } from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig } from "chakra-ui-steps";

import { withProse } from "@nikolovlazar/chakra-ui-prose";
import { AuthProvider } from "./contexts/AuthContext";

const theme = extendTheme(
  {
    components: {
      Steps: StepsStyleConfig,
    },
    initialColorMode: "light",
    useSystemColorMode: false,
    fonts: {
      body: "Inter",
      heading: "Inter",
      mono: "Inter",
    },
  },
  withProse()
);
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <AuthProvider>
      <App />
    </AuthProvider>
  </ChakraProvider>,
  document.getElementById("root")
);

reportWebVitals();
