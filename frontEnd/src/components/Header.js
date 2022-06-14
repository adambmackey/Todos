import React, { useContext } from 'react'
import { UserContext } from '../App'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({setUser}) => {
  const user = useContext(UserContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('todoUser')
    setUser(null)
   navigate('/')
  }

  return (
    <header>
      <h1>Todo's</h1>
      <nav >
        
        {user ? (
          <>
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
          <span className="nav-link" onClick={handleLogout}>Logout</span>
          </>
        ) : (
          <>
        <Link className="nav-link" to="/">Login</Link>
        <Link className="nav-link" to="/signup">Sign Up</Link>
        </>
        ) }
      </nav>
    </header>
  )
}

export default Header
