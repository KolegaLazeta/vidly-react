import React, { Component } from "react";

class Logout extends Component {
  render() {
    return null;
  }
  componentDidMount() {
    localStorage.removeItem("token");
    window.location = "/";
  }
}

export default Logout;
