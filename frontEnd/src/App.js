import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, createContext, useState } from 'react';
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Dashboard from './screens/Dashboard'
import List from './screens/List'
import Header from "./components/Header";
export const UserContext = createContext()

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const userFromStorage = localStorage.getItem('todoUser')
    if(userFromStorage) {
      setUser(JSON.parse(userFromStorage))
    }
  },[])
  return <BrowserRouter>
  <UserContext.Provider value={user}>
    <div className="container">
    <Header setUser={setUser}/>
    <Routes>
    <Route path="/" exact element={<Login/>} />
    <Route path="/dashboard" exact element={<Dashboard/>} />
    <Route path="/signup" exact element={<SignUp/>} />
    <Route path="/list/:id" exact element={<List/>} />
   
    </Routes>
    </div>
    </UserContext.Provider>
  </BrowserRouter>
}

export default App;
