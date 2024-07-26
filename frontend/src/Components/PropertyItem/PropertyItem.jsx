import React, { useState } from 'react';
import './PropertyItem.css';
import { Link } from 'react-router-dom';

const PropertyItem = ({ id, name, price, location, content, area, mainImage, saleImage }) => {
  // State to track if the item is in the wishlist
  const [isWishlist, setIsWishlist] = useState(false);
  const [isCompare, setCompare]= useState(false)

  // Function to toggle the wishlist state and compare btn
  const toggleWishlist = () => {
    setIsWishlist(prevState => !prevState);
  };
  const togglecompare=()=>{
    setCompare(prevState=> !prevState)
  }


  return (
    <>
      <Link to={`/propertyDetails/${id}`} style={{ textDecoration: 'none', color: 'var(--b)' }}>
        <div className="new_properties_box">
          <div className="image">
            <img src={mainImage} alt="" />
            <div className="sale_img">
              <img src={saleImage} alt="" />
            </div>
            <div className="price">
              <div className="price_grid" style={{ float: 'left' }}>
                <h4 id="price">{price}</h4>
              </div>
              <div style={{ float: 'right' }}>
                <ul>
                  <li id="compare" style={{ marginRight: '5px' }} className={isCompare ? 'compare_active' : ''}>
                    <a onClick={(e) => { e.preventDefault(); togglecompare(); }}><i className="fa-solid fa-code-compare"></i></a>
                  </li>
                  <li id="wishlist" className={isWishlist ? 'wish_active' : ''}>
                    <a id="wish_btn" onClick={(e) => { e.preventDefault(); toggleWishlist(); }}>
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content_cont">
              <h5 id="type">{name}</h5>
              <h4 id="content">{content}</h4>
              <p id="location"><i className="fa-solid fa-location-dot"></i>{location}</p>
              <p id="area"><i className="fa-solid fa-chart-area"></i>{area}</p>
              <div className="details">
                <a>View Details</a>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PropertyItem;
