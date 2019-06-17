import React from 'react'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, withStyles, createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = {
  card: {
    maxWidth: 245,
    maxHeight: 380,
    marginTop: '75px',
    textAlign: 'center'
  },
  media: {
    height: 140,
  },
};

const CountryCard = (props) => {

const routePage = (e) => {
  return <Link to={`/${e}`} />
  }

  const { classes } = props
  return (
    <div>
     
      
     
      <Card className={classes.card}>
          <CardActionArea>
          <Link to={`${props.name}`} >
          <CardMedia
          className={classes.media}
          image={props.flag}
          title="Contemplative Reptile"
          id={props.name}
          
        />
          </Link>
          </CardActionArea>
          <CardContent>
              <Typography variant='h5' component='h2' gutterBottom align='left'>
                  {props.name}
              </Typography>
              <Typography component='p' align='left'>
              <strong>Population: </strong> {props.population}
              </Typography>
              <Typography component='p' align='left'>
              <strong>Region: </strong>{props.region}
              </Typography>
              <Typography component='p' align='left'>
               <strong>Capital: </strong>{props.capital}
              </Typography>
          </CardContent>
      </Card>
    
    </div>
  )
}

export default withStyles(styles)(CountryCard)
