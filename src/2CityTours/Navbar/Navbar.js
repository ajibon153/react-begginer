import React from "react";
import logo from "../../logo.svg";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours project" />
      <ul className="nav-ul">
        <li className="nav-links">
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li className="nav-links">
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li className="nav-links">
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
