import { useState } from 'react';
import { useVariableContext } from '../context/VariableContext';

export const useSaveCartItem = () => {
    const { host } = useVariableContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const saveCartItem = async (cartItem) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${host}/cart/addtocart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartItem),
            });

            const data = await response.json();
            if (!response.ok) {

                setError(data.message);
                return;
            }
            setError(null);
        } catch (error) {
            setError('An error occurred while saving the item to the cart. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return { saveCartItem, loading, error };
};