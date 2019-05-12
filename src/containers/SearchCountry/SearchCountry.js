import React, {Component} from "react";

import { withStyles, MenuItem, TextField } from "@material-ui/core";


const regions = [
    'All', 'Africa', 'Americas',  'Europe', 'Oceania'
]

class SearchCountry extends Component  {

    state = {
       regions: null
    }

    componentDidMount() {
        console.log('mountain')
    }

    shouldComponentUpdate() {
        fetch(`https://restcountries.eu/rest/v2/region/${this.state.regions}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
    }
    handleChange = name => event => {
        console.log(event.target.value)
        this.setState({
          [name]: event.target.value,
        });
      };
    render() {
      return (
        <div>
       <form>
           <TextField
           onChange={this.handleChange('regions')}
           select
           native
           value={this.state.regions}
           helperText="Please select your currency"
           margin="normal"
           variant="outlined"
           SelectProps={{
             native: true
           }}
           >
            {regions.map(region => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
           })}
           </TextField>
         </form>
        </div>
      )
    }
    
}

export default SearchCountry

