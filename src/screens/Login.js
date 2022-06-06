import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')

const [userNameErr, setUserNameErr] = useState(false)
const [passwordErr, setPasswordErr] = useState(false)

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
  // const newObj = { username: userName, password }

  // try{
  //   const response = await axios.post(`http://localhost:5000/api/users/login`, newObj)
  //   console.log("made post request line 30 in login", response.data);
  //   } catch (err) {
  //     console.log("login line 32", err);
  // }

  setUserName('')
  setPassword('')
}


  return (
    <div> 
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>UserName</label>
          <input onFocus={() => setUserNameErr(false)} value={userName} onChange={(e)=> setUserName(e.target.value)} type="text"></input>
         {userNameErr && <p className="errorMessage">Wrong userName! </p>}

        </div>
        <div>
          <label>Password</label>
          <input onFocus={() => setPasswordErr(false)} value={password} onChange={(e)=> setPassword(e.target.value)} type="password"></input>
         {passwordErr && <p className="errorMessage">Wrong password </p>}
        </div>
        <button type='submit'>Login</button>
        <p>Dont have an account? <Link to="/signup">Sign up here</Link></p>
      </form>
    </div>
  )
}

export default Login