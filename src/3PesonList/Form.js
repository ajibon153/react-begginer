import React, { Component } from "react";
import "./Person.scss";

export default class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: [],
  };
  handleChange = (event) => {
    // console.log(event.target.value);
    // if (event.target.name === "firstname") {
    //   const textValue = event.target.value;
    //   this.setState({
    //     firstName: textValue,
    //   });
    // } else {
    //   const textValue = event.target.value;
    //   this.setState({
    //     lastName: textValue,
    //   });
    // }
    this.setState({
      [event.target.name]: [event.target.value],
    });
  };
  handleSubmit = (e) => {
    console.log("ee");

    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    if (firstName.length > 0 || lastName.length > 0) {
      const person = `${firstName} ${lastName}`;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: "",
      });
    }
  };
  handleSubmit2 = (ev) => {
    ev.preventDefault();
    console.log("eee");
    const name = this.refs.myName;
    const nameValue = name.value;

    const email = this.email.value;

    const text = this.refs.myText;
    const textValue = text.textContent;
    text.style.color = "red";
    console.log(email);
  };
  render() {
    return (
      <section>
        <article>
          <h2>Contoh form 1</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <button type="submit">submit</button>
          </form>
        </article>
        <article>
          <h3>Person</h3>
          <div>{this.state.people}</div>
        </article>

        <article>
          <h2>Contoh form 2</h2>
          <form onSubmit={this.handleSubmit2}>
            <input type="text" ref="myName" />
            <input type="email" ref={(orange) => (this.email = orange)} />
            <button type="submit">Submit</button>
            <p ref="myText">Hello World</p>
          </form>
        </article>
      </section>
    );
  }
}
