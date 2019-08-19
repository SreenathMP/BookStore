/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import ItemCounter from "./ItemCounter";
import { DeleteCartItem } from "../../actions";

function mapStateToProps(state) {
  return {
    cart: state.CartItem.CartItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    delItems: item => dispatch(DeleteCartItem(item))
  };
}
class CartProductList extends Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  state = {};

  handleDelete = e => {
    const index = e.target.getAttribute("data-index");

    this.props.delItems(parseInt(index));
  };

  render() {
    return (
      <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
        <h3>My Cart</h3>
        <div className="table-responsive">
          <table className="table">
            <thead />
            <thead>
              <tr>
                <th scope="col" className="border-0 bg-light">
                  <div className="p-2 px-3 text-uppercase">Product</div>
                </th>
                <th scope="col" className="border-0 bg-light">
                  <div className="py-2 text-uppercase">Price</div>
                </th>
                <th scope="col" className="border-0 bg-light">
                  <div className="py-2 text-uppercase">Quantity</div>
                </th>
                <th scope="col" className="border-0 bg-light">
                  <div className="py-2 text-uppercase">Remove</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((item, index) => (
                <tr key={index}>
                  <th scope="row" className="border-0">
                    <div className="p-2">
                      <img
                        src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg"
                        alt=""
                        width="70"
                        className="img-fluid rounded shadow-sm"
                      />
                      <div className="ml-3 d-inline-block align-middle">
                        <h6 className="mb-0">
                          {" "}
                          <a
                            href="#"
                            className="text-dark d-inline-block align-middle"
                          >
                            {item.title}
                          </a>
                        </h6>

                        <span className="text-muted font-weight-normal font-italic d-block">
                          Author: {item.authors}
                        </span>
                      </div>
                    </div>
                  </th>
                  <td className="border-0 align-middle">
                    <strong>${item.price}</strong>
                  </td>
                  <td className="border-0 align-middle">
                    <ItemCounter />
                  </td>

                  <td className="border-0 align-middle">
                    <a href className="text-dark">
                      <i
                        className="fa fa-trash"
                        data-index={item.bookID}
                        onClick={this.handleDelete}
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartProductList);
