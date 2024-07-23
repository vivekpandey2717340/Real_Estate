// Login.jsx (component)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setCurrentView, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="login_form">
      <form action="post" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label><br />
        <input type="email" name="email" placeholder="Username@gmail.com" required /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" name="password" placeholder="Password" required /><br />
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
