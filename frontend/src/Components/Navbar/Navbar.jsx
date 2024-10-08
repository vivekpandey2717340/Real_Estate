import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn }) => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuActive, setMenuActive] = useState(false)

  const handleNavigation = (category) => {
    navigate('/tools', { state: { category } });
    setMenu('tools');
  };

  const handleProperty = (proCategory)=>{
    navigate('/properties', {state:{proCategory}})
    setMenu('properties')
  }

  const handleScroll = () => {
    if (window.scrollY > 10) {
      document.querySelector('.navbar').style.background = '#fff';
      document.querySelector('.mobile_nav').style.background = '#fff';
      
    } else {
      document.querySelector('.navbar').style.background = 'none';
      document.querySelector('.mobile_nav').style.background = 'none';
      
    }
  };

 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setMenu('Home');
    } else if (path.startsWith('/searchResult')) {
      setMenu('properties');
    } else if (path.startsWith('/propertyDetails')) {
      setMenu('properties');
    } else if (path.startsWith('/aboutUs')) {
      setMenu('about-us');
    } else if (path.startsWith('/blogDetails')) {
      setMenu('blog');
    } else if (path.startsWith('/blogs')) {
      setMenu('blog');
    } else if (path.startsWith('/tools')) {
      setMenu('tools');
    } else if (path.startsWith('/wishlist')) {
      setMenu('wishlist');
    } else if (path.startsWith('/profile')) {
      setMenu('profile');
    } else if (path.startsWith('/contactUs')) {
      setMenu('contact-us');
    } else {
      setMenu('');
    }
  }, [location.pathname]);

  const toggleMenu =()=>{
      setMenuActive(!isMenuActive)
  }

  return (
    <div>
      <header style={{ zIndex: '999999' }}>
        <div className="navbar">
          <div className="nav_content container">
            <div className="logo_desktop">
              <Link to="/" >
                <img src="../src/assets/image/logo.png" alt="Logo" id="logo_desktop" />
              </Link>
            </div>
            <div style={{ width: '100%' }}>
              <nav id="nav">
                <ul>
                  <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
                    <Link to="/" >
                      <a className="nav_color" >Home</a>
                    </Link>
                  </li>
                  <li onClick={() => setMenu("properties")} className={`${menu === "properties" ? "active" : ""} dropdown`}>
                    <a className="nav_color">Properties <i className="fa-solid fa-caret-down"></i></a>
                    <ul className="dropdown_menu">
                      <Link to="/searchResult">
                        <li>                          
                            <a className="dropdown_menu_p">Home</a>                          
                        </li>
                      </Link>
                      <Link to="/searchResult">
                        <li>                          
                            <a className="dropdown_menu_p">Flat</a>                          
                        </li>
                      </Link>
                      <Link to="/searchResult">
                        <li>
                            <a className="dropdown_menu_p">Appartment</a>
                        </li>
                      </Link>
                      <li className="sub-dropdown">
                        <a href="#" className="dropdown_menu_p">All Properties<i className="fa-solid fa-caret-right" style={{ marginLeft: '30px' }}></i></a>
                        <ul className="sub-dropdown-menu">
                            <li onClick={()=> handleProperty('All')}>
                            <Link to="/properties" state={{ proCategory: 'All' }}>All</Link>
                            </li>
                          
                            <li onClick={()=> handleProperty('Hot Selling')}>
                            <Link to="/properties" state={{ proCategory: 'Hot Selling' }}>Hot Selling</Link>
                            </li>
                          
                          
                            <li onClick={()=> handleProperty('Featured')}>
                            <Link to="/properties" state={{ proCategory: 'Featured' }}>Featured</Link>
                            </li>
                          
                          
                            <li onClick={()=> handleProperty('Premium Properties')}>
                            <Link to="/properties" state={{ proCategory: 'Premium Properties' }}>Premium</Link>
                            </li>
                          
                          
                            <li onClick={()=> handleProperty('New Properties')}>
                            <Link to="/properties" state={{ proCategory: 'New Properties' }}>New Properties</Link>
                            </li>
                          
                          
                            
                          
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li onClick={() => setMenu("about-us")} className={menu === "about-us" ? "active" : ""}>
                    <Link to="/aboutUs" >
                      <a className="nav_color" >About Us</a>
                    </Link>  
                  </li>
                  <li onClick={() => setMenu("blog")} className={menu === "blog" ? "active" : ""}>
                    <Link to="/blogs" >
                      <a className="nav_color" >Blogs</a>
                    </Link>
                  </li>
                  <li onClick={() => setMenu("tools")} className={`${menu === "tools" ? "active" : ""} dropdown`}>
                    <a className="nav_color">Tools <i className="fa-solid fa-caret-down"></i></a>
                    <ul className="dropdown_menu">
                      <li onClick={() => handleNavigation('EMI')}>
                        <a className="dropdown_menu_p">EMI</a>
                      </li>
                      <li onClick={() => handleNavigation('Currency Converter')}>
                        <a className="dropdown_menu_p">Currency Converter</a>
                      </li>
                      <li onClick={() => handleNavigation('Unit Converter')}>
                        <a className="dropdown_menu_p">Unit Converter</a>
                      </li>
                      <li onClick={() => handleNavigation('Home Loan')}>
                        <a className="dropdown_menu_p">Home Loan</a>
                      </li>
                    </ul>
                  </li>
                  <li onClick={() => setMenu("contact-us")} className={`${menu === "contact-us" ? "active" : ""} ${!isLoggedIn ? "menu_hidden" : ""}`}>
                    <Link to="/contactUs">
                        <a  className="nav_color">Contact Us</a>
                    </Link>
                  </li>
                  
                  <li className={`login_btn ${isLoggedIn ? "menu_hidden" : ""}`}>
                    <Link to="/loginPage">
                      <a className="nav_color">Login</a>                      
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='nav_btn'>
              <ul >
                <li onClick={() => setMenu("wishlist")} className={`${menu === "wishlist" ? "active" : ""} ${!isLoggedIn ? "menu_hidden" : ""} menu_overlay `}>
                  <Link to="/wishlist">
                    <a  className="nav_color"><img src="../src/assets/image/wishlist_bg.jpg" alt="" /></a>
                    <span >Wishlist</span>
                  </Link>
                </li>
                <li onClick={() => setMenu("profile")} className={`${menu === "profile" ? "active" : ""} ${!isLoggedIn ? "menu_hidden" : ""} dropdown `}>
                  <a  className="nav_color"><img src="../src/assets/image/user-bg.jpg" alt="" /></a>
                    <ul className="dropdown_menu">
                      <Link to="/profile">
                        <li>                          
                            <a className="dropdown_menu_p">Profile</a>                          
                        </li>
                      </Link>
                     
                    </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className='mobile_nav'>   
            <div className='nav_content container'>    
              <div className={`hamburg_menu ${isMenuActive ? 'menuActive' : ''}`} onClick={toggleMenu}>
                  <div className='menu_1'></div>
                  <div className='menu_2'></div>
                  <div className='menu_3'></div>
              </div> 
              <div className="logo_desktop">
                <Link to="/" >
                  <img src="../src/assets/image/state.png" alt="Logo" id="logo_desktop" />
                </Link>
              </div>
              <div className='nav_btn'>
                <ul >
                  <li onClick={() => setMenu("wishlist")} className={`${menu === "wishlist" ? "active" : ""} ${!isLoggedIn ? "menu_hidden" : ""} menu_overlay `}>
                    <Link to="/wishlist">
                      <a  className="nav_color"><img src="../src/assets/image/wishlist_bg.jpg" alt="" /></a>
                      {/* <span >Wishlist</span> */}
                    </Link>
                  </li>
                  <li onClick={() => setMenu("profile")} className={`${menu === "profile" ? "active" : ""} ${!isLoggedIn ? "menu_hidden" : ""} dropdown `}>
                    <Link to="/profile">
                    <a  className="nav_color"><img src="../src/assets/image/user-bg.jpg" alt="" /></a>
                    </Link>
                      {/* <ul className="dropdown_menu">
                        <Link to="/profile">
                          <li>                          
                              <a className="dropdown_menu_p">Profile</a>                          
                          </li>
                        </Link>
                        <Link to="/">
                          <li>                          
                              <a className="dropdown_menu_p">Log Out</a>                          
                          </li>
                        </Link>
                      </ul> */}
                  </li>
                </ul>
              </div>
              

            </div> 
            
          </div>
          <div style={{ width: '100%' }}>
            <nav  className={`nav_mobile ${isMenuActive ? 'leftMobile' : ''}`}>
              <ul className='container'>
                <li onClick={() => {toggleMenu(); setMenu("Home")}} className={menu === "Home" ? "active" : ""}>
                  <Link to="/" >
                    <a className="nav_color" >Home</a>
                  </Link>
                </li>
                <li onClick={() => setMenu("properties")} className={`${menu === "properties" ? "active" : ""} dropdown`}>
                  <a className="nav_color">Properties <i className="fa-solid fa-caret-down"></i></a>
                  <ul className="dropdown_menu" style={{zIndex:'9999999'}}>
                    <Link to="/searchResult">
                      <li onClick={toggleMenu}>                          
                          <a className="dropdown_menu_p">Home</a>                          
                      </li>
                    </Link>
                    <Link to="/searchResult">
                      <li onClick={toggleMenu}>                          
                          <a className="dropdown_menu_p">Flat</a>                          
                      </li>
                    </Link>
                    <Link to="/searchResult">
                      <li onClick={toggleMenu}>
                          <a className="dropdown_menu_p">Appartment</a>
                      </li>
                    </Link>
                    <li className="sub-dropdown">
                      <a href="#" className="dropdown_menu_p">All Properties<i className="fa-solid fa-caret-right" style={{ marginLeft: '30px'}}></i></a>
                      <ul className="sub-dropdown-menu">
                      <li onClick={()=> {toggleMenu(); handleProperty('All')}}>
                        <Link to="/properties" state={{ proCategory: 'All' }}>All</Link>
                        </li>
                        <li onClick={()=> {toggleMenu(); handleProperty('Hot Selling')}}>
                        <Link to="/properties" state={{ proCategory: 'Hot Selling' }}>Hot Selling</Link>
                        </li>
                      
                      
                        <li onClick={()=> {toggleMenu(); handleProperty('Featured')}}>
                        <Link to="/properties" state={{ proCategory: 'Featured' }}>Featured</Link>
                        </li>
                      
                      
                        <li onClick={()=> {toggleMenu(); handleProperty('Premium Properties')}}>
                        <Link to="/properties" state={{ proCategory: 'Premium Properties' }}>Premium</Link>
                        </li>
                      
                      
                        <li onClick={()=> {toggleMenu(); handleProperty('New Properties')}}>
                        <Link to="/properties" state={{ proCategory: 'New Properties' }}>New Properties</Link>
                        </li>
                      
                      
                        
                      </ul>
                    </li>
                  </ul>
                </li>
                <li onClick={() => {toggleMenu(); setMenu("about-us")}} className={menu === "about-us" ? "active" : ""}>
                  <Link to="/aboutUs" >
                    <a className="nav_color" >About Us</a>
                  </Link>  
                </li>
                <li onClick={() => {toggleMenu(); setMenu("blog")}} className={menu === "blog" ? "active" : ""}>
                  <Link to="/blogs" >
                    <a className="nav_color" >Blogs</a>
                  </Link>
                </li>
                <li onClick={() => setMenu("tools")} className={`${menu === "tools" ? "active" : ""} dropdown`} style={{zIndex:'999'}}>
                  <a className="nav_color">Tools <i className="fa-solid fa-caret-down"></i></a>
                  <ul className="dropdown_menu">
                    <li onClick={() => {toggleMenu(); handleNavigation('EMI')}}>
                      <a className="dropdown_menu_p">EMI</a>
                    </li>
                    <li onClick={() => { toggleMenu(); handleNavigation('Currency Converter')}}>
                      <a className="dropdown_menu_p">Currency Converter</a>
                    </li>
                    <li onClick={() => {toggleMenu();handleNavigation('Unit Converter')}}>
                      <a className="dropdown_menu_p">Unit Converter</a>
                    </li>
                    <li onClick={() =>{toggleMenu(); handleNavigation('Home Loan')}}>
                      <a className="dropdown_menu_p">Home Loan</a>
                    </li>
                  </ul>
                </li>
                <li onClick={() => { toggleMenu();setMenu("contact-us")}} className={`${menu === "contact-us" ? "active" : ""} ${!isLoggedIn ? "menu_hidden" : ""}`}>
                  <Link to="/contactUs">
                      <a  className="nav_color">Contact Us</a>
                  </Link>
                </li>
                
                <li className={`login_btn ${isLoggedIn ? "menu_hidden" : ""}`}>  
                  <Link to="/loginPage">
                    <a className="nav_color">Login</a>                      
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
