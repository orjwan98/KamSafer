import React, { Component } from "react";
import Car from "../Car";
import data from "../../data.json";
class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    return (
      <div className="cars">
        {this.state.data.map(element => {
          return (
            <Car
              owner={element.owner}
              model={element.model}
              car_no={element.car_no}
            />
          );
        })}
      </div>
    );
  }
}
export default Cars;
