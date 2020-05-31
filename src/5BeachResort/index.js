import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";

import Home from "./Home";
import Rooms from "./Rooms";
import SingleRoom from "./SingleRoom";
import Error from "./Error";
import NavBar from "./NavBar";
import "./AppResort.css";

export default class index extends Component {
  render() {
    return (
      <>
        <NavBar />
        {/* Main Resort App */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}
