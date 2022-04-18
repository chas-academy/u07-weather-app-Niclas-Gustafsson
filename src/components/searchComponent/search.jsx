import React from 'react'

export default function Search() {
  return (
    <section className="search-box">
      
      <form className="search-form" action="">
        <input id="search" type="text" aria-labelledby="Search location" placeholder="Search location"/>

        <button type="submit">Search</button>
      </form>
    </section>
  )
}
