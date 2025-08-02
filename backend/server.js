import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get("/weather", async (req, res) => {
  try {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=-0.2299&longitude=-78.5249&hourly=temperature_2m";
    const response = await axios.get(url);
    const hourlyData = response.data.hourly.temperature_2m.slice(0, 5); // solo 5 horas
    res.json({ city: "Quito", temperatures: hourlyData });
  } catch (err) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
