import SchoolIcon from '@material-ui/icons/School';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconText from './IconText'
import {makeStyles} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  padding: {
    paddingTop: '30px',
   },
  boldSize: {
    fontWeight: "bold"
  }
}));

export default function Education() {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={2}>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h5" component={'span'} className={classes.boldSize}> Norges teknisk-naturvitenskapelige universitet </Typography>

        <IconText text={"2020 - current"} icon={QueryBuilderIcon} marginTop="10px"/>
        <IconText text={"Master, software development"} icon={SchoolIcon}/>
        <IconText text={"2017 - 2020"} icon={QueryBuilderIcon} marginTop="30px"/>
        <IconText text={"Bachelor, computer engineering"} icon={SchoolIcon}/>

        <Box className={classes.padding} />
        <Typography variant="h5" component={'span'} className={classes.boldSize}> Bømlo vidaregåande skule </Typography>
        <IconText text={"2014 - 2017"} icon={QueryBuilderIcon} marginTop="10px"/>
        <IconText text={"Highschool, natural science"} icon={SchoolIcon}/>
      </Grid>
    </Grid>
  )
}
/**
 * <Typography variant="h5">
          Norges teknisk-naturvitenskapelige universitet
        </Typography>
 */
//<IconText text={"text"} icon={QueryBuilderIcon}/>