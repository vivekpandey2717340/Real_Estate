import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CompareItem.css';
import { StoreContext } from '../../context/StoreContext';

const CompareItem = ({ id, name, price, location, content, area, mainImage, saleImage }) => {
  const { addToCompareList, compareList, addToWishlist, wishlist, setIsCompareClicked } = useContext(StoreContext);
  const isComparelist = compareList.some(item => item.id === id);

  const toggleComparelist = (e) => {
    e.preventDefault();
    const property = { id, name, price,  area, mainImage };
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
    <tr className="compare_item" style={{textAlign:'center', paddingTop:'10px'}}>
      <td >
        <Link to={`/propertyDetails/${id}`}>
          <img src={mainImage} alt={name}  />
        </Link>
      </td>
      <td><h4>{name}</h4></td>
      <td><p>{area}</p></td>
      <td><p>{price}</p></td>
      <td>
        <ul>
          <li id="compare" style={{ listStyle: 'none', marginRight: '5px' }} className={isComparelist ? '' : ''}>
            <a onClick={toggleComparelist}>
            <i className="fa-solid fa-minus"></i>
            </a>
          </li>
          <li id="wishlist" className={isWishlistItem ? 'wish_active' : ''}>
            <a id="wish_btn" onClick={toggleWishlist}>
              <i className="fa-regular fa-heart"></i>
            </a>
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default CompareItem;
