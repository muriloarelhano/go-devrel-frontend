import React from "react";
import ReactDOM from "react-dom";
import { App } from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig } from "chakra-ui-steps";

import { withProse } from "@nikolovlazar/chakra-ui-prose";
import { AuthProvider } from "./contexts/AuthContext";
import { HeaderFormProvider } from "./contexts/HeaderFormContext";

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
  <AuthProvider>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <HeaderFormProvider>
        <App />
      </HeaderFormProvider>
    </ChakraProvider>
  </AuthProvider>,
  document.getElementById("root")
);

reportWebVitals();
