import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import PropertyItem from '../../Components/PropertyItem/PropertyItem';
import './WishListPage.css';

const WishListPage = () => {
  const { wishlist } = useContext(StoreContext);

  return (
    <div className='container'>
        <div className="wishlist-page ">
            <h2>Your Wishlist</h2>
            <div className="wishlist-properties">
                {wishlist.length > 0 ? (
                wishlist.map(property => (
                    <PropertyItem key={property.id} {...property} />
                ))
                ) : (
                <p style={{margin:'50px 0', textAlign:'center'}}>No items in the wishlist</p>
                )}
            </div>
        </div>
    </div>
  );
};

export default WishListPage;
