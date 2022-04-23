import React from 'react';

export default function TableButton({ celcius, toggle }) {
  return (
    <button className="table-btn" onClick={toggle}>{celcius ? 'Convert to F°': 'Convert to C°'}</button>
  )
}
