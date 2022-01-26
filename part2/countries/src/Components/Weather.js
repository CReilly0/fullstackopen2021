import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {

    const [weather, setWeather] = useState([])

    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
          .then(response => {
            setWeather(response.data)
          })
      }, [])

  return (
    <div>
        {Object.keys(weather).length !== 0 && (
            <>
                <h2>Weather in {capital}</h2>
                <p><strong>temperature:</strong> {weather.current.temperature} Celcius</p>
                <img src={weather.current.weather_icons[0]} alt="Weather icon"/>
                <p><strong>wind:</strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
            </>
        )}
    </div>
  )
};

export default Weather;
