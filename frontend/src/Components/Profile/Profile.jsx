import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';
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
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:4000/api/User/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.success) {
          const userData = response.data.user;
          setUser(userData);
          setFormData({
            name: userData.name,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            location: userData.location,
            dob: userData.dob
          });
          setEditMode(false);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.error('Error fetching user details:', error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('http://localhost:4000/api/User/update', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        setUser(response.data.user);
        setEditMode(false);
        alert('Profile updated successfully');
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error('Error updating user profile:', error.response ? error.response.data : error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/loginPage');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Error loading user details</p>;
  }

  return (
    <div className='container'>
      <div className="profile">
        <div className="profile_grid">
          <div className="profile_content">
            <div className='my_profile'>
              <div>
                <h1 style={{ float: 'left' }}>My Profile</h1>
                <Link to="/wishlist">
                  <h2 style={{ float: 'right', color: 'var(--b)' }}>My Wishlist</h2>
                </Link>
              </div>
              <div style={{ clear: 'both' }}>
                {editMode ? (
                  <form onSubmit={handleUpdateProfile}>
                    <p>Name</p>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} /><br />
                    <p>Email</p>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} /><br />
                    <p>Phone Number</p>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} /><br />
                    {/* <p>Location</p>
                    <input type="text" name="location" value={formData.location} onChange={handleInputChange} /><br />
                    <p>DOB</p>
                    <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} /><br /> */}
                    <button type="submit">Save</button>
                  </form>
                ) : (
                  <>
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
                    <button onClick={() => setEditMode(true)}>Edit Profile</button>
                  </>
                )}
                
                {!editMode && (
                  <button onClick={handleLogout}>Log Out</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
