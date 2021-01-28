import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Projects from '../components/Projects'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  tabs: {
    background: "white", 
    color: "black", 
    //orderBottom: "2px solid black", 
    boxShadow: "0px",
  }
}));

export default function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style:{background: "black"}}} aria-label="simple tabs example" className={classes.tabs}>
          <Tab label="Projects" {...a11yProps(0)} />
          <Tab label="Education" {...a11yProps(1)} />
          <Tab label="About me" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Projects/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}




/**
 * export default function Menu() {
  const classes = useStyles()
  return(
    
  )
}
 * const useStyles = makeStyles((theme) => ({
  button: {
    fontWeight: 'bold',
    //margin: '0 10px'
  }
}))
 * <Grid container>
        <Grid item xs={12}>
          <Button className={classes.button}> Projects </Button>
          <Button className={classes.button}> Education </Button>
          <Button className={classes.button}> About me </Button>
        </Grid>
        <Box borderTop='2px solid black' marginTop='0px' width='100%'/>
        <Box borderTop='1px solid black' marginTop='2px' width='100%'/>
      </Grid>
 */