import React from 'react';
import './SignUp.css';

const SignUp = ({ setCurrentView }) => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    setCurrentView('login')
  }
  return (
    <div className="login_form">
      <form action="post" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="name">Name</label><br />
        <input type="text" name="name" placeholder="Name" required /><br />
        <label htmlFor="email">Email</label><br />
        <input type="email" name="email" placeholder="Username@gmail.com" required /><br />
        <label htmlFor="number">Phone Number</label><br />
        <input type="number" name="number" placeholder="Phone Number" required/><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" name="password" placeholder="Password" required/><br />
        <label htmlFor="C-password">Confirm Password</label><br />
        <input type="password" name="C-password" placeholder="Confirm Password" required/><br />
        <input className="submit" type="submit" value="Submit" name="signupSubmit" /><br />
      </form>
      <div>
        <h5>Already have an account? <a onClick={() => setCurrentView('login')}>Login</a></h5>
      </div>
    </div>
  );
};

export default SignUp;
