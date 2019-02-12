import React, { Component } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Cars from "./components/Cars";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Confirm from "./components/Confirm";
import Calendar from "./components/Calendar";
import Reports from "./components/Reports";
import { BrowserRouter, Route } from "react-router-dom";
import data from "./data.json";
import "typeface-roboto";

class App extends Component {
  state = {
    carData: null
  };

  selectCar = e => {
    const chosen = data.filter(ele => {
      return ele.car_no === e;
    });
    this.setState({ carData: chosen });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={Header} />
          <Route
            exact
            path="/cars"
            component={() => <Cars data={data} handler={this.selectCar} />}
          />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Footer} />
          <Route exact path="/" component={Confirm} />
          <Route exact path="/" component={Calendar} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
