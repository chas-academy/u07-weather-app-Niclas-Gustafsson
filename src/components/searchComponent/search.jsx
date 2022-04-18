import React from 'react'

export default function Search() {
  return (
    <section className="search-box">
      <form className="search-form" action="">
        <div className="form-group">

        <label htmlFor="search">Search location</label>
        <input id="search" type="text" placeholder="Search location"/>
        </div>
        <button type="submit">Search</button>
      </form>
    </section>
  )
}
