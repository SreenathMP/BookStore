/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./Styles/Product.css";
class Product extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="row no-gutters">  
          <aside className="col-sm-5 border-right">
            <article className="gallery-wrap">
              <div className="img-big-wrap">
                <div>
                  {" "}
                  <a href="images/items/1.jpg" data-fancybox="">
                    <img src="images/items/1.jpg" />
                  </a>
                </div>
              </div>
              <div className="img-small-wrap">
                <div className="item-gallery">
                  {" "}
                  <img src="images/items/1.jpg" />
                </div>
                <div className="item-gallery">
                  {" "}
                  <img src="images/items/2.jpg" />
                </div>
                <div className="item-gallery">
                  {" "}
                  <img src="images/items/3.jpg" />
                </div>
                <div className="item-gallery">
                  {" "}
                  <img src="images/items/4.jpg" />
                </div>
              </div>
            </article>
          </aside>
          <aside className="col-sm-7">
            <article className="p-5">
              <h3 className="title mb-3">
                Original Version of Some product name
              </h3>

              <div className="mb-3">
                <var className="price h3 text-warning">
                  <span className="currency">US $</span>
                  <span className="num">1299</span>
                </var>
                <span>/per kg</span>
              </div>
              <dl>
                <dt>Description</dt>
                <dd>
                  <p>
                    Here goes description consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
                  </p>
                </dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-3">Model#</dt>
                <dd className="col-sm-9">12345611</dd>

                <dt className="col-sm-3">Color</dt>
                <dd className="col-sm-9">Black and white </dd>

                <dt className="col-sm-3">Delivery</dt>
                <dd className="col-sm-9">Russia, USA, and Europe </dd>
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
                <div className="label-rating">132 reviews</div>
                <div className="label-rating">154 orders </div>
              </div>

              <div className="row">
                <div className="col-sm-5">
                  <dl className="dlist-inline">
                    <dt>Quantity: </dt>
                    <dd>
                      <select
                        className="form-control form-control-sm"
                        style={{ width: "70px" }}
                      >
                        <option> 1 </option>
                        <option> 2 </option>
                        <option> 3 </option>
                      </select>
                    </dd>
                  </dl>
                </div>
                <div className="col-sm-7">
                  <dl className="dlist-inline">
                    <dt>Size: </dt>
                    <dd>
                      <label className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <span className="form-check-label">SM</span>
                      </label>
                      <label className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <span className="form-check-label">MD</span>
                      </label>
                      <label className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <span className="form-check-label">XXL</span>
                      </label>
                    </dd>
                  </dl>
                </div>
              </div>

              <a href="#" className="btn  btn-primary">
                {" "}
                Buy now{" "}
              </a>
              <a href="#" className="btn  btn-outline-primary">
                {" "}
                <i className="fas fa-shopping-cart" /> Add to cart{" "}
              </a>
            </article>
          </aside>
        </div>
      </div>
    );
  }
}

export default Product;
