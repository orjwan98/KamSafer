import React, { Component } from "react";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[900]
    },
    typography: {
      useNextVariants: true
    }
  }
});
const styles = themes => ({
  root: {
    borderLeft: "4px solid #A11010",
    height: "40rem",
    vw: "90%",
    marginTop: "10%",
    marginBottom: "10%",
    marginLeft: "5%",
    marginRight: "5%",
    flexDirection: "column"
  },
  button: {
    backgroundColor: red[900],
    margin: "4rem",
    color: grey[50],
    width: 150,
    height: 40,
    fontSize: 20
  },
  paragraph: {
    color: "#A11010",
    fontWeight: "bold",
    fontSize: "1.8rem"
  },
  warning: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginTop:"5px"
  },
  all: {
    fontWeight: "bold",
    fontSize: "12rem",
    flexDirection: "column"
  },
  pargh: {
    color: "black",
    fontWeight: "bold",
    fontSize: "1.8rem"
  },
  start: {
    fontWeight: "bold",
    margin: "0rem"
  },

  destination: {
    display: "flex",
    flexDirection: "row"
  },
  des1: {
    display: "flex",
    width: "50%"
  },
  des2: {
    display: "flex",
    width: "50%",
    marginTop: "-0.001rem"
  },
  footer: {
    fontWeight: "bold"
  }
});

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classes,
      purpose,
      start_km,
      end_km,
      total,
      driver_name,
      note,
      model_color,
      car_no,
      history
    } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Card className={classes.root}>
          <CardContent>
            <div className={classes.all}>
              <Typography
                color="primary"
                variant="subtitle1"
                className={classes.start}
              >
                Purpose <br />
                <span className={classes.pargh}>{purpose}</span>
              </Typography>
              <div className={classes.destination}>
                <div className={classes.des1}>
                  <Typography
                    color="primary"
                    variant="subtitle1"
                    className={classes.start}
                  >
                    Start <br />
                    <span className={classes.pargh}> {start_km}</span>
                  </Typography>
                </div>
                <div className={classes.des2}>
                  <Typography
                    color="primary"
                    variant="subtitle1"
                    className={classes.start}
                  >
                    End <br />
                    <span className={classes.pargh}>{end_km}</span>
                  </Typography>
                </div>
              </div>
              <Typography
                color="primary"
                variant="subtitle1"
                className={classes.start}
              >
                Total Trip
                <br />{" "}
                <span className={classes.pargh}>{end_km - start_km}</span>
              </Typography>
              <Typography
                color="primary"
                variant="subtitle1"
                className={classes.start}
              >
                Driver <br />
                <span className={classes.pargh}> {driver_name}</span>
              </Typography>
              <Typography
                color="primary"
                variant="subtitle1"
                className={classes.start}
              >
                Notes
                <br /> <span className={classes.pargh}>{note}</span>
              </Typography>
              <div className={classes.childern}>
                <Typography
                  color="primary"
                  variant="subtitle1"
                  className={classes.span1}
                >
                  <span className={classes.footer}> {model_color}</span>
                </Typography>
                <Typography
                  color="primary"
                  variant="subtitle1"
                  className={classes.span1}
                >
                  <span className={classes.footer}> {car_no}</span>
                </Typography>
              </div>
            </div>
            <Typography variant="subtitle1" className={classes.warning} >
              <span className={classes.paragraph}>WARNING:</span>You cannot edit
              this log once it's been saved!
            </Typography>
            <Button
              variant="contained"
              type="submit"
              onClick={() => this.props.submit(history)}
              className={classes.button}
            >
              Confirm
            </Button>
          </CardContent>
        </Card>
      </MuiThemeProvider>
    );
  }
}
Confirm.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Confirm);
