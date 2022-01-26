import React from 'react';

const Country = ({ countries }) => {

    const country = countries[0]

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
            {languages.map(l => <li>{l}</li>)}
        </ul>
        <h1>{country.name.common}</h1>
        <img src={country.flags.png} alt="Flag"/>
    </div>
  )
};

export default Country;