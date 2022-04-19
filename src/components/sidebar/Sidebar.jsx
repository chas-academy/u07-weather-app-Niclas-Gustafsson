import React from 'react'

export default function Sidebar({ show }) {
  return (
    <section className={`sidebar ${show ? "open" : ''}`}>
        <p>heja</p>
    </section>
  )
}
