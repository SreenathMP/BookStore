/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Styles/NavigationBar.css";
import { Navbar, Nav } from "react-bootstrap";
import SearchForm from "./SearchForm";
import CartNav from "./CartNav";
class NavComp extends Component {
  state = {};

  render() {
    return (
      <Navbar expand="lg" id="flipkart-navbar">
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          Book Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <SearchForm />
          </Nav>
          <CartNav />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavComp;
