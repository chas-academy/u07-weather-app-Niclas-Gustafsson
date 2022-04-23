import React from 'react'

export default function Navbar({open, toggle}) {
  return (
    <nav className="nav">
        <div className="hamburger" onClick={toggle}>
            <span className={`hamburger__lines ${open ? "open" : ''}`}></span>
        </div>
    </nav>
  )
}
