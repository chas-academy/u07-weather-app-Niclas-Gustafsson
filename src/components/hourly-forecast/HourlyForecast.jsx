import React, { useEffect, useState } from 'react'
import { weather$, locationOffset$} from '../../services/weatherService';
import { getDay, getCity, getTime } from '../../helpers/helperFunctions';

export default function HourlyForecast({ show }) {

    const [details, setDetails] = useState(false);
    const [hourly, setHourly] = useState([]);
    const [timezoneOffset, setTimezoneOffset] = useState("");
    const [current, setCurrent] = useState({});

    useEffect(() => {

        weather$.subscribe(data => {
            if (data.hourly) {
                // console.log(data.hourly);
               let test = []

                data.hourly.map((item, index) => {
                    if(index % 3 === 0 && test.length <9 ) {
                        test.push(item)
                    }
                })
                // console.log(test);
                setHourly(test);
            }

            if(data.current) {
                setCurrent(data.current);
            }
        })
        locationOffset$.subscribe(offset => {
            setTimezoneOffset(offset);
        });
    }, []) 
    console.log(current);
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
        full: {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        },
        
        sun: {
          hour: '2-digit',
          minute: '2-digit'
        }
      };


    const handleToggle = () => {
        setDetails((prevDetailsState) => !prevDetailsState);
        // console.log(details);
      }

  return (
    <section className={`hourly-forecast ${show ? "open" : ''}`}>
            <h2 className="hourly-title">Hourly forecast</h2>

        <div className="hourly" onClick={handleToggle}>
            <div className="overview">
                <p className="day-date">{getDay(current.dt, timezoneOffset).toLocaleDateString([], options.full)}</p>
                <div className="hourly-info">
                    <p className="hour">{getTime(current.dt, timezoneOffset).toLocaleTimeString([], options.time)}</p>
                    <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}.png`} alt="Weather condition icon" />
                    <p className="temp">{current.temp.toFixed()}°</p>
                </div>
            </div>
            <div className={`details-wrapper ${details ? "open" : ''}`}>

                {hourly[0] && 
                    <>
                    {hourly.map((hour) => (

                        <div className={`details ${details ? "open" : ''}`} key={hour.dt}>
                            <p className="details-hour">{getTime(hour.dt, timezoneOffset).toLocaleTimeString([], options.time)}</p>
                            <img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} alt="Weather condition icon" />
                            <p className="details-temp">{hour.temp.toFixed()}°</p>
                            <p className="details-wind">{hour.wind_speed.toFixed()} m/s</p>
                            {/* style={{ transform: rotate(hour.wind_deg)}} */}
                            <img className="direction" style={{ "--degrees": `${hour.wind_deg}deg` }} src={require('../../assets/images/direction.png')} alt="" />
                        </div>
                    ))}
                    
                   
                    </>    
                    }

                    
                

                {/* <div className="details">
                        <p className="details-hour">10am</p>
                        <img src={require('../../assets/images/clouds.png')} alt="" />
                        <p className="details-temp">13°</p>
                        <p className="details-wind">5 m/s</p>
                        arrow to change angle depending
                        <img className="direction" src={require('../../assets/images/direction.png')} alt="" />
                </div>
                <div className="details">
                        <p className="details-hour">10am</p>
                        <img src={require('../../assets/images/clouds.png')} alt="" />
                        <p className="details-temp">13°</p>
                        <p className="details-wind">5 m/s</p>
                        
                        <img className="direction" src={require('../../assets/images/direction.png')} alt="" />
                </div> */}
            </div>


            {/* change to "less info if the details div is visible" */}
            <p className="more-details">More details</p>
        </div>

    </section>
  )
}
