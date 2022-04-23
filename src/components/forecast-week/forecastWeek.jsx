import React, { useState, useEffect} from 'react';
import { dailyWeather$, locationOffset$} from '../../services/weatherService';
import { getDay, tempConverter } from '../../helpers/helperFunctions';

export default function ForecastWeek({ celcius }) {
  const [daily, setDaily] = useState([]);
  const [timezoneOffset, setTimezoneOffset] = useState("");

  useEffect(() =>{
    dailyWeather$.subscribe(data =>  {
        if(data) {
          const shortFiveDayData = data.slice(0, 5);
          setDaily(shortFiveDayData)
          locationOffset$.subscribe(offset => {
              setTimezoneOffset(offset);
          })
        }
      }
      );
  },[]);
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

  return (
    <>
    {daily[0] && 
    <section className="forecast-week">
      {daily.map((day) => (
      
      <div className="mon days" key={day.dt}>
        <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="Weather condition icon" />
       {/*  <img src={require("../../assets/images/clouds.png")} alt="" /> */}
        <p className="week-day">{getDay(day.dt, timezoneOffset).toLocaleDateString([], options.dateShort)}</p>
        {/* <p className="week-day-temp">{day.temp.max.toFixed()}°c / {day.temp.min.toFixed()}°c</p> */}
        <p className="week-day-temp">{celcius ? tempConverter(day.temp.max, celcius).toFixed() : tempConverter(day.temp.max, celcius).toFixed()}°c / {celcius ? tempConverter(day.temp.min, celcius).toFixed() : tempConverter(day.temp.min, celcius).toFixed()}°c</p>
      </div>
      ))}
    </section>
      }
      </>
  )
}
