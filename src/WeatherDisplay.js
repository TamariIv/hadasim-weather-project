import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faSun, faCloudSun } from '@fortawesome/free-solid-svg-icons';

function WeatherDisplay({ location }) {
  const [temperature, setTemperature] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [description, setDescription] = useState(null);
  const [hebLocation, setHebLocation] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [error, setError] = useState(null);
  const OPEN_WEATHER_KEY = "af2ed40660feb491e8ab596899a09b74"

    // Function to determine which icon to display based on feelsLike temperature
    const renderIcon = () => {
        if (feelsLike < 20) {
          return <FontAwesomeIcon icon={faSnowflake} style={{ color: 'blue' }} />;
        } else if (feelsLike >= 20 && feelsLike <= 30) {
          return <FontAwesomeIcon icon={faCloudSun} style={{ color: 'orange' }} />;
        } else if (feelsLike > 30) {
          return <FontAwesomeIcon  icon={faSun} style={{ color: 'red' }} />;
        }
      };

  // Fetch weather data for the received location
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
        setFeelsLike(data.main.feels_like);
        setHumidity(data.main.humidity);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeather();
  }, [location, OPEN_WEATHER_KEY]);

  return (
    <div className="wrapper">
        <div className="location-wrapper">
            <p className="temp location-title">
            {hebLocation}
            </p>
            <div className="weather-icon">
                {renderIcon()} {/* Renders the appropriate icon */}
            </div>
        </div>
      <div className="app__data">
        <p className="temp">
          {error ? `Error: ${error}` : description !== null ? <span className="weather-desc">{description}</span> : 'Loading...'}
        </p>
        <p className="temp">
          {error ? `Error: ${error}` : temperature !== null ? `טמפרטורה: ${temperature} °C` : 'Loading...'}
        </p>
        <p className="temp">
          {error ? `Error: ${error}` : feelsLike !== null ? `טמפרטורה מורגשת: ${feelsLike} °C` : 'Loading...'}
        </p>
        <p className="temp">
          {error ? `Error: ${error}` : feelsLike !== null ? `לחות: ${humidity}%` : 'Loading...'}
        </p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
