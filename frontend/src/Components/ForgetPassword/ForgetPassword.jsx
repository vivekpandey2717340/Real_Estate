import React from 'react';
import './ForgetPassword.css';

const ForgetPassword = ({ setCurrentView }) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    setCurrentView('token')
  }
  return (
    <div className="login_form">
      <form action="post" onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
        <label htmlFor="email">Email</label><br />
        <input type="email" name="email" placeholder="Username@gmail.com" required /><br />
        <input className="submit" type="submit" value="Send Reset Link" name="sendResetLink"  /><br />
      </form>
      <div>
        <h5>Remembered your password? <a onClick={() => setCurrentView('login')}>Login</a></h5>
      </div>
    </div>
  );
};

export default ForgetPassword;
