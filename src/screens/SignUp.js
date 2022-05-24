import React, { useState } from 'react'


const SignUp = () => {
   const [first, setFirst] = useState('')
   const [last, setLast] = useState('')
   const [email, setEmail] = useState('')
   const [userName, setUserName] = useState('')
   const [password, setPassword] = useState('')


  return (
    <div>SignUp
        <form>
            <div>
                <label>First Name</label>
                <input value={first} onChange={(e) => setFirst(e.target.value)} type="text"/>
            </div>
            <div>
                <label>Last Name</label>
                <input value={last} onChange={(e) => setLast(e.target.value)} type="text"/>
            </div>
            <div>
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
            </div>
            <div>
                <label>UserName</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text"/>
            </div>
            <div>
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
            </div>
            <button >Submit</button>
        </form>
    </div>
  )
}

export default SignUp