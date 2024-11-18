import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from "./Home/Header";
import Footer from './Home/Footer';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const username = localStorage.getItem('username');
        console.log("Username from localStorage:", username);
        if (username) {
          const response = await axios.get(`http://localhost:5000/profile/${username}`);
          console.log("Fetched user data:", response.data);
          setUserData(response.data);
        } else {
          console.error("No username found in localStorage!");
        }
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    fetchUserData();
  }, []);

  // Conditional rendering to handle `userData` being null
  if (!userData) {
    return (
      <>
        <Header />
        <div className={styles.profileContainer}>
          <h2>Loading user data...</h2>
        </div>
        <Footer />
      </>
    );
  }

  const handleEditProfile = () => {
    navigate('/editProfileForm');
  };

  const handleViewReviews = () => {
    navigate(`/reviewPage`);
  };

  return (
    <>
      <Header />
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <div className={styles.profileHeader}>
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className={styles.profileImage}
            />
            <h1 className={styles.profileName}>{userData.username}</h1>
            <p className={styles.profileTitle}>Full Stack Developer</p>
            <p className={styles.profileBio}>
              Passionate developer with a knack for building impactful web applications. Specializing in front-end and back-end development with a focus on user experience.
            </p>
          </div>
          <div className={styles.profileDetails}>
            <div className={styles.profileInfo}>
              <FaEnvelope className={styles.icon} />
              <span>{userData.email}</span>
            </div>
            <div className={styles.profileInfo}>
              <FaPhone className={styles.icon} />
              <span>{userData.phone}</span>
            </div>
            <div className={styles.profileInfo}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>San Francisco, CA</span>
            </div>
          </div>
          <div className={styles.profileButtons}>
            <button
              className={styles.profileButton}
              onClick={handleEditProfile}
            >
              Edit Profile
            </button>
            <button
              className={styles.profileButton}
              onClick={handleViewReviews}
            >
              View Reviews
            </button>
          </div>

          <div className={styles.profileSocial}>
            <a href="https://linkedin.com" className={styles.socialIcon}>
              <FaLinkedin />
            </a>
            <a href="https://github.com" className={styles.socialIcon}>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
