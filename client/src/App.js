import React, { Component } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Car from "./components/Car";
import Cars from "./components/Cars";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Add from "./components/Add";
import Confirm from "./components/Confirm";
import Show from "./components/Show";
import Calendar from "./components/Calendar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Login />
        <Header />
        <Car />
        <Cars />
        <Home />
        <Footer />
        <Add />
        <Confirm />
        <Show />
        <Calendar />
      </React.Fragment>
    );
  }
}

export default App;
