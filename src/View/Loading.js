import React from 'react'
import './Loading.css'
import logo from '../logo.svg'

function Loading() {
  return (
    <div className="Loading">
      <header className="Loading-header">
        <img src={logo} className="React-logo" alt="logo" />
        <h1>Loading</h1>
      </header>
    </div>
  )
}

export default Loading
