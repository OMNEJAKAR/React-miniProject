import React from 'react';
import styles from './Profile.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from "./Home/Header";
import { useState,useEffect } from 'react';
import axios from 'axios';
const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const username = localStorage.getItem('username');
        console.log(username);
        if (username) {
          const response = await axios.get(`http://localhost:5000/reviews/${username}`);
          console.log(response.data);
          setUserData(response.data);
        }
        else {
          console.error("No user_id found in localStorage!");
        }
      } catch (error) { console.error("There was an error fetching the data!", error); }
    }; fetchUserData();
  }, []);
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
              <span>johndoe@example.com</span>
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
    </>
  );
};

export default Profile;
