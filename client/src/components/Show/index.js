import React, { Component } from "react";
class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "car-card"
    };
  }

  render() {
    return (
      <div className="show">
        <h1> Hello World show!</h1>
      </div>
    );
  }
}
export default Show;
