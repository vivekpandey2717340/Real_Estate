import React, { createContext, useState, useEffect } from 'react';
import {  FAQList } from "../assets/assets";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [propertyList, setPropertyList] = useState([]);
  const[blogList, setBlogList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [compareList, setComparelist] = useState([]);
  const [isCompareClicked, setIsCompareClicked] = useState(false);
  const userId = 'user_id_placeholder';

  useEffect(() => {
    const fetchPropertyList = async () => {
      try {
        const propertyListResponse = await axios.get('http://localhost:4000/api/property/list');
        setPropertyList(propertyListResponse.data.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    const fetchBlogList = async () => {
      try {
        const blogListResponse = await axios.get('http://localhost:4000/api/Blogs/list');
        setBlogList(blogListResponse.data.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    const fetchLists = async () => {
      try {
        const wishlistResponse = await axios.get(`http://localhost:4000/api/wishlist/${userId}`);
        setWishlist(wishlistResponse.data.data.properties);

        const compareResponse = await axios.get(`http://localhost:4000/api/compare/${userId}`);
        setComparelist(compareResponse.data.data.properties);
      } catch (error) {
        console.error('Error fetching lists:', error);
      }
    };
  
    fetchPropertyList();
    fetchBlogList();
    fetchLists();
  }, [userId]);

  const addToWishlist = async (property) => {
    try {
      await axios.post(`http://localhost:4000/api/wishlist/${userId}`, { propertyId: property._id });
      setWishlist((prevWishlist) => {
        const isAlreadyInWishlist = prevWishlist.some(item => item._id === property._id);
        if (isAlreadyInWishlist) {
          return prevWishlist.filter(item => item._id !== property._id); // Remove if already in wishlist
        } else {
          return [...prevWishlist, property]; // Add if not in wishlist
        }
      });
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const addToCompareList = async (property) => {
    try {
      await axios.post(`http://localhost:4000/api/compare/${userId}`, { propertyId: property._id });
      setComparelist((prevComparelist) => {
        const isAlreadyInComparelist = prevComparelist.some(item => item._id === property._id);
        if (isAlreadyInComparelist) {
          return prevComparelist.filter(item => item._id !== property._id); // Remove if already in comparelist
        } else {
          setIsCompareClicked(true); // Set compare clicked to true
          return [...prevComparelist, property]; // Add if not in comparelist
        }
      });
    } catch (error) {
      console.error('Error adding to compare list:', error);
    }
  };

  const contextValue = {
    propertyList,
    blogList,
    FAQList,
    wishlist,
    addToWishlist,
    compareList,
    addToCompareList,
    isCompareClicked,
    setIsCompareClicked
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
