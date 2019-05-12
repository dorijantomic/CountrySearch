import React from 'react'
import Card from '../Card/Card'
import Grid from '@material-ui/core/Grid'

import {MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'


const theme = createMuiTheme({
    overrides: {
      MuiPaper: {
        root: {
          
          margin: '10% auto'
        },
      },
    }
  });
  

const CardList = (props) => {
   
    const { allCountries } = props;
    let countries = [];
    if(allCountries) {
        allCountries.map((country, i) => {
            countries.push(
                <Grid item xs={12} sm={12} md={3} lg={3}>
                       <Card name={country.name} flag={country.flag}/>
                </Grid>
         
            )
        })
    } else {
        countries = 'hello';
    }


  return (
    <div >
        <Grid container spacing={24} justify='space-between'>
        <MuiThemeProvider theme={theme}>
        {countries}
        </MuiThemeProvider>
        
        </Grid>
    
    </div>
  )
}

export default CardList
