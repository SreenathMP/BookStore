import React, { Component } from "react";
import { connect } from "react-redux";
import "./Styles/Counter.css";
import { AddQuantity, SubQuantity, UpdateQuantity } from "../../actions";

function mapDispatchToProps(dispatch) {
  return {
    addQuantity: id => dispatch(AddQuantity(id)),
    subQuantity: id => dispatch(SubQuantity(id)),
    UpQuantity: (id, count) => dispatch(UpdateQuantity(id, count))
  };
}

class ItemCounter extends Component {
  constructor() {
    super();

    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleSubtractQuantity = this.handleSubtractQuantity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddQuantity = e => {
    const id = e.target.getAttribute("id");
    const index = parseInt(id);
    this.props.addQuantity(index);
    this.props.handlestate();
  };

  handleSubtractQuantity = e => {
    const id = e.target.getAttribute("id");
    const index = parseInt(id);
    this.props.subQuantity(index);
    this.props.handlestate();
  };

  handleChange = e => {
    if (e.target.value !== "0") {
      this.setState({
        quantity: e.target.value
      });
    }
  };

  setQuantity = e => {
    if (e.target.value.length > 0) {
      const quantity = this.state.quantity;
      const id = e.target.getAttribute("id");
      const index = parseInt(id);
      this.props.UpQuantity(index, parseInt(quantity));
    } else {
      this.setState({
        quantity: this.props.quantity
      });
    }
  };

  componentWillMount() {
    this.setState({
      quantity: this.props.quantity
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.quantity !== this.props.quantity) {
      this.setState({
        quantity: this.props.quantity
      });
    }
  }

  maxLengthCheck = object => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength
      );
    }
    if (object.target.value === "0") {
      object.target.value = object.target.value.slice(0);
    }
  };

  render() {
    return (
      <div className="quantity buttons_added">
        <input
          type="button"
          value="-"
          className="minus"
          id={this.props.id}
          onClick={this.handleSubtractQuantity}
        />
        <input
          id={this.props.id}
          type="number"
          step="1"
          min="1"
          max="1"
          maxLength="1"
          pattern="/^-?\d+\.?\d*$/"
          name="quantity"
          value={this.state.quantity}
          title="Qty"
          className="input-text qty text"
          size="4"
          inputMode=""
          onInput={this.maxLengthCheck}
          onChange={this.handleChange}
          onBlur={this.setQuantity}
        />
        <input
          type="button"
          value="+"
          className="plus"
          id={this.props.id}
          onClick={this.handleAddQuantity}
        />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ItemCounter);
