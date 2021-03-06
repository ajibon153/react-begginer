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
          {/* <div className="nav-center"> */}
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort Logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToogle}
              style={{
                position: "absolute",
                right: "10px",
              }}
            >
              <FaAlignRight className="nav-icon" />
            </button>
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
        </div>
        {/* </div> */}
      </nav>
    );
  }
}
