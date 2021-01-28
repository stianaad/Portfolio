import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Picture from '../assets/bildeAvStian.jpg'
import Nois from '../assets/nois.jpeg'
import Embicon from '../assets/embicon.png'
import Salt from '../assets/salt.jpeg'
import Newspaper from '../assets/nettavis.jpg'
import Hero from '../assets/hero.jpeg'
import Portfolio from '../assets/portfolio.png'

const useStyles = makeStyles({
  root: {
    maxWidth: "500px",
    boxShadow: "2px 2px lightgrey",
    width: "auto",
    margin: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  media: {
    height: "auto",
    width: "100%",
    maxHeight: "300px",
    //maxWidth: "300px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    //backgroundSize: "100% 100%"
  },
  button: {
    background: 'linear-gradient(120deg, #50A18A 30%, #1D7F9D 90%)',
    color: "white",
  }
});

export default function ProjectCard({title, description, github, imageUrl}) {
  const classes = useStyles();
  const test = {"nois": Nois, "stian": Picture, "salt": Salt, "embicon": Embicon, "newspaper": Newspaper, "hero": Hero, "portfolio": Portfolio} 
  /**
   * <CardMedia
          className={classes.media}
          height="140"
          image={test[imageUrl]}
          title="Contemplative Reptile"
        />
        
   */
  return (
    <Card className={classes.root}>
      <CardActionArea>
      <img alt="topic" src={test[imageUrl]} className={classes.media} />     
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
        {(github !== null) ? (
          <CardActions>
            <Button size="small" className={classes.button} onClick={() => window.open(github)}>
              GITHUB
            </Button>
          </CardActions>) : (null)
        }
    </Card>
  );
}