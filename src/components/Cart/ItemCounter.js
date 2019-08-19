import React, { Component } from "react";
import "./Styles/Counter.css";

class ItemCounter extends Component {
  state = {};

  
  render() {
    return (
      <div className="quantity buttons_added">
        <input type="button" value="-" className="minus" />
        <input
          type="number"
          step="1"
          min="1"
          max="1"
          name="quantity"
          value="1"
          title="Qty"
          className="input-text qty text"
          size="4"
          pattern=""
          inputMode=""
          onChange={this.handleChange}
        />
        <input type="button" value="+" className="plus" />
      </div>
    );
  }
}

export default ItemCounter;
