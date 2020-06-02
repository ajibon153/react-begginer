import React, { Component } from "react";
// import Button from "./Button";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showInfo: false,
    };
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  lowerCount = () => {
    if (this.state.count === 0) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { id, img, title, author, harga } = this.props.info;
    const { handleDelete } = this.props;
    const checkInfo = (info) => {
      if (info !== false) {
        return (
          <p>
            React was released by Facebook's web development team in 2013 as a
            view library. React is one of the best choices for building modern
            web applications. React has a slim API, a robust and evolving
            ecosystem and a great community.
          </p>
        );
      } else {
        return null;
      }
    };

    return (
      <article className="book">
        <img src={img} width="150" alt="book"></img>
        <div>
          <h3 onClick={this.tes}>Title : {title}</h3>
          <h5>Author : {author}</h5>
          <h5>{harga}</h5>
          <h6>Beli : {this.state.count}</h6>
          <div style={{ margin: "5px" }}>
            <button type="button" onClick={this.addCount}>
              Add Count
            </button>
            <button type="button" onClick={this.lowerCount}>
              Lower Count
            </button>
            <button type="button" onClick={this.resetCount}>
              Reset Count
            </button>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete Me
            </button>
            <button type="button" onClick={this.handleInfo}>
              Toggle Info
            </button>
            {checkInfo(this.state.showInfo)}
            {/* {this.state.showInfo && (
              <p>
                React was released by Facebook's web development team in 2013 as
                a view library. React is one of the best choices for building
                modern web applications. React has a slim API, a robust and
                evolving ecosystem and a great community. In this course we will
              </p>
            )} */}
          </div>
        </div>
      </article>
    );
  }
}
