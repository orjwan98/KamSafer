import React, { Component } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Cars from "./components/Cars";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Confirm from "./components/Confirm";
import Calendar from "./components/Calendar";
import Reports from "./components/Reports";
import Add from "./components/Add";

import { BrowserRouter, Route } from "react-router-dom";
import data from "./data.json";
import "typeface-roboto";

class App extends Component {
  state = {
    carData: null,
    purpose: null,
    driver: null,
    startKM: null,
    endKM: null,
    total: null,
    notes: null
  };

  handleChange = name => event => {
    console.log(event.target.value);
    this.setState({ [name]: event.target.value });
    //console.log(this.state);
  };

  selectCar = (e, history) => {
    const chosen = data.filter(ele => {
      return ele.car_no === e;
    });
    this.setState({ carData: chosen }, () => {
      history.push("/reports");
    });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/header" component={Header} />
          <Route
            exact
            path="/cars"
            component={props => (
              <Cars {...props} data={data} handler={this.selectCar} />
            )}
          />
          <Route exact path="/home" component={Reports} />
          <Route exact path="/" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Footer} />
          <Route exact path="/" component={Confirm} />
          <Route exact path="/" component={Calendar} />
          <Route
            exact
            path="/add"
            component={() => (
              <Add
                endKM={this.state.endKM}
                startKM={this.state.startKM}
                total={this.state.total}
                driver={this.state.driver}
                notes={this.state.notes}
                handleChange={this.handleChange}
              />
            )}
          />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
