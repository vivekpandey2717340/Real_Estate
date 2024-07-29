import { createContext, useState } from "react";
import { propertyList, blogList, FAQList } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [wishlist, setWishlist] = useState([]);
  const [compareList, setComparelist] = useState([]);
  const [isCompareClicked, setIsCompareClicked] = useState(false);

  const addToWishlist = (property) => {
    setWishlist((prevWishlist) => {
      const isAlreadyInWishlist = prevWishlist.some(item => item.id === property.id);
      if (isAlreadyInWishlist) {
        return prevWishlist.filter(item => item.id !== property.id); // Remove if already in wishlist
      } else {
        return [...prevWishlist, property]; // Add if not in wishlist
      }
    });
  };

  const addToCompareList = (property) => {
    setComparelist((prevComparelist) => {
      const isAlreadyInComparelist = prevComparelist.some(item => item.id === property.id);
      if (isAlreadyInComparelist) {
        return prevComparelist.filter(item => item.id !== property.id); // Remove if already in comparelist
      } else {
        setIsCompareClicked(true); // Set compare clicked to true
        return [...prevComparelist, property]; // Add if not in comparelist
      }
    });
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
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
