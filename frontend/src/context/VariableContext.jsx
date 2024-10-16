import { createContext, useContext, useState } from "react";

const VariableContext = createContext();

export const VariableContextProvider = ({ children }) => {
  const host = "http://localhost:8080";
  // console.log(localStorage.user);
  const log = localStorage.isLoggedIn;
  const [isLoggedIn, setIsLoggedIn] = useState(log);
  
  const [cartItems, setCartItems] = useState([]);
  const [couponDiscount, setCouponDiscount] = useState(0);


  return (
    <VariableContext.Provider
      value={{
        host,
        isLoggedIn,
        setIsLoggedIn,
        cartItems,
        setCartItems,
        couponDiscount,
        setCouponDiscount,
      }}
    >
      {children}
    </VariableContext.Provider>
  );
};

export const useVariableContext = () => {
  return useContext(VariableContext);
};
