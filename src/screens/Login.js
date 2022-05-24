import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')

  return (
    <div> Login
      <form>
        <div>
          <label>UserName</label>
          <input value={userName} onChange={(e)=> setUserName(e.target.value)} type="text"></input>
        </div>
        <div>
          <label>Password</label>
          <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password"></input>
        </div>
        <button>Login</button>
        <p>Dont have an account? <Link to="/signup">Sign up here</Link></p>
      </form>
    </div>
  )
}

export default Login