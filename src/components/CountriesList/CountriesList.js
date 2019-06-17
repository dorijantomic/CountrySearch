import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Route } from 'react-router-dom'

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        margin: "0 auto"
      }
    }
  }
});

const CountriesList = props => {
  let countries = [];
  console.log(props.data, "props data inside cou ntries list");

  if (
    props.data instanceof Array ||
    (props.data instanceof Object && props.data.status != "404")
  ) {
    console.log(props.data, "props data");
    props.data.map(country => {
      countries.push(
        <Grid item xs={12} sm={12} md={3}>
          <CountryCard 
          name={country.name} 
          flag={country.flag} 
          population={country.population}
          region={country.region}
          capital={country.capital}
          />
        </Grid>
      );
    });
  } else {
    countries.push(<div>Man there's no such counry</div>);
  }
  return (
      // MuiTheme provider is overiding the default margin of Paper component that is a part of Card
    <MuiThemeProvider theme={theme}>
      <Grid container justify="center" wrap>
        {countries}
      </Grid>
    </MuiThemeProvider>
  );
};

export default CountriesList;
