/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class PriceDetails extends Component {
  state = {};
  render() {
    return (
      <div className="row py-5 p-4 bg-white rounded shadow-sm">
        <div className="col-lg-6" style={{ float: "none", margin: "auto" }}>
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
            Order summary{" "}
          </div>
          <div className="p-4">
            <p className="font-italic mb-4">
              Shipping and additional costs are calculated based on values you
              have entered.
            </p>
            <ul className="list-unstyled mb-4">
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Order Subtotal </strong>
                <strong>${1000}</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Shipping and handling</strong>
                <strong>${10}</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Tax</strong>
                <strong>${0}</strong>
              </li>
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Total</strong>
                <h5 className="font-weight-bold">${1000}</h5>
              </li>
            </ul>
            <a href="#" className="btn btn-dark rounded-pill py-2 btn-block">
              Proceed to checkout
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceDetails;
