import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  wrapIcon: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
   },
   typographyYear: {
     marginLeft: "10px"
   }
}));

export default function IconText({text, icon, marginTop}){
  const classes = useStyles()
  const Icon = icon
  return(
    <div className={classes.wrapIcon} style={{marginTop: marginTop}}>
      <Icon/>
      <Typography variant="h6" className={classes.typographyYear} component={'span'}>{text}</Typography>
    </div>  
  )
}