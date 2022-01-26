import React from 'react';
import Weather from './Weather';

const Country = ({ country }) => {

    const api_key = process.env.REACT_APP_API_KEY
    //Create array from languages object
    const languages = []
    const keys = Object.keys(country.languages);
    keys.forEach((key, index) => {
        languages.push(`${(country.languages)[key]}`);
    });

  return (
    <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Languages </h2>
        <ul>
            {languages.map(l => <li key={l}>{l}</li>)}
        </ul>
        <img style={{ width: "25%" }} src={country.flags.png} alt="Flag"/>
        <Weather capital={country.capital[0]}/>
    </div>
  )
};

export default Country;
