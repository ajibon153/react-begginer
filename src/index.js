import App from "./App";
import React from "react";
import ReactDom from "react-dom";

import "./index.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

//5 Beach resort
import { BrowserRouter as Router } from "react-router-dom";

function Greeting() {
  return <h3>Udemy Part 2 Johnson</h3>;
}

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// export
