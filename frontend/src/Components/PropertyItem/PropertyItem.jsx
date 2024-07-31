
import React, { useContext } from 'react';
import './PropertyItem.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const PropertyItem = ({ id, title, price, address, content, area, images, saleImage, roadAccess }) => {
  const { addToCompareList, compareList, addToWishlist, wishlist, setIsCompareClicked } = useContext(StoreContext);
  console.log(images);
  const isComparelist = compareList.some(item => item.id === id);
  const toggleComparelist = (e) => {
    e.preventDefault();
    const property = { id, title, price, address, area, images };
    addToCompareList(property);
    setIsCompareClicked(true);
  };

  const isWishlistItem = wishlist.some(item => item.id === id);
  const toggleWishlist = (e) => {
    e.preventDefault();
    const property = { id, title, price, address, content, area, images, saleImage,roadAccess };
    addToWishlist(property);
  };
  const imageUrl = Array.isArray(images) && images.length > 0 ? `http://backend/uploads/${images[0]}` : defaultImageUrl;

  return (
    <>
      <Link to={`/propertyDetails/${id}`} style={{ textDecoration: 'none', color: 'var(--b)' }}>
        <div className="new_properties_box">
            <div className="image">
              <img src={imageUrl} alt="abc" />
              {console.log("imageUrl")}
              <div className="sale_img">
                <img src="../src/assets/image/sale.jpg" alt="" />
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
              <h5 id="type">{title}</h5>
              <h4 id="content">{content}</h4>
              <p id="address"><i className="fa-solid fa-location-dot"></i>{address}</p>
              <p id="area"><i className="fa-solid fa-chart-area"></i>{area}</p>
              <p id="roadAccess"><i className="fa-solid fa-road"></i>{roadAccess}</p>
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
