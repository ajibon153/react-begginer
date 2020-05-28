import React, { Component } from "react";
import Book from "./Book";
import Data from "./Data";
import "./Book.css";

export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: Data,
    };
  }
  //   handleDelete() {
  //     console.log(" I'm from parent component ");
  //   }
  handleDelete = (id) => {
    const sortedBooks = this.state.books.filter((item) => item.id !== id);
    this.setState({
      books: sortedBooks,
    });
  };

  render() {
    return (
      <section>
        <h3 onClick={this.handleDelete}>This is our Booklist</h3>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item} handleDelete={this.handleDelete} />
        ))}
      </section>
    );
  }
}
