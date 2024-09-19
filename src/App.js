import "./App.css";

import WeatherDisplay from './WeatherDisplay'; 
const OPEN_WEATHER_KEY = "af2ed40660feb491e8ab596899a09b74"

function App() {
  return (
    <div className="app">
      <div className="app-title">
      <h1>תחזית מזג אוויר מסביב לעולם</h1> {/* Add the title here */}
      </div>

      <div className="weather-display-container">
        {/* Render WeatherDisplay components for he requested locations */}
        <WeatherDisplay location="Eilat" />
        <WeatherDisplay location="New York" />
        <WeatherDisplay location="London" />
        <WeatherDisplay location="Alaska" />
      </div>

    </div>
  );
}

export default App;