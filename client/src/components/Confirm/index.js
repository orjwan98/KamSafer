import React, { Component } from "react";
class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "car-card"
    };
  }

  render() {
    return (
      <div className="confirm">
        <h1> Hello World Confirm!</h1>
      </div>
    );
  }
}
export default Confirm;
