import express from "express";
import cors from "cors";
import axios from "axios";
 
const app = express();
app.use(cors());
 
app.get("/weather", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=0.2299&longitude=-78.5249&current_weather=true"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

