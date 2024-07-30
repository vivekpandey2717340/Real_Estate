import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        console.log('Banner Data:', response.data); // Log the response data
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
      {/* 
     
      {latestBanner ? (
        <section className="banner-preview">
          <img src={`http://localhost:4000/uploads/${latestBanner.image}`} alt={latestBanner.title} />
          <h2>{latestBanner.title}</h2>
        </section>
      ) : (
        <p>Loading banner...</p>
      )}
       */}
 {/* <!-- Hero Section --> */}
      <section className="banner">
{/* <<<<<<< HEAD */}
{/* //       {latestBanner ? (
{/* //           <div className="banner_dynamic_img">
//             <img */}
{/* //               src={`http://localhost:4000/uploads/${latestBanner.image}`}
//               //http://localhost:4000/uploads/${latestBanner.image}
//               alt={latestBanner.title}
//             />
//             <div className="banner_overlay">
//               <h2>{latestBanner.title}</h2>
// =======
        
//           <div className='banner_dynamic_img'>
//           <img src="../src/assets/image/banner.jpg" alt="" />
//           <div className="banner_overlay">
          
//           </div>
//         </div>
          // */} 
        {/* {latestBanner ? (
          <div className='banner_dynamic_img'>
          <img src={`http://localhost:4000/uploads/${latestBanner.image}`} alt={latestBanner.title} />
          <div className="banner_overlay">
          <h2>{latestBanner.title}</h2>
>>>>>>> 82859ce6da7372f0168a39f724c4d147bddadbb0
          </div>
        </div>
          ) : (
            <p>Loading banner...</p>
          )} */}
        
        
        <div className="container">
          <div className="banner_content">
            <div className="content_grid">
              <div className='banner_content_cont'><p>Let Us Find Your Dream</p></div>
              <div className="content_anim">
                <p>Home</p>
                <p>Flat</p>
                <p>Appartment</p>
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
                <option value="bhaktapur">Bhaktapur</option>
                <option value="birendranagar">Birendranagar</option>
                <option value="deukhuri">Deukhuri</option>
                <option value="godawari">Godawari</option>
                <option value="hetauda">Hetauda</option>
                <option value="janakpur">Janakpur</option>
                <option value="kathmandu">Kathmandu</option>
                <option value="lalitpur">Lalitpur</option>                        
                <option value="pokhara">Pokhara</option>
            </select>
            <select
              className="search_box"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Home">Home</option>
              <option value="Flat">Flat</option>
              <option value="Apartment">Apartment</option>
            </select>
            <input
              type="text"
              className="search_box"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Budget"
            />
            <div style={{cursor:'pointer'}} className="search_box right" onClick={handleClick}>
               <a >Search</a>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Banner;
