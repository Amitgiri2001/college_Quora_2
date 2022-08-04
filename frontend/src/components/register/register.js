import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// add all college
import Cname from "../College";
// console.log(college[0].college);

const Register = () => {
  const history = useNavigate();
 
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    college_name:"Choose",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword,college_name } = user;
    if (name && email && password && password === reEnterPassword && college_name ) {
     
      axios.post("/register", user).then((res) => {
        alert(res.data.message);
        // window.localStorage.setItem("name",user.name);
        // window.localStorage.setItem("cname",user.college_name);
        console.log(user.name)
        history("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="register">
      
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      {/* ---------select college-------------- */}
      
      <select className="college_name" name="college_name" onChange={handleChange}>
        {/* {Array.isArray(Cname) &&
          Cname.forEach((name,index,array) => {
            console.log(name);
            <option value={index}>{index}</option>;
          })} */}
          <option value="Uit">Choose college</option>
          <option value="Nit">kolkata </option>
          <option value="mit">bangalore</option>
          <option value="Uit">Uit college</option>
      </select>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="rButton"> 

      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => history("/login")}>
        Login
      </div>
      </div>
    </div>
  );
};

export default Register;
