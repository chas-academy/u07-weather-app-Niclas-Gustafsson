import React, {useState, useEffect} from 'react'
import { weather$, city$, getLocation } from '../../services/weatherService';
import { getDay, getTime, tempConverter } from '../../helpers/helperFunctions';

export default function ForecastDay({ celcius }) {

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');

  useEffect(() => {
    getLocation();
    weather$.subscribe(data => setWeather(data));
    city$.subscribe(cityName => setCity(cityName));
  }, [])

  const options = {
    time: {
      hour: '2-digit',
      minute: '2-digit'
    },
    dateShort: {
      weekday: 'long',
    },
    dateLong: {
      month: 'long',
      day: 'numeric'
    }
  };

  return (
    <>
    {weather.current &&
    <section className="forecast-day">
        <div className="day">
          <h2 className="day-text">{city}
          </h2>
          
        </div>
        <div className="date-place">
          <p className="date">{getDay(weather.current.dt, weather.timezone_offset).toLocaleDateString([], options.dateLong)}</p>
          <p className="place">{city}</p>
        </div>
        <div className="conditions">
          <p className="humidity">Humidity</p>
          <p className="wind">Winds speed</p>
          <p className="sunrise">Sunrise</p>
          <p className="sunset">Sunset</p>
        </div>
        <div className="temp">
            <h3 className="temp-text">{!celcius ? tempConverter(weather.current.temp, celcius).toFixed() : tempConverter(weather.current.temp, celcius).toFixed()}°</h3>
        </div>
        <div className="condition-values">
          <p className="hum-value">{weather.current.humidity}%</p>
          <p className="wind-value">{weather.current.wind_speed} m/s</p>
          <p className="sunrise-value">{getTime(weather.current.sunrise, weather.timezone_offset).toLocaleTimeString([], options.time)} am</p>
          <p className="sunset-value">{getTime(weather.current.sunset, weather.timezone_offset).toLocaleTimeString([], options.time)} pm</p>
        </div>
      
    </section>
    }
    </>
  )
}
