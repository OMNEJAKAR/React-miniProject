import React from "react";
import { BrowserRouter  as Router, Routes,Route}  from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile";
import Reviews from "./components/Reviews";
<<<<<<< HEAD
import EditProfile from "./components/EditProfile";
import ReviewsPage from "./components/ReviewsPage";
import EventPage from "./components/Events";
=======
<<<<<<< HEAD
import EditProfile from "./components/EditProfile";
import ReviewsPage from "./components/ReviewsPage";
=======
>>>>>>> a4275c6d4ab65d5729b984dbcf58ea5cac0765ee
>>>>>>> 24215ece94b765ab66762f1dde32998d00f7f09b
import "./App.css";
function App()
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviewPage" element={<ReviewsPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/reviewForm" element={<Reviews/>}/>
<<<<<<< HEAD
        <Route path="/editProfileForm" element={<EditProfile/>}/>
        <Route path="/events" element={<EventPage/>}/>
=======
<<<<<<< HEAD
        <Route path="/editProfileForm" element={<EditProfile/>}/>
=======
>>>>>>> a4275c6d4ab65d5729b984dbcf58ea5cac0765ee

>>>>>>> 24215ece94b765ab66762f1dde32998d00f7f09b
      </Routes>
    </Router>
    
  );
}

export default App;