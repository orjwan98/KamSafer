import React from "react";
import Plus from "./Plus.png";
import Show from "./Show.png";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  icon: {
    width: "100px",
    height: "100px",
    alignSelf: "center"
  },
  text: {
    fontSize: "20px",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "10px"
  },
  button: {
    width: "70%",
    margin: "7.5% 15% 7.5% 15%",
    height: "30vh",
    backgroundColor: "#A11010"
  },

  container: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center"
  }
});

const Home = ({ classes, history }) => {
  return (
    <React.Fragment>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => history.push("/add")}
      >
        <div className={classes.container}>
          <img alt="logo" src={Plus} className={classes.icon} />
          <span className={classes.text}>Add Trip</span>
        </div>
      </Button>

      <Button
        variant="contained"
        className={classes.button}
        onClick={() => history.push("/reports")}
      >
        <div className={classes.container}>
          <img alt="logo" src={Show} className={classes.icon} />
          <span className={classes.text}>Show Reports</span>
        </div>
      </Button>
    </React.Fragment>
  );
};
Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
