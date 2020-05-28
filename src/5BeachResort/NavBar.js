import React, { Component } from "react";
import logo from "./images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = {
    isOpen: false,
  };
  handleToogle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <nav>
        <div className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <img src={logo} alt="Beach Resort Logo" />
              </Link>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToogle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li style={{ display: "block" }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ display: "block" }}>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
