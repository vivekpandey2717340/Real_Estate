
import React, { useContext } from 'react';
import './PropertyItem.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const PropertyItem = ({ id, name, price, location, content, area, mainImage, saleImage }) => {
  const { addToCompareList, compareList, addToWishlist, wishlist, setIsCompareClicked } = useContext(StoreContext);

  const isComparelist = compareList.some(item => item.id === id);
  const toggleComparelist = (e) => {
    e.preventDefault();
    const property = { id, name, price, location, area, mainImage };
    addToCompareList(property);
    setIsCompareClicked(true);
  };

  const isWishlistItem = wishlist.some(item => item.id === id);
  const toggleWishlist = (e) => {
    e.preventDefault();
    const property = { id, name, price, location, content, area, mainImage, saleImage };
    addToWishlist(property);
  };

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
                  <li id="compare" style={{ marginRight: '5px' }} className={isComparelist ? 'compare_active' : ''}>
                    <a onClick={toggleComparelist}>
                      <i className="fa-solid fa-code-compare"></i>
                    </a>
                  </li>
                  <li id="wishlist" className={isWishlistItem ? 'wish_active' : ''}>
                    <a id="wish_btn" onClick={toggleWishlist}>
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
