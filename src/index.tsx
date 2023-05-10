import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";
import { StepsStyleConfig } from "chakra-ui-steps";
import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { HeaderFormProvider } from "./contexts/HeaderFormContext";
import { App } from "./pages/App";
import reportWebVitals from "./reportWebVitals";

const theme = extendTheme(
  {
    styles: {
      global: (_props: any) => ({
        html: {
          height: "100%",
          minHeight: "100%",
        },
        body: {
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
        },
      }),
    },
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
      <HeaderFormProvider>
        <App />
      </HeaderFormProvider>
    </AuthProvider>
  </ChakraProvider>,
  document.getElementById("root")
);

reportWebVitals();
