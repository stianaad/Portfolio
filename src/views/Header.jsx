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

const minDesktopSize = 490
const mobileScreen = 380

const useStyles = makeStyles((theme) => ({
  paper: {
    //backgroundColor: "#50A18A",
    background: 'linear-gradient(120deg, #50A18A 30%, #1D7F9D 90%)',
    width: '100%',
    height: '35vh',
    borderRadius: "0%",
    borderBottom: "2px solid black",
    [theme.breakpoints.down('xs')]: {
      height: '45vh'
    },
    [theme.breakpoints.down(minDesktopSize)]: {
      height: '50vh'
    },
    [theme.breakpoints.down(mobileScreen)]: {
      height: '60vh'
    }
  },
  picture: {
    width: "20vh",
    height: "25vh",
    margin: "auto",
    borderRadius: "50%"
  },
  typography: {
    color: "white",
  },
  gridTypograpyh: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      marginTop: "0vh",
      textAlign: "center"
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: "7vh"
    },
  },
  box: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  buttons: {
    [theme.breakpoints.down('xs')]: {
      backgroundColor: "black"
    }
  }
}));

export default function Header() {
  const classes = useStyles();
  //const [heightWindow, setHeightWindow] = useState(300)

  const openWebsite = (website) => {
    window.open(website)
  }

  /*const handleWindowResize = useCallback(event => {
    let height = document.getElementById('subtext').getBoundingClientRect().top;
    const picture = document.getElementById('picture').getBoundingClientRect();
    const pictureHeight = picture.height + picture.top
    if(pictureHeight > height) {
      height = pictureHeight
    }
    document.body.style.height = height
    setHeightWindow(height);
}, []); 


useEffect(() => {
  window.addEventListener('resize', handleWindowResize);
  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
}, [handleWindowResize]);

  useEffect(() => {
    handleWindowResize() style={{height: (heightWindow+60).toString()+"px"}}
  }, [])*/

  return (
      <Paper elevation={3} className={classes.paper} >
        <Grid container>
          <Grid item xs={12}>
            <CustomizedButton name="LINKEDIN" icon={LinkedInIcon} onClick={() => openWebsite("https://www.linkedin.com/in/stianaad/")}/>
            <CustomizedButton name="GITHUB" icon={GitHubIcon} onClick={() => openWebsite("https://github.com/stianaad")}/>
            <CustomizedButton name="CV" icon={DescriptionIcon} onClick={() => openWebsite(CV)}/>
          </Grid>
          <Grid container item sm={4} xs={12} alignContent="space-around">
            <Avatar alt="Picture of Stian" id="picture" src={Portrait} className={classes.picture}/>
          </Grid>
          <Grid item sm={8} xs={12} className={classes.gridTypograpyh}>
            <Typography variant="h4" className={classes.typography}>Stian Ådnanes</Typography>
            <Box borderTop='2px solid #A15067' marginTop='-2px' className={classes.box} width='28vh'></Box>
            <Box borderTop='1px solid #A15067' marginTop='2px' className={classes.box} marginBottom="2vh" width='28vh'></Box>
            <Typography variant="h6" className={classes.typography}>Currently studing software development at NTNU</Typography>
            <Typography variant="h6" id="subtext" className={classes.typography}>Full-stack developer</Typography>
          </Grid>
        </Grid>
      </Paper>
  )
}