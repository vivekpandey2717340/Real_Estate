import { createContext } from "react";
import { propertyList } from "../assets/assets";
import { blogList } from "../assets/assets";
import { FAQList } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = {
    propertyList,blogList,FAQList
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
