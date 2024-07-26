import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResult/SearchResult';
import Properties from './pages/Properties/Properties';
import AboutUs from './pages/AboutUs/AboutUs';
import PropertyDetails from './pages/PropertyDetails/PropertyDetails';
import Footer from './Components/Footer/Footer';
import Blog from './pages/Blog/Blog';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Tools from './pages/Tools/Tools';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showNavbarAndFooter = location.pathname !== '/loginPage' && location.pathname !== '/contactUs';

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/loginPage');
  };

  return (
    <div>
      {showNavbarAndFooter && <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/searchResult' element={<SearchResult />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/propertyDetails/:id/*' element={<PropertyDetails />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blogDetails/:id' element={<BlogDetails />} />
        <Route path='/tools' element={<Tools />} />
        <Route path='/contactUs' element={<ContactUsPage />} />
        <Route path='/loginPage' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/profile' element={< ProfilePage/>} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </div>
  );
};

export default App;
