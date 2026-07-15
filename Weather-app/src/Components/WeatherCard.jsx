import "./WeatherCard.css";
import { FaTemperatureHigh, FaWind, FaTint, FaCompressAlt } from "react-icons/fa";

function WeatherCard({ weather }) {
  const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="card">

      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <img src={icon} alt="weather icon" />

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p className="description">
        {weather.weather[0].description}
      </p>

      <div className="details">

        <div className="detail-box">
          <FaTemperatureHigh />
          <span>Feels Like</span>
          <strong>{Math.round(weather.main.feels_like)}°C</strong>
        </div>

        <div className="detail-box">
          <FaTint />
          <span>Humidity</span>
          <strong>{weather.main.humidity}%</strong>
        </div>

        <div className="detail-box">
          <FaWind />
          <span>Wind</span>
          <strong>{weather.wind.speed} m/s</strong>
        </div>

        <div className="detail-box">
          <FaCompressAlt />
          <span>Pressure</span>
          <strong>{weather.main.pressure} hPa</strong>
        </div>

      </div>

      <div className="sun-time">

        <div>
          🌅 <strong>Sunrise</strong>
          <p>{sunrise}</p>
        </div>

        <div>
          🌇 <strong>Sunset</strong>
          <p>{sunset}</p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;


