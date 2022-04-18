import React, {useState} from 'react';
import Navbar from './components/navbar/navbar';
import Search from './components/searchComponent/search'
import ForecastDay from './components/forecast-day/ForecastDay'

function App() {

  const [showSidebar, setShowSidebar] = useState(false)

  const handleToggle = () => {
    setShowSidebar((prevSidebarState) => !prevSidebarState);
    console.log(showSidebar);
  }

  return (
    <div className="container">
      {/* navbar */}
      <Navbar open={showSidebar} toggle={handleToggle} />

      <section className="inner">
        <h1 className="heading">WeapApp</h1>
        {/* Sidebar - visibly hidden on init */}
        <Search />
        {/* daily data */}
        <ForecastDay />
        {/* table button */}
        {/* forcast table with collapsable daily timelapses */}
      </section>
    </div>
  );
}

export default App;
