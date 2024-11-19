import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Header.css";
import image from "../AllImages/SEVA2.png";
<<<<<<< HEAD


=======
>>>>>>> 24215ece94b765ab66762f1dde32998d00f7f09b

function Header()
{
  return (
    <div className="navbar">
      <div className="title">
      <img className="log" src={image} height="100px" width="100px"/>
        <h1>Seva</h1>
      </div>
        <div className="buttons">
          <input type="search" placeholder="search..." style={{padding:"10px",margin:"10px"}}/>
        <nav>
          <Link  to="/" className="border-hover">Home</Link>
          {/* <Link to="/reviewPage" className="border-hover">ReviewPage</Link> */}
<<<<<<< HEAD
          <Link  to="/events" className="border-hover">Events</Link>
          <Link to="/profile" className="border-hover">Profile</Link>
          <Link to="/reviewForm" className="border-hover">Review</Link>
          {/* <Link to="/editProfileForm" className="border-hover">editProfile</Link> */}
=======
          <Link  to="/" className="border-hover">Events</Link>
          <Link to="/profile" className="border-hover">Profile</Link>
          <Link to="/reviewForm" className="border-hover">Review</Link>
<<<<<<< HEAD
          {/* <Link to="/editProfileForm" className="border-hover">editProfile</Link> */}
=======
          <Link to="/aboutus" className="border-hover">Wallet</Link>
>>>>>>> a4275c6d4ab65d5729b984dbcf58ea5cac0765ee
>>>>>>> 24215ece94b765ab66762f1dde32998d00f7f09b
          
        </nav>

        </div>
        <span className="Login"><Link to="/login" ><h1>Login</h1></Link></span>
        {/* <Login /> */}
    </div>  

);
}

export default Header;