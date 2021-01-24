import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#50A18A",
    width: '100%',
    height: '50vh'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
      <Paper elevation={3} className={classes.paper}>
        HEI
      </Paper>
  )}