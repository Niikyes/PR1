import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get('http://3.94.118.27:8080/weather') // IP de EC2 
      .then(res => setWeather(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Weather API App 🌦️</h1>
      {weather ? (
        <div>
          <p><strong>Temperature:</strong> {weather.current_weather.temperature} °C</p>
          <p><strong>Windspeed:</strong> {weather.current_weather.windspeed} km/h</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default App;

