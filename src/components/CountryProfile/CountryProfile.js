import React from "react";
import arrayToSentence from 'array-to-sentence';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const CountryProfile = props => {
  const classes = useStyles();
  //  <CountryCard name={props.data.map((country, i) =>country.name.includes(props.location.pathname.slice(1)))} />
  let currentCountry = props.data.filter(country => country.name === props.location.pathname.slice(1))
  let language = [];
 currentCountry[0].languages.forEach((lang,i) => language.push(lang.name))
 language.join(', ')
 console.log(language)


  return (
    <div>
      {console.log(props)}
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={currentCountry[0].flag}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {currentCountry[0].name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Population: {currentCountry[0].population}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Region: {currentCountry[0].region}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                SubRegion: {currentCountry[0].subregion}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Capital: {currentCountry[0].capital}
            </Typography>
          </CardContent>
         <CardContent>
         <Typography variant="body2" color="textSecondary" component="p">
                Top Level Domain: {currentCountry[0].topLevelDomain}
            </Typography>
           
            <Typography variant="body2" color="textSecondary" component="p">
                Currencies: {currentCountry[0].currencies[0].name}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
                Languages: {arrayToSentence(language)}
            </Typography>
         </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CountryProfile;
