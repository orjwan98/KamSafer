import React from "react";
import PropTypes from "prop-types";
import download from "downloadjs"
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import { getData } from "../../utils/getData";


const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    display: 'flex',
  flexWrap: 'wrap',
  },
  table: {
    minWidth: 700
  },
  button:{
   marginLeft:"300%",
   marginTop:"20px",
   backgroundColor:red[900],
 },
 title:{
   color:red[900]
 },
 head:{
   backgroundColor:red[200],
   color: theme.palette.common.red,
 },
 primary: { main: red[500] },
 formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    marginLeft:"20%"
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Reports extends React.Component {
  state = {
   month: new Date().getMonth() + 1,
   year:new Date().getFullYear(),
   labelWidth: 0,
   carLogs:null
 };

  componentDidMount() {
    this.getLogs();
  }
  handleChange = name => event => {
   this.setState({ [name]: event.target.value },()=>{
     this.getLogs();
   });
 };
 getLogs = () => {
   getData(`/logs/${this.state.year}/${this.state.month}`).then(carLogs => {
     this.setState({ carLogs });
   });
 };

  download=()=>{
    console.log('year',this.state.year,'month',this.state.month);
    fetch(`/logmonth/${this.state.year}/${this.state.month}`).then(response=>{
      return response.blob();
    }).then(blob=>{
      download(blob,"logs.xlsx")
    })
  }
  render() {
    const { classes } = this.props;
    const { carLogs } = this.state;
    return (
      <div>
      <h1 align="center" className={classes.title}>Vehicle Log Sheet</h1>

      <FormControl className={classes.formControl}>
          <InputLabel htmlFor="uncontrolled-native">Month</InputLabel>
          <NativeSelect defaultValue={this.state.month}
          input={<Input name="month"
          id="uncontrolled-native"
          onChange={this.handleChange('month')}
           />}>
            <option value="" />
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
          </NativeSelect>
          <FormHelperText>Select Date to see reports on it</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="uncontrolled-native">Year</InputLabel>
          <NativeSelect
            className={classes.selectEmpty}
            name="year"
            defaultValue={this.state.year}
            onChange={this.handleChange('year')}
          >
            <option value="" >
            </option>
            <option value={2019}>2019</option>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
            <option value={2023}>2023</option>
            <option value={2024}>2024</option>
            <option value={2025}>2025</option>
            <option value={2026}>2026</option>
            <option value={2027}>2027</option>
            <option value={2028}>2028</option>
            <option value={2029}>2029</option>
            <option value={2030}>2030</option>
          </NativeSelect>
        </FormControl>

      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead color="primary" className={classes.head}>
            <TableRow>
              <TableCell align="center">Date </TableCell>
              <TableCell align="right">Odometer Start</TableCell>
              <TableCell align="right">Odometer End</TableCell>
              <TableCell align="right">Trip Total (KM)</TableCell>
              <TableCell align="right">Driver</TableCell>
              <TableCell align="right">Purpose</TableCell>
              <TableCell align="right">Note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carLogs
              ? carLogs.length===0?(<h2 align="center">No Logs</h2>):( carLogs.map(row => (
                  <TableRow key={row.id}>
                    <TableCell align="center">{new Date(row.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell align="right">{row.start_km}</TableCell>
                    <TableCell align="right">{row.end_km}</TableCell>
                    <TableCell align="right">{row.end_km - row.start_km}</TableCell>
                    <TableCell align="right">{row.driver_name}</TableCell>
                    <TableCell align="right">{row.purpose}</TableCell>
                    <TableCell align="right">{row.note}</TableCell>
                  </TableRow>
                )))
              : "Loading..."}
          <Button variant="contained" color="primary" onClick={this.download} className={classes.button}> Download </Button>
          </TableBody>
        </Table>
      </Paper>
  </div>  );
  }
}

Reports.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Reports);
