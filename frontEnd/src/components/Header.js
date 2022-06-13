import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Todo's</h1>
      <nav >
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
        <Link className="nav-link" to="/">Login</Link>
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </nav>
    </header>
  )
}

export default Header
