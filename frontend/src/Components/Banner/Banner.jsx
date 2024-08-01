import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import axios from 'axios';

const Banner = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [latestBanner, setLatestBanner] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the most recent banner when the component mounts
    const fetchLatestBanner = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/banner/latest');
        if (response.data && response.data.image) {
          setLatestBanner({
            image: response.data.image,
            title: response.data.title,
          });
        }
      } catch (error) {
        console.error('Error fetching the latest banner:', error);
      }
    };

    fetchLatestBanner();
  }, []);

  const handleClick = () => {
    navigate('/searchResult', { state: { location, category, budget } });
  };

  return (
    <div className='banner_position'>
      <section className="banner">
        <div className='banner_dynamic_img'>
          <img 
            src={latestBanner ? latestBanner.image : "../src/assets/images/banner.jpg"} 
            alt={latestBanner ? latestBanner.title : "Banner"} 
          />
          <div className="banner_overlay"></div>
        </div>
        <div className="container">
          <div className="banner_content">
            <div className="content_grid">
              <div className='banner_content_cont'><p>Let Us Find Your Dream</p></div>
              <div className="content_anim">
                <p>Home</p>
                <p>Flat</p>
                <p>Apartment</p>
              </div>
            </div>
          </div>
          {/* Search Box */}
          <div className="search_btn banner_content_cont">
            <select
              className="search_box left"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              {/* Add more options */}
            </select>
            <select
              className="search_box"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {/* Add more options */}
            </select>
            <input
              type="text"
              className="search_box"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Budget"
            />
            <div 
              style={{ cursor: 'pointer' }} 
              className="search_box right" 
              onClick={handleClick}
            >
              Search
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
