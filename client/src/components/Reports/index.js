import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class Reports extends React.Component {
  componentDidMount() {
    this.props.getLogs();
  }
  render() {
    const { classes } = this.props;
    const { data } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>start_km</TableCell>
              <TableCell align="right">end_km</TableCell>
              <TableCell align="right">total</TableCell>
              <TableCell align="right">driver</TableCell>
              <TableCell align="right">note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ? data.map(row => (
                  <TableRow key={row.id}>
                    <TableCell align="right">{row.start_km}</TableCell>
                    <TableCell align="right">{row.end_km}</TableCell>
                    <TableCell align="right">{row.total}</TableCell>
                    <TableCell align="right">{row.driver}</TableCell>
                    <TableCell align="right">{row.note}</TableCell>
                  </TableRow>
                ))
              : "Loading..."}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

Reports.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Reports);
