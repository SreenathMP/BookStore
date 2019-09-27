import React, { Component } from "react";
class GetBooks extends Component {
  state = {};

  GetBooks = async () => {
    
    const response = await fetch(
      `https://bookstore-f21dc.firebaseio.com/books.json`
    );
    const data = await response.json();
    return data;
  };

  render() {
    return <div />;
  }
}

export default GetBooks;
