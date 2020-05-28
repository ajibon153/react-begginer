import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, handleClear, handleDelete, handleEdit } = this.props;

    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">Todo List</h3>
          {items.map((item) => (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          ))}
        </ul>
        <button
          type="button"
          onClick={handleClear}
          className="btn btn-block btn-danger mt-3 text-uppercase"
        >
          Clear
        </button>
      </div>
    );
  }
}
