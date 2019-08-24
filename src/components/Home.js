import React, { Component } from "react";
import BookItems from "./Books/BookItems";
import NavComp from "./Navigation/NavComp";


class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavComp />
        <BookItems />
      </div>
    );
  }
}

export default Home;
