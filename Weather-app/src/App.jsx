import { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

const API_KEY = "b42b9d6de17a2bf80ca974405f24120c";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (city.trim() === "") return;

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(response.data);
    } catch (e) {
      setWeather(null);
      setError("City not found!");
      console.error(e);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getWeather();
    }
  };

  return (
    <div className="app">

      <div className="weather-container">

        <h1>🌤 Weather App</h1>

        <div className="search-box">

          <input
            type="text"
            placeholder="Enter City..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={getWeather}>
            Search
          </button>

        </div>

        {loading && <p className="loading">Loading...</p>}

        {error && <p className="error">{error}</p>}

        {weather && <WeatherCard weather={weather} />}

      </div>

    </div>
  );
}

export default App;