import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { Link } from "react-router-dom";

const styles = {
  root: {
    borderTop: "4px solid #A11010",
    display: "flex",
    width: "100%",
    height: "5%",
    justifyContent: "space-around",
    padding: "0rem"
  },
  childrenFont: {
    fontWeight: "bold",
    margin: "20px"
  }
};

const Footer = ({
  model_color,
  car_no,
  classes,
  history,
  carinfo,
  location,
  carsinfo
}) => {
  const { pathname } = location;
  if (pathname !== "/" && pathname !== "/login" && pathname !== "/cars") {
    console.log("rendering again");
    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" className={classes.childrenFont}>
          {model_color}
        </Typography>
        <Typography variant="subtitle1" className={classes.childrenFont}>
          {car_no}
        </Typography>
      </div>
    );
  }
  return null;
};
export default withStyles(styles)(Footer);
