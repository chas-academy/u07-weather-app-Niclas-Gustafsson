import React from 'react'

export default function ForecastDay() {
  return (
    <section className="forecast-day">
      {/* <section className="inner-left"> */}
        <div className="day">
          <h2 className="day-text">Monday</h2>
        </div>
        <div className="date-place">
          <p className="date">April 15th</p>
          <p className="place">Venice</p>
        </div>
        <div className="conditions">
          <p className="humidity">Humidity</p>
          <p className="wind">Wind</p>
          <p className="sunrise">Sunrise</p>
          <p className="sunset">Sunset</p>
        </div>
        <div className="temp">
            <h3 className="temp-text">10°c / 2°c</h3>
        </div>
        <div className="condition-values">
          <p className="hum-value">68%</p>
          <p className="wind-value">13 m/s</p>
          <p className="sunrise-value">05.45 am</p>
          <p className="sunset-value">21.12 pm</p>
        </div>
     {/*  </section> */}
      {/* <section className="inner-right">

      </section> */}
    </section>
  )
}
