import React from 'react'

export default function ForecastWeek() {
  return (
    <section className="forecast-week">
      <div className="mon days">
        <img src={require("../../assets/images/clouds.png")} alt="" />
        <p className="week-day">Mon</p>
        <p className="week-day-temp">14°c / 3°c</p>
      </div>
      <div className="Tue days">
        <img src={require("../../assets/images/sun-rain.png")} alt="" />
        <p className="week-day">Tue</p>
        <p className="week-day-temp">10°c / 2°c</p>
      </div>
      <div className="Wed days">
        <img src={require("../../assets/images/rain-small.png")} alt="" />
        <p className="week-day">Wed</p>
        <p className="week-day-temp">14°c / 3°c</p>
      </div>
      <div className="Thu days">
        <img src={require("../../assets/images/clouds.png")} alt="" />
        <p className="week-day">Thu</p>
        <p className="week-day-temp">14°c / 32°c</p>
      </div>
      <div className="Fri days">
        <img src={require("../../assets/images/sun.png")} alt="" />
        <p className="week-day">Fri</p>
        <p className="week-day-temp">14°c / 3°c</p>
      </div>
    </section>
  )
}
