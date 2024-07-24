import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

const SignUp = ({ setCurrentView }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/user/register', {
        name,
        email,
        phoneNumber,
        password,
      });

      if (response.data.success) {
        setCurrentView('login');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className="login_form">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {error && <p className="error">{error}</p>}
        <label htmlFor="name">Name</label><br />
        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
        <label htmlFor="email">Email</label><br />
        <input type="email" name="email" placeholder="Username@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <label htmlFor="number">Phone Number</label><br />
        <input type="text" name="number" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
        <label htmlFor="C-password">Confirm Password</label><br />
        <input type="password" name="C-password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required /><br />
        <input className="submit" type="submit" value="Submit" name="signupSubmit" /><br />
      </form>
      <div>
        <h5>Already have an account? <a onClick={() => setCurrentView('login')}>Login</a></h5>
      </div>
    </div>
  );
};

export default SignUp;
