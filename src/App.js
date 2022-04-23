import React, {useEffect, useState, useRef} from 'react';
import Navbar from './components/navbar/navbar';
import Search from './components/searchComponent/search'
import ForecastDay from './components/forecast-day/ForecastDay'
import ForecastWeek from './components/forecast-week/forecastWeek';
import TableButton from './components/table-button/TableButton';
import Sidebar from './components/sidebar/Sidebar';
import HourlyForecast from './components/hourly-forecast/HourlyForecast';
//observables
// import { weather$, getLocation } from './services/weatherService';

function App() {

  const ref = useRef();
  /* const [showSidebar, setShowSidebar] = useState(false); */
  const [hourlyForecast, setHourlyForecast] = useState(false);
  const [celcius, setCelcius] = useState(true);

  useEffect(() => {
    /* const closeSidebar = (e) => {
      if(showSidebar || hourlyForecast && ref.current && !ref.current.contains(e.target)) {
        // setShowSidebar(false);
        // setHourlyForecast(false);
        
      }
    }
    document.addEventListener("mousedown", closeSidebar)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", closeSidebar)
    } */
  }, [ hourlyForecast]); //showSidebar,

  const handleToggle = () => {
    // setShowSidebar((prevSidebarState) => !prevSidebarState);
    setHourlyForecast((prevHourlyForecastState) => !prevHourlyForecastState);
    // console.log(showSidebar);
  }
  /* const handleHourlyToggle = () => {
    setHourlyForecast((prevHourlyForecastState) => !prevHourlyForecastState);
    // console.log(hourlyForecast);
  } */

  const handleCelcius = () => {
    // setShowSidebar((prevSidebarState) => !prevSidebarState);
    setCelcius((prevHourlyForecastState) => !prevHourlyForecastState);
    console.log(celcius);
  }

  return (
    <div className="container">
      {/* navbar */}
      <Navbar open={hourlyForecast} toggle={handleToggle} />
      {/* <div className="div"> */}
      <section className="inner" >
        <h1 className="heading">WeapApp</h1>
        {/* Sidebar - visibly hidden on init */}
        {/* Sidebar */}
        <div ref={ref}>
        {/* <Sidebar show={showSidebar} />  */}
        <HourlyForecast celcius={celcius}show={hourlyForecast}/>
        </div>

        <Search />
        {/* Forecast day */}
        <ForecastDay celcius={celcius}/>
        {/* Forecast week */}
        <ForecastWeek celcius={celcius}/>
        {/* table button */}
        <TableButton celcius={celcius} toggle={handleCelcius}/> {/* toggleHourly={handleHourlyToggle} */}
        {/* forcast table with collapsable daily timelapses */}
      </section>
      {/* </div> */}
    </div>
  );
}

export default App;
