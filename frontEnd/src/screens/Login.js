import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Dashboard';

const Login = ({setUser}) => {
const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')

const [userNameErr, setUserNameErr] = useState(false)
const [passwordErr, setPasswordErr] = useState(false)
const navigate = useNavigate()


const validate = () => {
  if(userName === ''){
    setUserNameErr(true)
  }
  if(password === ''){
    setPasswordErr(true)
  }
}

const handleLoginSubmit = async (e) => {
  e.preventDefault()
  validate()
  if(userNameErr || passwordErr){
    return
  }
  const newObj = { username: userName, password }

  try{
    const response = await axios.post(`http://localhost:5000/api/users/login`, newObj)
    setUser(response.data)
    console.log("made post request line 30 in login", response.data);
    localStorage.setItem('todoUser', JSON.stringify(response.data))
    setUserName('')
    setPassword('')
    navigate('dashboard')
    } catch (err) {
      console.log("login line 32", err);
  }

}


  return (
    <div className="mainCard loginContainer"> 
      <form onSubmit={handleLoginSubmit} className="Form loginForm">
        <h3>Login</h3>
        <div className='internalForm'>
          <label>UserName</label>
          <input onFocus={() => setUserNameErr(false)} value={userName} onChange={(e)=> setUserName(e.target.value)} type="text"></input>
         {userNameErr && <p className="errorMessage">Wrong userName! </p>}

        </div>
        <div className='internalForm'>
          <label>Password</label>
          <input onFocus={() => setPasswordErr(false)} value={password} onChange={(e)=> setPassword(e.target.value)} type="password"></input>
         {passwordErr && <p className="errorMessage">Wrong password </p>}
        </div>
        <div className='loginBtn'>
        <p>Dont have an account? <Link to="/signup">Sign up</Link></p>
        <button type='submit' className='btn'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login