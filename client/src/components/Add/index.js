import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import green from "@material-ui/core/colors/green";

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  formControl: {
    margin: theme.spacing.unit * 3,
    direction: "row"
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: "row"
  },
  startEnd: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "10px"
  },

  Purpose: {
    float: "left",
    direction: "row"
  },
  margin: {
    margin: theme.spacing.unit
  },
  narrow: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 100
  },
  normal: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: "personal"
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormControl
          flexDirection="row"
          component="fieldset"
          className={classes.formControl}
        >
          <FormLabel component="legend" className="Purpose">
            Purpose
          </FormLabel>
          <RadioGroup
            aria-label="Purpose"
            name="purpose"
            className={classes.group}
            value={this.state.value}
          >
            <FormControlLabel
              value="Buisness"
              control={
                <Radio color="primary" onChange={this.props.handleChange} />
              }
              label="Buisness"
              labelPlacement="start"
            />
            <FormControlLabel
              value="Personal"
              control={<Radio color="primary" />}
              label="Personal"
              labelPlacement="start"
            />
          </RadioGroup>
          <div className={classes.startEnd}>
            <TextField
              className={classes.narrow}
              id="text1"
              autoFocus={true}
              type="text"
              name="startKM"
              label="Start KM"
              margin="normal"
              color="secondary"
              value={this.props.startKM}
              onChange={this.props.handleChange("startKM")}
            />

            <TextField
              className={classes.narrow}
              id="text2"
              autoFocus={true}
              type="text"
              name="endKM"
              label="End Km"
              margin="normal"
              value={this.props.endKM}
              onChange={this.props.handleChange("endKM")}
            />
          </div>
          <TextField
            className={classes.normal}
            id="text3"
            autoFocus={true}
            name="total"
            type="text"
            label="Total"
            value={this.props.total}
            onChange={this.props.handleChange("total")}
          />
          <TextField
            className={classes.normal}
            id="text4"
            autoFocus={true}
            type="text"
            label="Driver"
            name="driver"
            value={this.props.driver}
            onChange={this.props.handleChange("driver")}
          />
          <TextField
            className={classes.normal}
            id="text5"
            autoFocus={true}
            type="text"
            label="Note"
            name="notes"
            value={this.props.notes}
            onChange={this.props.handleChange("notes")}
          />
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioButtonsGroup);
