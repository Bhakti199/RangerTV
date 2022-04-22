import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider, MainContextProvider } from "./Context/Index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <MainContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MainContextProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
