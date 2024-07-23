// LoginPage.jsx (Page)
import React, { useState } from 'react';
import './LoginPage.css';
import Login from '../../Components/Login/Login';
import SignUp from '../../Components/SignUp/SignUp';
import ForgetPassword from '../../Components/ForgetPassword/ForgetPassword';
import Token from '../../Components/Token/Token';
import NewPassowrd from '../../Components/NewPassowrd/NewPassowrd';
import { Link } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
  const [currentView, setCurrentView] = useState('login');

  const renderComponent = () => {
    switch (currentView) {
      case 'login':
        return <Login setCurrentView={setCurrentView} setIsLoggedIn={setIsLoggedIn} />;
      case 'signup':
        return <SignUp setCurrentView={setCurrentView} />;
      case 'forgetPassword':
        return <ForgetPassword setCurrentView={setCurrentView} />;
      case 'token':
        return <Token setCurrentView={setCurrentView} />;
      case 'newpassword':
        return <NewPassowrd setCurrentView={setCurrentView} />;
      default:
        return <Login setCurrentView={setCurrentView} setIsLoggedIn={setIsLoggedIn} />;
    }
  };

  return (
    <div>
      <section>
        <div id="login_show">
          <div className="login_box">
            <div className="login_image">
              <img src="../src/assets/image/footer.png" alt="" />
            </div>
            <div className="login-body_1">
              <div className="login_body_box">
                <div className="cross_btn">
                  <Link to="/">
                    <i className="fa-solid fa-circle-xmark"></i>
                  </Link>
                </div>
                <div className="logo">
                  <Link to="/">
                    <img src="../src/assets/image/logo.png" alt="" />
                  </Link>
                </div>
                {renderComponent()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
