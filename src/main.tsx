import { AuthUserProvider } from "./providers/userContext";
import { AuthCartProvider } from "./providers/cartContext";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/theme";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <AuthUserProvider>
          <App />
        </AuthUserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
