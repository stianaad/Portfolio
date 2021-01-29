import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import { Box, Typography } from '@material-ui/core';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import ComputerIcon from '@material-ui/icons/Computer';
import FlightIcon from '@material-ui/icons/Flight';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const useStyles = makeStyles((theme) => ({
    interests: {
      paddingTop: "30px"
    },
    icon: {
      fontSize: "70px",
      marginRight: "20px"
    }
}));

export default function SimpleCollapse() {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item sm={2} />
      <Grid item sm={8} xs={12}>
        <Typography variant={"subtitle1"} component={'span'}>
        I’m a software developer in 4th grade computer technology at NTNU. I have gained much experience through 
        school and summer internships in both front-end and back-end technologies, and is therefore comfortable
         with developing full-stack. Previously, I have had two summer internships as developer at both Salt Ship 
         Design and Embicon. Through these jobs it was used modern technologies such as React.js, Vue, Python and 
         PHP to develop web applications. Currently I have three part-time jobs as a teaching assistant at 
         NTNU in programming in python. 
        </Typography>
        <Box className={classes.interests}/>
        <Typography variant="h6" component={'span'}>
          Interests
        </Typography>
        <br/>
        <SportsSoccerIcon fontSize={'large'} className={classes.icon}/>
        <ComputerIcon fontSize={'large'} className={classes.icon}/>
        <FlightIcon fontSize={'large'} className={classes.icon} />
        <DirectionsRunIcon fontSize={'large'} className={classes.icon}/>
        <MusicNoteIcon fontSize={'large'} className={classes.icon}/>
      </Grid>
    </Grid>
  );
}
