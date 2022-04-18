import React from 'react'

export default function Navbar({open, toggle}) {
  return (
    <nav className="nav">
        <div className="hamburger" onClick={toggle}>
            <span className={`hamburger__lines ${open ? "open" : ''}`}></span>
        </div>

        {/* <ul className="navigation">
            <li className="__item">Item 1</li>
            <li className="__item">Item 2</li>
            <li className="__item">Item 3</li>
            <li className="__item">Item 4</li>
        </ul> */}
    </nav>
  )
}
