import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [userNameErr, setUserNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);

  const navigate = useNavigate()

  const validate = () => {
    if (first === "") {
      setFirstNameErr(true);
    }
    if (last === "") {
      setLastNameErr(true);
    }
    if (email === "") {
      setEmailErr(true);
    }
    if (userName === "") {
      setUserNameErr(true);
    }
    if (password === "") {
      setPasswordErr(true);
    }
    if (confirmPassword !== password) {
      setConfirmPasswordErr(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     validate();
  

  
    if (
      firstNameErr === true ||
      lastNameErr  === true ||
      emailErr  === true ||
      userNameErr  === true ||
      passwordErr  === true ||
      confirmPasswordErr  === true
    ) { console.log('error here')
      return;
    
    }
   

    const newObj = {first: first, last: last, email: email, username: userName, password: password}

    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/signup`, newObj
      );
      console.log("made post request line 59 in signUp", response.data);
      setFirst('')
      setLast('')
      setEmail('')
      setUserName('')
      setPassword('')
      setConfirmPassword('')
      navigate('/dashboard')
    } catch (err) {
      console.log("signup line 61", err);
    }

  };

  return (
    <div className="new-expense__controls mainCard loginContainer">
      
      <form onSubmit={handleSubmit} className="Form signUpForm">
        <h3>Sign Up</h3>
        <div className="names">
        <div className="internalForm">
          <label>First Name</label>
          <input
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            type="text"
            onFocus={() => setFirstNameErr(false)}
          />
          {firstNameErr && (
            <p className="errorMessage">First name is required you dingus!!</p>
          )}
        </div>

        <div className="internalForm">
          <label>Last Name</label>
          <input
            value={last}
            onChange={(e) => setLast(e.target.value)}
            type="text"
            onFocus={() => setLastNameErr(false)}
          />
          {lastNameErr && (
            <p className="errorMessage">Last name is required dude!!</p>
          )}
        </div>
        </div>
        <div className="internalForm">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            onFocus={() => setEmailErr(false)}
          />
          {emailErr && (
            <p className="errorMessage">Email is required you dipstick!!</p>
          )}
        </div>
        <div className="internalForm">
          <label>UserName</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            onFocus={() => setUserNameErr(false)}
          />
          {userNameErr && <p className="errorMessage">Username is required!</p>}
        </div>
        <div className="internalForm">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            onFocus={() => setPasswordErr(false)}
          />
          {passwordErr && (
            <p className="errorMessage">
              its required... no getting around it.{" "}
            </p>
          )}
        </div>
        <div className="internalForm">
          <label>Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            onFocus={() => setConfirmPasswordErr(false)}
          />
          {confirmPasswordErr && (
            <p className="errorMessage">
              CONFIRM YOUR FREAKING PASSWORD IDIOT!!!{" "}
            </p>
          )}
        </div>
        <div className='loginBtn'>
        <p>Already have an account? <Link to="/">Login</Link></p>
        <button type='submit' className='btn'>Sign Up</button>
        </div>

      </form>
    </div>
  );
};

export default SignUp;
