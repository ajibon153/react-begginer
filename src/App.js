import React, { Component } from "react";
import Booklist from "./BookList/Booklist";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Booklist from "./CityTours/Citytours";
import Navbar from "./CityTours/Navbar/Navbar";
import TourList from "./CityTours/TourList/index";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <h1>Project ke 1</h1> */}
        {/* <Booklist /> */}
        {/* <h1>Project ke 2</h1> */}
        <Navbar />
        <TourList />
      </React.Fragment>
    );
  }
}
export default App;
