import React, { Component } from "react";
import Car from "../Car";

class Cars extends Component {
  componentDidMount() {
   this.props.getcars();
 }
  render() {
    const { data } = this.props;
    return (
      <div className="cars">

        {data?data.map(element => (
            <Car
              history={this.props.history}
              key={element.id}
              car_id={element.id}
              owner={element.owner}
              model={element.model}
              car_no={element.car_no}
              handler={this.props.handler}
            />

        )): "Loading..."}
      </div>
    );
  }
}
export default Cars;
