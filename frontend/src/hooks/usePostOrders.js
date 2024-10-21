import { useState } from 'react';
import { useVariableContext } from '../context/VariableContext';

export const usePostOrders = () => {
    const { host, user } = useVariableContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    // const createNewOrder = async (cartItems, userId, userEmail) => {
    const createNewOrder = async (cartItems) => {
        setLoading(true);
        setError(null);  // Reset error before making a new request
        console.log('Creating new order...');
        console.log(cartItems);

        // Create the order object that includes userId and userEmail
        const orderData = {
            userId: user.id,
            userEmail: user.email,
            cartItems,
        };

        try {
            const response = await fetch(`${host}/order/createorder`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),  // Send the order data
            });

            const data = await response.json();
            console.log('Response Data:', data);

            if (!response.ok) {
                // If the response is not OK, set the error with the message from the API
                setError(data.message || 'An error occurred while placing the order.');
                return;
            }

            setSuccessMsg(data.message || 'Order created successfully.');
        } catch (error) {
            // If the fetch request fails, set the error with the error message
            setError(error.message || 'Network error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return { createNewOrder, successMsg, loading, error };
};
