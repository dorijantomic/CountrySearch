import React, { Component } from "react";

import { withStyles, TextField } from "@material-ui/core";
import CountriesList from "../../components/CountriesList/CountriesList";
const styles = {
  form: {
    paddingTop: "75px"
  },
  outLinedSearch: {
    paddingLeft: "50px"
  }
};

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

class Form extends Component {
  state = {
    regions: "all"
  };

  componentDidMount() {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          regions: res
        })
      )
      .then(res => console.log(this.state.regions, "inside the res"));
    console.log("Component Did Mount", this.state.regions);
  }

  componentDidUpdate() {
    if (this.state.regions === "all" && this.state.regions != Object) {
      console.log("Wohooooo I got updated IF STATEMENT");
      fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res => res.json())
        .then(res =>
          this.setState({
            regions: res
          })
        );
    } else if (
      this.state.regions === "africa" ||
      this.state.regions === "asia" ||
      this.state.regions === "americas" ||
      this.state.regions === "europe" ||
      this.state.regions === "oceania"
    ) {
      console.log("Wohooooo I got updated ELSE statement");
      fetch(`https://restcountries.eu/rest/v2/region/${this.state.regions}`)
        .then(res => res.json())
        .then(res =>
          this.setState({
            regions: res
          })
        );
    }
  }

  handleChange = e => {
    this.setState({
      regions: e.target.value.toLocaleLowerCase()
    });

    console.log(this.state.regions);
  };

  onSearchChange = e => {
   /* console.log(e.target.value.toLocaleLowerCase());
    this.state.regions.map(country => {
      if (
        Object.values(country).includes(e.target.value) &&
        e.target.value != ""
      ) {
        debugger;
        fetch(
          `https://restcountries.eu/rest/v2/name/${country.name.toLocaleLowerCase()}`
        )
          .then(res => res.json())
          .then(res =>
            this.setState({
              regions: res
            })
          )
          .then(res =>
            console.log(this.state.regions, "inside onsearchchange")
          );
      }
     }) ;*/ 

     fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
     .then(res => res.json())
     .then(res => {
       this.setState({regions: res})
     }).catch(err => console.log(err))



  };

  render() {
    console.log(this.state.regions, "render method");
    const { classes } = this.props;
    return (
      <div className={classes.form}>
        <form onSubmit={e => e.preventDefault()}>
          <TextField
            id="outlined-search"
            label="Search for a Country"
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.onSearchChange}
          />

          <TextField
            id="outlined-select-currency-native"
            select
            label="Native select"
            // value={this.state.currency}
            onChange={this.handleChange}
            SelectProps={{
              native: true
            }}
            helperText="Please select your currency"
            margin="normal"
            variant="outlined"
          >
            {regions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </form>
        <CountriesList data={this.state.regions} />
      </div>
    );
  }
}

export default withStyles(styles)(Form);
