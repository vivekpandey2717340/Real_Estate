import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './Profile.css'

import axios from 'axios';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: '',
    dob: ''
  });
  
    useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
          const response = await axios.get('http://localhost:4000/api/User/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          
  
          if (response.data.success) {
            setUser(response.data.user);
            setEditMode(false);
          } else {
            console.log(response.data.message);
          }
        } catch (error) {
          console.error('Error fetching user details:',  error.response ? error.response.data : error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUserDetails();
    }, []);
    
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!user) {
      return <p>Error loading user details</p>;
    }
    const handleUpdateProfile = () => {
      navigate('/loginPage', { state: { currentView: 'updateform' } });
    };



  return (
    <div className='container'>
      <div className="profile">
        <div className="profile_grid">
          <div className="profile_content">
            <div className='my_profile'>
              <div>
                <h1 style={{ float: 'left' }}>My Profile</h1>
                <Link to="/wishlist">
                  <h2 style={{ float: 'right', color: 'var(--b)' }}>My Wishlist <img src="../src/assets/image/wishlist.png" alt="" /></h2>
                </Link>
              </div>
              <div style={{ clear: 'both' }}>
                <p>Name</p>
                <span>{user.name}</span><br />
                <hr />
                <p>Email</p>
                <span>{user.email}</span><br />
                <hr />
                <p>Number</p>
                <span>{user.phoneNumber}</span><br />
                <hr />
                <p>Location</p>
                <span>{user.location || 'N/A'}</span><br />
                <hr />
                <p>DOB</p>
                <span>{user.dob || 'N/A'}</span><br />
                <hr />
                <button onClick={handleUpdateProfile}>Update Profile</button>
                
                <Link to="" className='logout'>
                  <button>Log Out</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="profile_photo">
              <div className='profile_photo_cont'>
                  <div className='profile_image'>
                      <img src="../src/assets/image/satish.jpg" alt="" />
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile