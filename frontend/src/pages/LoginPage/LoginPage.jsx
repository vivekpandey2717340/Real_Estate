
import React, { useState,useEffect } from 'react';
import './LoginPage.css';
import Login from '../../Components/Login/Login';
import SignUp from '../../Components/SignUp/SignUp';
import ForgetPassword from '../../Components/ForgetPassword/ForgetPassword';
import Token from '../../Components/Token/Token';
import NewPassowrd from '../../Components/NewPassowrd/NewPassowrd';
import UpdateForm from '../../Components/UpdateForm/UpdateForm';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
  const location = useLocation();
  const [currentView, setCurrentView] = useState('login');
  useEffect(() => {
    if (location.state && location.state.currentView) {
      setCurrentView(location.state.currentView);
    }
  }, [location.state]);

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
      case 'updateform':
        return <UpdateForm setCurrentView={setCurrentView} />;
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
