import React, { Component } from "react";

import Booklist from "./1BookList/Booklist";
import Navbar from "./2CityTours/Navbar/Navbar";
import TourList from "./2CityTours/TourList/index";

import "@fortawesome/fontawesome-free/css/all.min.css";
import PersonList from "./3PesonList/PersonList";
import Form from "./3PesonList/Form";

import TodoList from "./4TodoList/TodoList";
import TodoInput from "./4TodoList/TodoInput";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <h1>Project ke 1</h1> */}
        {/* <Booklist /> */}
        {/* <h1>Project ke 2</h1> */}
        {/* <Navbar />
        <TourList /> */}
        {/* Project ke 3 */}
        {/* <PersonList /> */}
        {/* <Form />*/}
        {/* // 4 TodoList project   */}

        <div className="container">
          <div className="row">
            <div className="col-4 bg-warning">Home</div>
            <div className="col-4 bg-danger">About</div>
            <div className="col-4 bg-primary ">List</div>
          </div>
        </div>
        <TodoInput />
        <TodoList />
      </React.Fragment>
    );
  }
}
export default App;
