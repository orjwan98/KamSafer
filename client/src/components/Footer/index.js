import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

const styles = {
  root: {
    borderTop: "4px solid #A11010",
    marginBottom: "1rem",
    boxShadow: "0.1rem 0.3rem 0.1rem #D3D9E9",
    borderRadius: "0rem"
  },
  childrenFont: {
    fontWeight: "bold"
  },
  position: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0rem"
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
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.position}>
            <Typography variant="subtitle1" className={classes.childrenFont}>
              {model_color}
            </Typography>
            <Typography variant="subtitle1" className={classes.childrenFont}>
              {car_no}
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
  return null;
};
export default withStyles(styles)(Footer);
