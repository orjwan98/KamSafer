import React, { Component } from "react";
import Add from "../Add";
import Show from "../Show";

class Reports extends Component {
  render() {
    return (
      <React.Fragment>
        <Add />
        <Show />
      </React.Fragment>
    );
  }
}

export default Reports;
