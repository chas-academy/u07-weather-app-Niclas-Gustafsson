import React, {useEffect, useState, useRef} from 'react';
import Navbar from './components/navbar/navbar';
import Search from './components/searchComponent/search'
import ForecastDay from './components/forecast-day/ForecastDay'
import ForecastWeek from './components/forecast-week/forecastWeek';
import TableButton from './components/table-button/TableButton';
import Sidebar from './components/sidebar/Sidebar';
//observables
// import { weather$, getLocation } from './services/weatherService';

function App() {

  const ref = useRef();
  const [showSidebar, setShowSidebar] = useState(false);
  /* const [weather, setWeather] = useState({});

  useEffect(() => {
    getLocation();
    weather$.subscribe(data => setWeather(data))
  }, [])
  console.log(weather); */

  useEffect(() => {
    const closeSidebar = (e) => {
      if(showSidebar && ref.current && !ref.current.contains(e.target)) {
        setShowSidebar(false);
        // console.log(showSidebar);
      }
    }
    document.addEventListener("mousedown", closeSidebar)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", closeSidebar)
    }
  }, [showSidebar]);

  const handleToggle = () => {
    setShowSidebar((prevSidebarState) => !prevSidebarState);
    // console.log(showSidebar);
  }

  return (
    <div className="container">
      {/* navbar */}
      <Navbar open={showSidebar} toggle={handleToggle} />
      {/* <div className="div"> */}
      <section className="inner" >
        <h1 className="heading">WeapApp</h1>
        {/* Sidebar - visibly hidden on init */}
        {/* Sidebar */}
        <div ref={ref}>
        <Sidebar show={showSidebar} /> 
        </div>

        <Search />
        {/* Forecast day */}
        <ForecastDay />
        {/* Forecast week */}
        <ForecastWeek />
        {/* table button */}
        <TableButton />
        {/* forcast table with collapsable daily timelapses */}
      </section>
      {/* </div> */}
    </div>
  );
}

export default App;
