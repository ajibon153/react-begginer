import React, { Component } from "react";

import Booklist from "./1BookList/Booklist";
import Navbar from "./2CityTours/Navbar/Navbar";
import TourList from "./2CityTours/TourList/index";

import "@fortawesome/fontawesome-free/css/all.min.css";
import PersonList from "./3PesonList/PersonList";
import Form from "./3PesonList/Form";

import TodoList from "./4TodoList/TodoList";
import TodoInput from "./4TodoList/TodoInput";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "Wake up" },
      { id: 2, title: "Make up" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log("change");
  };
  handleSubmit = (e) => {
    console.log("submit");
  };
  handleClear = (e) => {
    console.log("clear");
  };
  handleDelete = (e) => {
    console.log("delete");
  };
  handleEdit = (e) => {
    console.log("edit");
  };

  render() {
    console.log(this.state);

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
            <div className="col-10 mx-auto mt-5 col-md-8">
              <h3 className="text-capitalize text-center">Todo Input</h3>
            </div>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
          </div>
        </div>
        <TodoList
          item={this.state.items}
          handleClear={this.handleClear}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </React.Fragment>
    );
  }
}
export default App;
