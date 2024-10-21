import { createContext, useContext, useState } from "react";

const VariableContext = createContext();

export const VariableContextProvider = ({ children }) => {
  const host = "http://localhost:8080";

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null; // Parse the stored user JSON string
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });
  

  
  
  const [cartItems, setCartItems] = useState([]);
  const [couponDiscount, setCouponDiscount] = useState(0);


  return (
    <VariableContext.Provider
      value={{
        host,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        token,
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
