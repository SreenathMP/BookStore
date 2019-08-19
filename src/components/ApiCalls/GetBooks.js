import React, { Component } from "react";
class GetBooks extends Component {
  state = {};

  GetBooks = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/books`
    );
    const data = await response.json();
    return data;
  };

  render() {
    return <div />;
  }
}

export default GetBooks;
