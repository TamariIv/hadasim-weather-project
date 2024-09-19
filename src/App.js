import React, { useState, useEffect } from "react";

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

// function App() {
//   const [temperature, setTemperature] = useState(null); // State to store temperature
//   const [error, setError] = useState(null); // State to track errors
//   const locations = 'New York'; // Example city name

//   // Fetch the weather data
//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const response = await fetch(
//           `http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID=${OPEN_WEATHER_KEY}&units=metric`
//         );
//         if (!response.ok) {
//           throw new Error('Error fetching weather data');
//         }
//         const data = await response.json();
//         setTemperature(data.main.temp); // Extract the temperature
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchWeather();
//   }, [locations, OPEN_WEATHER_KEY]); // Effect runs once on component mount

//   return (
//     <div className="wrapper">
//       <h3>ניו יורק</h3>
//       <div className="app__data">
//         <p className="temp">
//           Current Temperature: {error ? error : temperature !== null ? `${temperature} °C` : 'Loading...'}
//         </p>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [weather, setWeather] = useState({});
//   const [locations, setLocations] = useState("london");
//   // const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     ifClicked();
//   }, []);

//   function ifClicked() {
//     fetch(
//       `http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID=${OPEN_WEATHER_KEY}&units=metric`
//     )
//       .then((res) => {
//         if (res.ok) {
//           console.log(res.status);
//           return res.json();
//         } else {
//           if (res.status === 404) {
//             return alert("Oops, there seems to be an error!(wrong location)");
//           }
//           alert("Oops, there seems to be an error!");
//           throw new Error("You have an error");
//         }
//       })
//       .then((object) => {
//         setWeather(object);
//         console.log(weather);
//       })
//       .catch((error) => console.log(error));
//   }
//   return (
//     <div className="app">
//       <div className="wrapper">
//         <div className="search">
//           <input
//             type="text"
//             value={locations}
//             onChange={(e) => setLocations(e.target.value)}
//             placeholder="Enter location"
//             className="location_input"
//           />
//           <button className="location_searcher" onClick={ifClicked}>
//             Search Location
//           </button>
//         </div>
//         <h3>לונדון</h3>
//         <div className="app__data">
//           <p className="temp">Current Temparature: {weather?.main?.temp}</p>
//         </div>
//       </div>
//       <div className="wrapper">
//         <div className="search">
//           <input
//             type="text"
//             value={locations}
//             onChange={(e) => setLocations(e.target.value)}
//             placeholder="Enter location"
//             className="location_input"
//           />
//           <button className="location_searcher" onClick={ifClicked}>
//             Search Location
//           </button>
//         </div>
//         <h3>ניו יורק</h3>
//         <div className="app__data">
//           <p className="temp">Current Temparature: {weather?.main?.temp}</p>
//         </div>
//       </div>
//       <div className="wrapper">
//         <div className="search">
//           <input
//             type="text"
//             value={locations}
//             onChange={(e) => setLocations(e.target.value)}
//             placeholder="Enter location"
//             className="location_input"
//           />
//           <button className="location_searcher" onClick={ifClicked}>
//             Search Location
//           </button>
//         </div>
//         <h3>אילת</h3>
//         <div className="app__data">
//           <p className="temp">Current Temparature: {weather?.main?.temp}</p>
//         </div>
//       </div>
//       <div className="wrapper">
//         <div className="search">
//           <input
//             type="text"
//             value={locations}
//             onChange={(e) => setLocations(e.target.value)}
//             placeholder="Enter location"
//             className="location_input"
//           />
//           <button className="location_searcher" onClick={ifClicked}>
//             Search Location
//           </button>
//         </div>
//         <h3>אלסקה</h3>
//         <div className="app__data">
//           <p className="temp">Current Temparature: {weather?.main?.temp}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function WeatherComponent( { location }) {
//   const [weather, setWeather] = useState({});

//   useEffect(() => {
//     fetch(
//       `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${OPEN_WEATHER_KEY}&units=metric&lang=he`
//     )
//       .then((res) => {
//         if (res.ok) {
//           console.log(res.status);
//           return res.json();
//         } else {
//           if (res.status === 404) {
//             return alert("Oops, there seems to be an error!(wrong location)");
//           }
//           alert("Oops, there seems to be an error!");
//           throw new Error("You have an error");
//         }
//       })
//       .then((object) => {
//         setWeather(object);
//         console.log(weather);
//       })
//       .catch((error) => console.log(error));
//   })
  
//   return (
//     <div className="app">
//       <div className="wrapper">
//         {/* <div className="search">
//           <input
//             type="text"
//             value={locations}
//             onChange={(e) => setLocations(e.target.value)}
//             placeholder="Enter location"
//             className="location_input"
//           />
//           <button className="location_searcher" onClick={ifClicked}>
//             Search Location
//           </button>
//         </div> */}
//         <div className="app__data">
//           <p className="temp">{weather?.main?.name}</p>
//           <p className="temp">{weather?.main?.temp}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;