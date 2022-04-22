import React, { useState, useEffect} from 'react';
import { dailyWeather$, locationOffset$} from '../../services/weatherService';
import { getDay, getCity, getTime } from '../../helpers/helperFunctions';

export default function ForecastWeek() {
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
  // console.log(daily);
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
      {/* A unique key for each sibling in the .map-loop was required. I gave it the "dt" property since it's unique for each sibling in this case. Exactly why it's required I don't know. */}
      {daily.map((day) => (
      
      <div className="mon days" key={day.dt}>
        <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="Weather condition icon" />
       {/*  <img src={require("../../assets/images/clouds.png")} alt="" /> */}
        <p className="week-day">{getDay(day.dt, timezoneOffset).toLocaleDateString([], options.dateShort)}</p>
        <p className="week-day-temp">{day.temp.max.toFixed()}°c / {day.temp.min.toFixed()}°c</p>
      </div>
      ))}
    </section>
      }
      </>
  )
}
