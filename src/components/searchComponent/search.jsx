import React, { useState } from 'react'
import { getWeatherByLocation } from '../../services/weatherService';

export default function Search() {
  const [location, setLocation] = useState('');
  // console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const geo = getWeatherByLocation(location);
    console.log(geo);
    setLocation('');
  }
  return (
    <section className="search-box">
      
      <form className="search-form" action="">
        <input 
        id="search"
        type="text"
        value={location}
        onChange={event => setLocation(event.target.value)}
        aria-labelledby="Search location"
        placeholder="Search location"/>

        <button onClick={handleSubmit} type="submit">Search</button>
      </form>
    </section>
  )
}
