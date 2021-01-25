import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#A15067",
    '&:hover': {
      backgroundColor: '#922F4B',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    color: "white",
    //maxWidth: "10vh"
    borderRadius: "50px",
    margin: theme.spacing(1),
    float: "right"
  },
}))

export default function CustomizedButton(props) {
  const classes = useStyles()
  const Icon = props.icon
  return (
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<Icon/>}
        onClick={props.onClick}
      >
        {props.name}
      </Button>
  )
}