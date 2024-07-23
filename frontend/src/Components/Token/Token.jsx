import React from 'react';
import './Token.css';

const Token = ({ setCurrentView }) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        setCurrentView('newpassword')
      }
  return (
    <div className="login_form" >
      <form action="post" onSubmit={handleSubmit}>
        <h1>Enter Token</h1>
        <label htmlFor="token">Token</label><br />
        <input type="text" name="token" placeholder="Enter your token" required /><br />
        <input className="submit" type="submit" value="Verify Token" name="verifyToken" /><br />
      </form>
      <div>
        <h5>Didn't receive a token? <a onClick={() => setCurrentView('forgetPassword')}>Resend Token</a></h5>
      </div>
    </div>
  );
};

export default Token;
