import React, { Component } from "react";
import { FormControl, Form, Button } from "react-bootstrap";

class SearchForm extends Component {
  state = { search: "" };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          style={{ width: "500px" }}
          onChange={this.handleChange}
        />
        <Button
          variant="primary"
          style={{ height: "38px" }}
          onClick={this.handleClick}
        >
          Search
        </Button>
      </Form>
    );
  }
}

export default SearchForm;
