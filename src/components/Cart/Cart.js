/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Cart.css";
import NavComp from "../Navigation/NavComp";
import { connect } from "react-redux";
import CartProductList from "./CartProductList";
import PriceDetails from "./PriceDetails";
import CartEmpty from "./CartEmpty";


function mapStateToProps(state) {
  return {
    cart: state.CartItem.CartItems
  };
}

class Cart extends Component {
  render() {
    return (
      <div>
        <NavComp />

        {this.props.cart.length > 0 ? (
          <div className="px-4 px-lg-0">
            <div className="pb-5 py-5">
              <div className="container">
                <div className="row">
                  <CartProductList />
                </div>
                <PriceDetails />
              </div>
            </div>
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Cart);
