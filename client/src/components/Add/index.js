import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
    direction:'row',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  Purpose:{
    float:'left',
    direction:'row',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
    },
  },
  notchedOutline: {},
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});


class RadioButtonsGroup extends React.Component {
  state = {
    value: 'personal',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormControl flexDirection="row" component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className='Purpose'>Purpose</FormLabel>
          <RadioGroup
            aria-label="Purpose"
            name="Purpose"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}>
            <FormControlLabel
              value="Buisness"
              control={<Radio color="primary" />}
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
          <TextField id="text" type="text" value="Name"/>
          <InputLabel
          htmlFor="custom-css-standard-input"
          classes={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
          StartKM
        </InputLabel>
        <Input
          id="custom-css-standard-input"
          classes={{
            underline: classes.cssUnderline,
          }}
        />
        <InputLabel
        htmlFor="custom-css-standard-input"
        classes={{
          root: classes.cssLabel,
          focused: classes.cssFocused,
        }}
      >
        LastKM
      </InputLabel>
      <Input
        id="custom-css-standard-input"
        classes={{
          underline: classes.cssUnderline,
        }}
      />
      <InputLabel
      htmlFor="custom-css-standard-input"
      classes={{
        root: classes.cssLabel,
        focused: classes.cssFocused,
      }}
    >
      Total trip
    </InputLabel>
    <Input
      id="custom-css-standard-input"
      classes={{
        underline: classes.cssUnderline,
      }}
    />
    <InputLabel
    htmlFor="custom-css-standard-input"
    classes={{
      root: classes.cssLabel,
      focused: classes.cssFocused,
    }}
  >
    Driver Name
  </InputLabel>
  <Input
    id="custom-css-standard-input"
    classes={{
      underline: classes.cssUnderline,
    }}
  />
  <InputLabel
  htmlFor="custom-css-standard-input"
  classes={{
    root: classes.cssLabel,
    focused: classes.cssFocused,
  }}
>
  Note 
</InputLabel>
<Input
  id="custom-css-standard-input"
  classes={{
    underline: classes.cssUnderline,
  }}
/>
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
