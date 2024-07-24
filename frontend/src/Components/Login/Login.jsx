import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = ({ setCurrentView, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/user/login', { email, password });
      if (response.data.success) {
        setIsLoggedIn(true);
        localStorage.setItem('token', response.data.token); // Store token in localStorage
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login_form">
      <form action="post" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <label htmlFor="email">Email</label><br />
        <input
          type="email"
          name="email"
          placeholder="Username@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <label htmlFor="password">Password</label><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <input className="submit" type="submit" value="Login" name="login" /><br />
      </form>
      <div>
        <a onClick={() => setCurrentView('forgetPassword')} className="forgot">Forgot Password?</a>
        <p>Or Continue With</p>
        <ul>
          <li><a href="">Google</a></li>
          <li><a href="">Facebook</a></li>
        </ul>
        <h5>Don't have an account? <a onClick={() => setCurrentView('signup')}>Register For Free</a></h5>
      </div>
    </div>
  );
};

export default Login;
