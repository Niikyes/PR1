import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get("http://<EC2_PUBLIC_IP>:5000/weather")
      .then(res => setWeather(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Clima en Quito</h1>
      {weather ? (
        <ul>
          {weather.temperatures.map((temp, idx) => (
            <li key={idx}>Hora {idx+1}: {temp} °C</li>
          ))}
        </ul>
      ) : <p>Cargando...</p>}
    </div>
  );
}
export default App;
