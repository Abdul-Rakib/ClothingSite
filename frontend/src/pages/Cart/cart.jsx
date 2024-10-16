import React, { useEffect, useState } from 'react';
import CartItem from './cartItems';
import CartSummary from './cartSummary';
import Coupon from './coupon';
import './cart.css';
import { useVariableContext } from '../../context/VariableContext';
import ShippingAddress from './shippingAddresses';

export default function Cart() {
    const { cartItems, setCartItems, couponDiscount } = useVariableContext();
    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        // Simulate fetching data or any async operation
        const fetchCartItems = async () => {
            // You can replace this with real fetching logic if necessary
            setTimeout(() => {
                setIsLoading(false); // Set loading to false after fetching
            }, 500); // Simulate a delay of 500ms
        };

        fetchCartItems();
    }, []);

    // Check if loading is true before rendering the cart items
    if (isLoading) {
        return <div>Loading cart items...</div>; // Show loading message or spinner
    }

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce((sum, item) => item ? sum + item.price * item.quantity : sum, 0);
    const shippingCost = totalItems != 0 ? 99 : 0;
    const totalPrice = subtotal + shippingCost - couponDiscount;

    const handleCheckout = () => {
        alert("Proceeding to checkout...");
    };

    return (
        <div className="cart-container">
            <div className="cart-items-container">
                <h1>Shopping Cart <span>{totalItems} items</span></h1>
                <div className="cart-items">
                    {totalItems === 0 ? (
                        <div>Your cart is empty!</div>
                    ) : (
                        cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                            />
                        ))
                    )}
                </div>
                <button className="back-to-shop">
                    <span className="back-to-shop-text">
                        <a href="/">← Back to shop</a>
                    </span>
                </button>
            </div>

            <div className="cart-summary-container">
                <ShippingAddress />
                <CartSummary
                    totalItems={totalItems}
                    subtotal={subtotal}
                    shippingCost={shippingCost}
                    discount={couponDiscount}
                    totalPrice={totalPrice}
                />
                <button className="checkout-button" onClick={handleCheckout}>
                    <a href="/checkout">MAKE PAYMENT</a>
                </button>
            </div>

        </div>
    );
}
