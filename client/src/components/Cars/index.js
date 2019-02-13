import React, { Component } from "react";
import Car from "../Car";

class Cars extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cars">
        {this.props.data.map(element => {
          return (
            <Car
              history={this.props.history}
              key={element.car_no}
              owner={element.owner}
              model={element.model}
              car_no={element.car_no}
              handler={this.props.handler}
            />
          );
        })}
      </div>
    );
  }
}
export default Cars;
