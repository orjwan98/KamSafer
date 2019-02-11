import React, { Component } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Cars from "./components/Cars";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Add from "./components/Add";
import Confirm from "./components/Confirm";
import Show from "./components/Show";
import Calendar from "./components/Calendar";
import { BrowserRouter, Route } from "react-router-dom";
import "typeface-roboto";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={Header} />
          <Route exact path="/cars" component={Cars} />
          <Route exact path="/" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Footer} />
          <Route exact path="/" component={Add} />
          <Route exact path="/" component={Confirm} />
          <Route exact path="/" component={Show} />
          <Route exact path="/" component={Calendar} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
