import React, { Component } from "react";
class Car  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 'car-card'
    };
  }


    render() {
      return (<div className="car">
      <h1> Hello World Car!</h1>
      </div>)
}
}
export default Car
