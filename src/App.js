import React, {useEffect, useState, useRef} from 'react';
import Navbar from './components/navbar/navbar';
import Search from './components/searchComponent/search'
import ForecastDay from './components/forecast-day/ForecastDay'
import ForecastWeek from './components/forecast-week/forecastWeek';
import TableButton from './components/table-button/TableButton';
//import Sidebar from './components/sidebar/Sidebar';
import HourlyForecast from './components/hourly-forecast/HourlyForecast';


function App() {

  const ref = useRef();
  /* const [showSidebar, setShowSidebar] = useState(false); */
  const [hourlyForecast, setHourlyForecast] = useState(false);
  const [celcius, setCelcius] = useState(false);

  useEffect(() => {

  }, [ hourlyForecast]); //showSidebar,

  const handleToggle = () => {
    setHourlyForecast((prevHourlyForecastState) => !prevHourlyForecastState);
  }

  const handleCelcius = () => {
    setCelcius((prevHourlyForecastState) => !prevHourlyForecastState);
  }

  return (
    <div className="container">
      <Navbar open={hourlyForecast} toggle={handleToggle} />
      <section className="inner" >
        <h1 className="heading">WeapApp</h1>
        <div ref={ref}>
        <HourlyForecast celcius={celcius}show={hourlyForecast}/>
        </div>
        <Search />
        <ForecastDay celcius={celcius}/>
        <ForecastWeek celcius={celcius}/>
        <TableButton celcius={celcius} toggle={handleCelcius}/> {/* toggleHourly={handleHourlyToggle} */}
      </section>
    </div>
  );
}

export default App;
