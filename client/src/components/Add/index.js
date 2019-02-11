import React, { Component } from "react";
class Add  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 'car-card'
    };
  }


    render() {
      return (<div className="add">
      <h1> Hello World Add!</h1>
      </div>)
}
}
export default Add
