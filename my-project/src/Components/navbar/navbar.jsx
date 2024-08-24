import React from 'react'
import './navbar.css'
function navbar() {
  return (
    <header className="header">
        <a href="#" className="logo">LOGO</a>
        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/">Face-test</a>
            <a href="/">About-us</a>
            <a href="/">Contact-us</a>
            <a href="/">Portfolio</a>
        </nav>
    </header>
  )
}

export default navbar