import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import Json from '../information.json'


export default function Projects() {
  return (
    <Grid container>
      {Json.map(e => (
        <Grid item xs={12} sm={6} md={6} container justify={"center"} key={e.title}>
          <ProjectCard key={e.title} title={e.title} description={e.description} github={e.github} imageUrl={e.imageUrl}/>
        </Grid>
      ))}
    </Grid>
  )
}