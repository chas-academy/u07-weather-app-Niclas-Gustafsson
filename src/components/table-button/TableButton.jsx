import React from 'react'

export default function TableButton({ toggleHourly }) {
  return (
    <button className="table-btn" onClick={toggleHourly}>Table</button>
  )
}
