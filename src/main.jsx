import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./resources/theme.js";
import { AllDestinationsProvider } from "./providers/AllDestinationsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <AllDestinationsProvider>
        <App />
      </AllDestinationsProvider>
    </ChakraProvider>
  </BrowserRouter>
);
