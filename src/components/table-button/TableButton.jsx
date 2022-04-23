import React from 'react';
import { tempConverter } from '../../helpers/helperFunctions';

export default function TableButton({ celcius, toggle }) {

 /*  const handleCelcius = (celcius) => {

  } */
  return (
    <button className="table-btn" onClick={toggle}>{celcius ? 'Convert to F°': 'Convert to C°'}</button>
  )
}
