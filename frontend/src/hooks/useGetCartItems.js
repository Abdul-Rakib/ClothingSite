// useGetCartItems.js
import { useState, useEffect } from 'react';
import { useVariableContext } from '../context/VariableContext';

const useGetCartItems = () => {
  const { host, setCartItems, user } = useVariableContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${host}/cart/getcart/${user.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        
        setCartItems(data); // Set cart items in global state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user.id) {
      fetchCartItems();
    }
  }, [host, setCartItems]);

  return { loading, error };
};

export default useGetCartItems;
