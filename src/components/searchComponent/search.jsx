import React from 'react'

export default function Search() {
  return (
    <section className="search-box">
      <form className="search-form" action="">
        <label htmlFor="search">Search location</label>
        <input id="search" type="text" placeholder="Search location"/>
        <button type="submit">Search</button>
      </form>
    </section>
  )
}
