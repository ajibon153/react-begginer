import App from "./App";
import React from "react";
import ReactDom from "react-dom";
import "./index.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Greeting() {
  return <h3>Udemy Part 2 Johnson</h3>;
}

ReactDom.render(<App />, document.getElementById("root"));

// export
