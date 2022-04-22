import React from 'react'

export default function HourlyForecast({ show }) {
  return (
    <section className={`hourly-forecast ${show ? "open" : ''}`}>

        <div className="hourly">
            <div className="overview">
                <p className="day-date">Monday, 15th April</p>
                <div className="hourly-info">
                    <p className="hour">10am</p>
                    <img src="" alt="" />
                    <p className="temp">13°</p>
                </div>
            </div>
            <div className="details"></div>
        </div>

    </section>
  )
}
