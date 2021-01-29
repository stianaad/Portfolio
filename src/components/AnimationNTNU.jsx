import React from 'react';
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
  topBottom: {
    width: "100px",
    borderTop: "2px solid black",
    borderBottom: "2px solid black",
    background: "black",
    borderRadius: "20px"
  },
  leftRight: {
    height: "100px",
    borderLeft: "2px solid black",
    borderRight: "2px solid black",
    borderRadius: "20px"
  },
  middleTopBottom: {
    borderTop: "2px solid black",
    borderBottom: "2px solid black",
    margin: "10px",
    width: "60px",
    height: "60px",
    background: "white"
  },
  middleLeftRight: {
    borderLeft: "2px solid black",
    borderRight: "2px solid black",
    margin: "10px",
    width: "60px",
    height: "60px",
    background: "white"
  }
}))

export default function AnimationNTNU(){
  const classes = useStyles()
  const [showTopBottom, setShowTopBottom] = React.useState(false)

  setTimeout(() => {
    setShowTopBottom(true)
  }, 700)

  return(
    //Outer square
    <Box className={classes.topBottom}>
      <Box className={classes.leftRight}>
      <Collapse in={showTopBottom} timeout={2000}>
        {/*Middle square*/}
        <Box className={classes.middleTopBottom}>
          <Box></Box>
        </Box>
        </Collapse>
      </Box>
    </Box>
  )
}