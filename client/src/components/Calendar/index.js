import React, { Component } from "react";
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "car-card"
    };
  }

  render() {
    return (
      <div className="calendar">
        <h1> Hello World Calendar!</h1>
      </div>
    );
  }
}
export default Calendar;
