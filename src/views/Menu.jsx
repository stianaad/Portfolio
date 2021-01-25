import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  button: {
    fontWeight: 'bold',
    margin: '0 10px'
  }
}))

export default function Menu() {
  const classes = useStyles()
  return(
    <Grid container>
        <Grid item xs={12}>
          <Button className={classes.button}> Projects </Button>
          <Button className={classes.button}> Education </Button>
          <Button className={classes.button}> About me </Button>
        </Grid>
        <Box borderTop='2px solid black' marginTop='0px' width='100%'/>
        <Box borderTop='1px solid black' marginTop='2px' width='100%'/>
      </Grid>
  )
}