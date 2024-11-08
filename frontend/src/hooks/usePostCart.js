import { useState } from 'react';
import { useVariableContext } from '../context/VariableContext';

export const useSaveCartItem = () => {
    const { host, user } = useVariableContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    const saveCartItem = async (cartItem) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch(`${host}/cart/addtocart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({cartItem, userId: user.id, email : user.email}),
            });

            const data = await response.json();
            console.log('Response Data:', data);
            
            if (!response.ok) {
                setError(data.message);
                return;
            }
            setSuccessMsg(data.message);
        } catch (error) {
            setError('An error occurred while saving the item to the cart. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return { saveCartItem,successMsg, loading, error };
};
