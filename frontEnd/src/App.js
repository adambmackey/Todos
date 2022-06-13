import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Dashboard from './screens/Dashboard'
import List from './screens/List'
import Header from "./components/Header";

function App() {
  return <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" exact element={<Login/>} />
    <Route path="/dashboard" exact element={<Dashboard/>} />
    <Route path="/signup" exact element={<SignUp/>} />
    <Route path="/list/:id" exact element={<List/>} />
   
    </Routes>
  </BrowserRouter>
}

export default App;
