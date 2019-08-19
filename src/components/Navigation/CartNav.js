/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Styles/NavigationBar.css";
import { useSelector } from "react-redux";

function CartNav() {
  const cartItems = useSelector(state => state.CartItem.CartItems);

  return (
    <div className="cart largenav col-sm-2">
      <a className="cart-button">
        <svg
          className="cart-svg "
          width="16 "
          height="16 "
          viewBox="0 0 16 16 "
        >
          <path
            d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 "
            fill="#fff "
          />
        </svg>{" "}
        Cart
        <span className="item-number ">{cartItems.length}</span>
      </a>
    </div>
  );
}

export default CartNav;
