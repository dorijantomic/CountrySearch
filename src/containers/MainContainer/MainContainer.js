import React, { Component } from "react";
import CardList from '../../components/CardList/CardList'
import Nav from '../../components/Navigation/Nav'
import SearchCountry from '../SearchCountry/SearchCountry'
class MainContainer extends Component {
  state = {
    allCountries: null
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(res =>
        this.setState({
          allCountries: res
        })
      );
  
  }
  render() {
    return (
        <div>
            <Nav />
            <SearchCountry />
            <CardList allCountries = {this.state.allCountries}/>
        </div>
    )
  }
}

export default MainContainer;
