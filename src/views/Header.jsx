import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CustomizedButton from '../components/CustomizedButton'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import Portrait from '../assets/bildeAvStian.jpg'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import CV from '../assets/CV.pdf'


const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#50A18A",
    width: '100%',
    height: '30vh',
    borderRadius: "0%",
    borderBottom: "2px solid black"
  },
  picture: {
    width: "15vh",
    height: "20vh",
    marginLeft: "2vh",
    borderRadius: "50%"
  },
  typography: {
    color: "white",
  },
  gridTypograpyh: {
    marginTop: "7vh"
  }
}));

export default function Header() {
  const classes = useStyles();

  const openWebsite = (website) => {
    window.open(website)
  }

  return (
      <Paper elevation={3} className={classes.paper}>
        <Grid container >
          <Grid item xs={12}>
            <CustomizedButton name="LINKEDIN" icon={LinkedInIcon} onClick={() => openWebsite("https://www.linkedin.com/in/stianaad/")}/>
            <CustomizedButton name="GITHUB" icon={GitHubIcon} onClick={() => openWebsite("https://github.com/stianaad")}/>
            <CustomizedButton name="CV" icon={DescriptionIcon} onClick={() => openWebsite(CV)}/>
          </Grid>
          <Grid item xs={4}>
            <Avatar alt="Picture of Stian" src={Portrait} className={classes.picture}/>
          </Grid>
          <Grid item xs={8} className={classes.gridTypograpyh}>
            <Typography variant="h4" className={classes.typography}>Stian Ådnanes</Typography>
            <Box borderTop='2px solid #A15067' marginTop='-2px' width='25vh'></Box>
            <Box borderTop='1px solid #A15067' marginTop='2px' marginBottom="2vh" width='25vh'></Box>
            <Typography variant="h6" className={classes.typography}>Currently studing software development at NTNU</Typography>
            <Typography variant="h6" className={classes.typography}>Full-stack developer</Typography>
          </Grid>
        </Grid>
      </Paper>
  )
}