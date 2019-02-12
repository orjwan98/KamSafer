import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    borderLeft: "4px solid #A11010",
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

const Car = ({ owner, model, car_no, classes }) => {
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6">{owner}'s Car</Typography>
        <div className={classes.position}>
          <Typography variant="subtitle1" className={classes.childrenFont}>
            {model}
          </Typography>
          <Typography variant="subtitle1" className={classes.childrenFont}>
            {car_no}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
export default withStyles(styles)(Car);
