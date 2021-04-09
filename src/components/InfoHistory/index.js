import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  name,
  pulseRate,
  bloodPressure,
  Weight,
  Temperature,
  respiratoryRate
) {
  return {
    name,
    pulseRate,
    bloodPressure,
    Weight,
    Temperature,
    respiratoryRate,
  };
}

const rows = [
  createData("4/7/2021", 159, 6.0, 24, 4.0),
  createData("3/25/2021", 237, 9.0, 37, 4.3),
  createData("3/14/2021", 262, 16.0, 24, 6.0),
  createData("2/26/2021", 305, 3.7, 67, 4.3),
  createData("2/4/2021", 356, 16.0, 49, 3.9),
];

const InfoHistory = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Pulse rate</TableCell>
            <TableCell align="right">Blood Pressure</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Temperature</TableCell>
            <TableCell align="right">Respiratory Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.pulseRate}</TableCell>
              <TableCell align="right">{row.bloodPressure}</TableCell>
              <TableCell align="right">{row.Weight}</TableCell>
              <TableCell align="right">{row.Temperature}</TableCell>
              <TableCell align="right">{row.respiratoryRate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default InfoHistory;
