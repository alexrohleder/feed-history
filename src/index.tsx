import React from "react";
import ReactDOM from "react-dom";
import "reset-css";
import App from "./App";
import "./index.scss";

console.log("version", process.env.REACT_APP_GIT_VERSION);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
