import React, { useState, useEffect } from 'react';

function WeatherDisplay({ location }) {
  const [temperature, setTemperature] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [description, setDescription] = useState(null);
  const [hebLocation, setHebLocation] = useState(null);
  const [error, setError] = useState(null);
  const OPEN_WEATHER_KEY = "af2ed40660feb491e8ab596899a09b74"

  // Fetch weather data for the specific location
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${OPEN_WEATHER_KEY}&lang=he&units=metric`
        );
        if (!response.ok) {
          throw new Error('Error fetching weather data');
        }
        const data = await response.json();
        setTemperature(data.main.temp);
        setHebLocation(data.name);
        setDescription(data.weather[0].description);
        setFeelsLike(data.main.feels_like)
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeather();
  }, [location, OPEN_WEATHER_KEY]);

  return (
    <div className="wrapper">
      <h3>{hebLocation}</h3>
      <div className="app__data">
        <p className="temp">
          {error ? `Error: ${error}` : description !== null ? `${description}` : 'Loading...'}
        </p>
        <p className="temp">
          {error ? `Error: ${error}` : temperature !== null ? `טמפרטורה: ${temperature} °C` : 'Loading...'}
        </p>
        <p className="temp">
          {error ? `Error: ${error}` : feelsLike !== null ? `טמפרטורה מורגשת: ${feelsLike} °C` : 'Loading...'}
        </p>

      </div>
    </div>
  );
}

export default WeatherDisplay;
