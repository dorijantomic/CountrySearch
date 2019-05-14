import React from 'react'
import CountryCard from '../CountryCard/CountryCard'


const CountriesList = (props) => {

    let countries = [];
    console.log(props.data, 'props data inside cou ntries list')
    debugger
    if(props.data instanceof Array || props.data instanceof Object && props.data.status!='404') {
      
        console.log(props.data, 'props data')
        props.data.map(country => {
            countries.push((
                <CountryCard name={country.name} flag={country.flag} />
            ))
        })
    } else {
        countries.push((
            <div>Man there's no such counry</div>
        ))
    }
  return (
    <div>
        {countries}
    </div>
  )
}

export default CountriesList
