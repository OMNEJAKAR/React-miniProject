import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EditProfile.module.css';
import axios from 'axios';
import Header from './Home/Header';
import Footer from './Home/Footer';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
<<<<<<< HEAD
    address: '',
    description:'',
    profession:'',


=======
    location: '',
>>>>>>> 24215ece94b765ab66762f1dde32998d00f7f09b
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const username = localStorage.getItem('username');
        if (username) {
          const response = await axios.get(`http://localhost:5000/profile/${username}`);
          setFormData({
            username: response.data.username,
            email: response.data.email,
            phone: response.data.phone,
<<<<<<< HEAD
            address: response.data.address || 'San Francisco, CA', // Default value if location is missing
            description:response.data.description,
            profession:response.data.profession
=======
            location: response.data.location || 'San Francisco, CA', // Default value if location is missing
>>>>>>> 24215ece94b765ab66762f1dde32998d00f7f09b
          });
        } else {
          console.error("No username found in localStorage!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
<<<<<<< HEAD
    
    e.preventDefault();
    try {
      axios.put(`http://localhost:5000/profile/${formData.username}`, formData);
      console.log("hello");
      alert('Profile updated successfully!');
      navigate('/profile');
      
=======
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/profile/${formData.username}`, formData);
      alert('Profile updated successfully!');
      navigate('/profile');
>>>>>>> 24215ece94b765ab66762f1dde32998d00f7f09b
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('There was an error updating your profile.');
    }
  };

  return (
    <>
      <Header />
      <div className={styles.editProfileContainer}>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit} className={styles.editProfileForm}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              disabled
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
<<<<<<< HEAD
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="profession">Profession</label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            />
          </div>
          
=======
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
>>>>>>> 24215ece94b765ab66762f1dde32998d00f7f09b
          <button type="submit" className={styles.saveButton}>
            Save Changes
          </button>
        </form>
      </div>
      <div className='footer'>
      <Footer />
      </div>
      
    </>
  );
};

export default EditProfile;
