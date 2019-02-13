import React, { Component } from "react";
class Cars  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 'car-card'
    };
  }


    render() {
      return (<div className="cars">
      <h1> Hello World Cars!</h1>
      </div>)
}
}
export default Cars
