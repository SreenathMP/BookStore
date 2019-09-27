/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./Product.css";
import NavComp from "../Navigation/NavComp";
import { AddtoCart } from "../../actions";
import { connect } from "react-redux";


function mapDispatchToProps(dispatch) {
  return {
    addItems: item => dispatch(AddtoCart(item))
  };
}

class Product extends Component {
  state = {};

  UNSAFE_componentWillMount() {
    const {
      id,
      title,
      authors,
      price,
      language,
      reviews
    } = this.props.location.state;
    this.setState({
      bookID: id,
      title: title,
      authors: authors,
      price: price,
      language: language,
      reviews: reviews
    });
  }

  handleClick = ()=> {

    this.props.addItems(this.state);

    this.props.history.push(`/cart/`);
  }

  render() {
    return (
      <div>
        <NavComp />

        <div className="card">
          <div className="row no-gutters">
            <aside className="col-sm-5 border-right">
              <article className="gallery-wrap">
                <div className="img-big-wrap">
                  <div>
                    {" "}
                    <a href="" data-fancybox="">
                      <img src="/images/items/harry1.jpg" />
                    </a>
                  </div>
                </div>
              </article>
            </aside>
            <aside className="col-sm-7">
              <article className="p-5">
                <h3 className="title mb-3">{this.state.title}</h3>

                <div className="mb-3">
                  <var className="price h3 text-warning">
                    <span className="currency">US $</span>
                    <span className="num">{this.state.price}</span>
                  </var>
                </div>
                <dl>
                  <dt>Description</dt>
                  <dd>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis commodo odio aenean sed adipiscing diam donec
                      adipiscing. Duis ut diam quam nulla.{" "}
                    </p>
                  </dd>
                </dl>
                <dl className="row">
                  <dt className="col-sm-3">Author</dt>
                  <dd className="col-sm-9">{this.state.authors}1</dd>

                  <dt className="col-sm-3">Language</dt>
                  <dd className="col-sm-9">
                    {this.state.language === "eng" ||
                    this.state.language === "en-US"
                      ? "English"
                      : this.state.language}
                  </dd>
                </dl>
                <div className="rating-wrap">
                  <ul className="rating-stars">
                    <li style={{ width: "80%" }} className="stars-active">
                      <i className="fa fa-star" /> <i className="fa fa-star" />
                      <i className="fa fa-star" /> <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" /> <i className="fa fa-star" />
                      <i className="fa fa-star" /> <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <div className="label-rating">
                    {this.state.reviews} reviews
                  </div>
                </div>

                <div className="button-product">
                  <button className="btn  btn-outline-primary" id="btn-cart" onClick={this.handleClick}>
                    {" "}
                    <i className="fas fa-shopping-cart" /> Add to cart{" "}
                  </button>
                </div>
              </article>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Product);

