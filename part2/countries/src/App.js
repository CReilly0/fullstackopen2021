import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Components/Countries'
import Country from './Components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (e) => { setFilter(e.target.value) }

  const countriesFilter = (filter==="")
  ? countries
  : countries.filter((countries) => 
  (countries.name.common.toLowerCase().indexOf(filter.toLowerCase()) !== -1))

  return(
    <div>
      <div>
        find countries <input onChange={handleFilterChange}></input>
      </div>
      {countriesFilter.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        <Countries countries={countriesFilter} handleClick={setFilter} />
      )}
    </div>
  )
}

export default App;

