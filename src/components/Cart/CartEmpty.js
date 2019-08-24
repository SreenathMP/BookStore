import React, { Component } from "react";
import {  withRouter } from "react-router-dom";

class CartEmpty extends Component {
  state = {};

  handleClick = ()=>{

    this.props.history.push(`/`);
  }

  render() {
    return (
      <div className="pb-5 py-5 bg-white rounded shadow-sm">
        <div className="row  justify-content-center">
          <h5>Cart is empty</h5>
        </div>
        <div className="row  justify-content-center" style={{ margin: "1rem" }}>
          <button
            className="btn  btn-outline-primary"
            id="btn-cart"
            onClick={this.handleClick}
          >
            ADD ITEMS
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(CartEmpty);
