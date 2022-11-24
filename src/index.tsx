import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig } from "chakra-ui-steps";

import { withProse } from "@nikolovlazar/chakra-ui-prose";

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
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
