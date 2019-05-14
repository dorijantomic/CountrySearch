import React from 'react'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, withStyles} from '@material-ui/core'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

const CountryCard = (props) => {

  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image={props.flag}
          title="Contemplative Reptile"
        />
          </CardActionArea>
          <CardContent>
              <Typography variant='h5' component='h2'>
                  {props.name}
              </Typography>
              <Typography component='p'>
                More text about the texting text of a text
              </Typography>
          </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles)(CountryCard)
