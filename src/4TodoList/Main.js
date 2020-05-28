import React, { Component } from "react";

import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";

export default class Main extends Component {
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
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      id: uuidv4(),
      item: "",
      editItem: false,
    });
  };
  handleClear = (e) => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (e) => {
    const filterItem = this.state.items.filter((item) => item.id !== e);
    this.setState({
      items: filterItem,
    });
  };
  handleEdit = (e) => {
    const filterItem = this.state.items.filter((item) => item.id !== e);
    const selectItem = this.state.items.find((item) => item.id === e);
    this.setState({
      item: selectItem.title,
      id: e,
      editItem: true,
      items: filterItem,
    });
  };

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto mt-5 col-md-8">
              <h3 className="text-capitalize text-center">Todo Input</h3>
            </div>
          </div>
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
          <TodoList
            items={this.state.items}
            handleClear={this.handleClear}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </div>
      </section>
    );
  }
}
