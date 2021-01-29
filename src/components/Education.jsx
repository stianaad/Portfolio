import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconText from './IconText'
import {makeStyles} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse';
import Test from './test'

const useStyles = makeStyles(theme => ({
  padding: {
    paddingTop: '30px',
   },
  boldSize: {
    fontWeight: "bold"
  },
  border: {
    borderLeft: "2px solid black",
    //maxHeight: "200px",
    paddingLeft: "20px",
    animationLineup: "3s forwards",
    //position: "relative"
  },
  ntnuGrid: {
    maxHeight: "300px"
  }
}));

export default function Education() {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(false);

  setTimeout(() => {
    setChecked(true)
  }, 700)

  return (
    <Grid container>
      <Grid item xs={12} sm={4} container justify={'center'} className={classes.ntnuGrid}>
        <Test/>
      </Grid>
      <Grid item xs={12} sm={8}>
      <Collapse in={checked} timeout={2000} className={classes.border}>
        <Typography variant="h5" component={'span'} className={classes.boldSize}> Norges teknisk-naturvitenskapelige universitet </Typography>

        <IconText text={"2020 - current"} icon={QueryBuilderIcon} marginTop="10px"/>
        <IconText text={"Master, software development"} icon={SchoolIcon}/>
        <IconText text={"2017 - 2020"} icon={QueryBuilderIcon} marginTop="30px"/>
        <IconText text={"Bachelor, computer engineering"} icon={SchoolIcon}/>

        <Box className={classes.padding} />
        <Typography variant="h5" component={'span'} className={classes.boldSize}> Bømlo vidaregåande skule </Typography>
        <IconText text={"2014 - 2017"} icon={QueryBuilderIcon} marginTop="10px"/>
        <IconText text={"Highschool, natural science"} icon={SchoolIcon}/>
        </Collapse>
      </Grid>
    </Grid>
  )
}
/**
 *       <Box className={classes.ntnuOuter}>
          <Box className={classes.ntnuMiddle}>

          </Box>
        </Box>
 * <Typography variant="h5">
          Norges teknisk-naturvitenskapelige universitet
        </Typography>
 */
//<IconText text={"text"} icon={QueryBuilderIcon}/>