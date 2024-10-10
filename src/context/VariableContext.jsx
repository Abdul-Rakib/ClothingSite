import { createContext, useContext, useState } from "react";

// Create the CartContext
const VariableContext = createContext();

// Create a provider component
export const VariableContextProvider = ({ children }) => {
  const host = "http://localhost:8080";
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null); // Initialize to null
  const [selectedSize, setSelectedSize] = useState(null);   // Initialize to null

  const [couponDiscount, setCouponDiscount] = useState(0);   // Initialize to null


  return (
    <VariableContext.Provider
      value={{
        host,
        isLoggedIn,
        setIsLoggedIn,
        cartItems,
        setCartItems,
        selectedColor,
        setSelectedColor,
        selectedSize,
        setSelectedSize,
        couponDiscount,
        setCouponDiscount,
      }}
    >
      {children}
    </VariableContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useVariableContext = () => {
  return useContext(VariableContext);
};
