import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
// styles
import "./styles/index.scss";
// components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
