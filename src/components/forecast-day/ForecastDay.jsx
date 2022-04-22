import React, {useState, useEffect} from 'react'
import { weather$, getLocation } from '../../services/weatherService';
import { getDay, getCity, getTime } from '../../helpers/helperFunctions';

export default function ForecastDay() {

  const [weather, setWeather] = useState({});

  useEffect(() => {
    getLocation();
    weather$.subscribe(data => setWeather(data))
  }, [])

  // console.log(weather);

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
    },
    
    sun: {
      hour: '2-digit',
      minute: '2-digit'
    }
  };

 /*  useEffect(() => {
    getLocation();
    weather$.subscribe(data => setWeather(data))
  }, [])
  console.log(weather); */

  return (
    <>
          {weather.current &&
    <section className="forecast-day">
    
          
        <div className="day">
          <h2 className="day-text">{getDay(weather.current.dt, weather.timezone_offset).toLocaleDateString([], options.dateShort)}
          </h2>
          
        </div>
        <div className="date-place">
          <p className="date">{getDay(weather.current.dt, weather.timezone_offset).toLocaleDateString([], options.dateLong)}</p>
          <p className="place">{getCity(weather.timezone)}</p>
        </div>
        <div className="conditions">
          <p className="humidity">Humidity</p>
          <p className="wind">Winds speed</p>
          <p className="sunrise">Sunrise</p>
          <p className="sunset">Sunset</p>
        </div>
        <div className="temp">
            <h3 className="temp-text">{weather.current.temp.toFixed()}°c</h3>
        </div>
        <div className="condition-values">
          <p className="hum-value">{weather.current.humidity}%</p>
          <p className="wind-value">{weather.current.wind_speed} m/s</p>
         

          <p className="sunrise-value">{getTime(weather.current.sunrise, weather.timezone_offset).toLocaleTimeString([], options.time)} am</p>
          <p className="sunset-value">{getTime(weather.current.sunset, weather.timezone_offset).toLocaleTimeString([], options.time)} pm</p>
        </div>
     {/*  </section> */}
      {/* <section className="inner-right">

      </section> */}
      
    </section>
    }
    </>
  )
}
