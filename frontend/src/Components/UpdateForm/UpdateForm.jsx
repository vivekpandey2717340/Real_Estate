import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");      
    }
  return (
    <div className="login_form">
      <form onSubmit={handleSubmit}>
        <h1>Update Profile</h1>
        <label htmlFor="name">Name</label><br />
        <input type="text" name="name" placeholder="Name" /><br />
        <label htmlFor="email">Email</label><br />
        <input type="email" name="email" placeholder="Username@gmail.com" /><br />
        <label htmlFor="number">Phone Number</label><br />
        <input type="text" name="number" placeholder="Phone Number" /><br />        
        <label htmlFor="address">Address</label><br />
        <input type="text" name="address" placeholder="Address" /><br />        
        <input className="submit" type="submit" value="Update" name="updateSubmit" /><br />
      </form>
      
    </div>
  );
};



export default UpdateForm