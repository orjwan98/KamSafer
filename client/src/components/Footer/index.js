import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "car-card"
    };
  }
  render() {
    return (
      <div className="car">
        <h1> Hello World! Footer</h1>
      </div>
    );
  }
}
export default Footer;
