import { useState, useEffect } from 'react';
import { useVariableContext } from '../context/VariableContext';

const useGetOrders = (userId)=>{
    const {host} = useVariableContext();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        console.log('Fetching orders...');

        const getOrders = async () => {
          setLoading(true);
          setError(null);
    
          try {
            const response = await fetch(`${host}/order/getorders/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (!response.ok) {
              throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            // console.log(data);
            
            setOrders(data.Orders);

          } catch (err) {

            setError(err.message);

          } finally {

            setLoading(false);
          }
        };
    
        if (userId) {
          getOrders();
        }
      }, []);
    
      return { loading, error, orders };

    };

    export default useGetOrders;