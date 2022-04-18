import React, {useState} from 'react';
import Navbar from './components/navbar/navbar';
import Search from './components/searchComponent/search'

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

        {/* Sidebar - visibly hidden on init */}
        <Search />
        {/* daily data */}
        {/* table button */}
        {/* forcast table with collapsable daily timelapses */}
      </section>
    </div>
  );
}

export default App;
