import React, { Component } from "react";

import Booklist from "./1BookList/Booklist";
import Navbar from "./2CityTours/Navbar/Navbar";
import TourList from "./2CityTours/TourList/index";

import "@fortawesome/fontawesome-free/css/all.min.css";
import PersonList from "./3PesonList/PersonList";
import Form from "./3PesonList/Form";

// other import in the file
import TodoList from "./4TodoList/Main";

import BeachResort from "./5BeachResort/index";

class App extends Component {
  render() {
    // console.log(this.state.items);

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
        {/* <TodoList /> */}

        {/* // 5 resort beach app */}
        <BeachResort />
      </React.Fragment>
    );
  }
}
export default App;
