import React, { Component } from "react";
import KS_logo from "./KS_logo.png";
import Mercy from "./Mercy .png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
const styles = {
  button: {
    backgroundColor: "red"
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      failed: false
    };
  }
  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { history } = this.props;
    const username = this.state.username;
    const password = this.state.password;
    event.preventDefault();
    const data = JSON.stringify({ username, password });
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (result.logged) {
          history.push("/cars");
        } else {
          this.setState({
            failed: true
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="header">
        <div>
          <img className="logo" alt="logo" src={KS_logo} />
        </div>
        <div className="title">KamSafer </div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <TextField
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Password:
              <TextField
                type="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
            {this.state.failed && <span>Username or Password incorrect</span>}
            <Button
              onClick={this.handleSubmit}
              variant="contained"
              className={classes.button}
            >
              Log in
            </Button>
          </form>
        </div>
        <div>
          <img className="logos" alt="logo" src={Mercy} />
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Login);
