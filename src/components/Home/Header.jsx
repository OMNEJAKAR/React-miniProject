import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Header.css";

function Header()
{
  return (
    <div className="navbar">
      <div className="title">
        <img className="log" src="SEVA2.png" height="100px" width="100px"/>
        <p>Seva</p>
      </div>
        <div className="buttons">
        <nav>
          <Link  to="/" className="border-hover">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/aboutus" className="border-hover">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link  to="/" className="border-hover">Events</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/aboutus" className="border-hover">Profile</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/aboutus" className="border-hover">Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/aboutus" className="border-hover">Wallet</Link>
          
        </nav>

        </div>
        <span className="Login"><Link to="/login" ><h1>Login</h1></Link></span>
        {/* <Login /> */}
    </div>  

);
}

export default Header;
