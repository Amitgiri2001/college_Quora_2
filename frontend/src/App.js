import "./App.css";
import Quora from "./components/Quora";

// for new path setting

import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import { useState } from "react";

function App() {
const loggedIn=window.localStorage.getItem("isLoggedIn");
const name=window.localStorage.getItem("name");
const cname=window.localStorage.getItem("cname");


  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
    {console.log(loggedIn)}
    

      <Router>
        <Routes>
          <Route exact path="/" element={loggedIn ? <Quora name={name} cname={cname} /> : <Login setLoginUser={setLoginUser}/>} />
            
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
            
          
          <Route path="/register" element={<Register />} />

          
            
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
