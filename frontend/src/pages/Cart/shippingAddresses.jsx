import React, { useState, useEffect } from 'react';
import './shippingAddress.css';
import { FaTrash, FaEdit } from 'react-icons/fa';  // Importing icons

export default function ShippingAddress() {
    const [addresses, setAddresses] = useState([]);
    const [newAddress, setNewAddress] = useState({});
    const [showForm, setShowForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');  // For displaying validation message

    useEffect(() => {
        const savedAddresses = JSON.parse(localStorage.getItem('shippingAddresses')) || [];
        setAddresses(savedAddresses);

        if (savedAddresses.length === 0) {
            setShowForm(false);
        }
    }, []);

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setNewAddress({ ...newAddress, [name]: value });
        setErrorMessage(''); // Clear error when user types
    };

    const addOrUpdateAddress = () => {
        // Validation for required fields
        if (!newAddress.name || !newAddress.mobileNumber || !newAddress.addressLine1 || !newAddress.city || !newAddress.state || !newAddress.postalCode) {
            setErrorMessage('Please fill in all required fields.');
            return; // Stop the function if validation fails
        }

        const updatedAddresses = [...addresses];
        const existingIndex = updatedAddresses.findIndex((addr) => addr.isSelected);

        if (existingIndex > -1) {
            updatedAddresses[existingIndex] = { ...newAddress, isSelected: true };
        } else {
            updatedAddresses.push({ ...newAddress, isSelected: true });
        }

        setAddresses(updatedAddresses);
        localStorage.setItem('shippingAddresses', JSON.stringify(updatedAddresses));
        resetForm();
        setShowForm(false);
    };

    const selectAddress = (index) => {
        const updatedAddresses = addresses.map((addr, i) => ({
            ...addr,
            isSelected: i === index,
        }));
        setAddresses(updatedAddresses);
        localStorage.setItem('shippingAddresses', JSON.stringify(updatedAddresses));
    };

    const deleteAddress = (index) => {
        const updatedAddresses = addresses.filter((_, i) => i !== index);
        setAddresses(updatedAddresses);
        localStorage.setItem('shippingAddresses', JSON.stringify(updatedAddresses));
    };

    const resetForm = () => {
        setNewAddress({
            name: '',
            mobileNumber: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            postalCode: '',
            isSelected: false,
        });
        setErrorMessage(''); // Clear error message when resetting the form
    };

    return (
        <div className="shipping-address-container">
            <h2>Shipping Address</h2>

            {addresses.length === 0 ? (
                <button onClick={() => setShowForm(true)}>Add Shipping Address</button>
            ) : (
                <div className="saved-addresses">
                    {addresses.map((address, index) => (
                        <div key={index} className="address-item">
                            <div className='address-box'>
                                <input
                                    type="radio"
                                    name="selectedAddress"
                                    checked={address.isSelected}
                                    onChange={() => selectAddress(index)}
                                />
                                <label>{`${address.name}, ${address.mobileNumber}, ${address.addressLine1}, ${address.city}, ${address.state}, ${address.postalCode}`}</label>
                            </div>
                            <div className='address-operations'>
                                <button onClick={() => deleteAddress(index)} className="icon-button delete">
                                    <FaTrash />
                                </button>
                                <button onClick={() => setShowForm(true)} className="icon-button update">
                                    <FaEdit />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showForm && (
                <div className="popup-form">
                    <div className="popup-content">
                        <h2>{addresses.length === 0 ? 'Add' : 'Update'} Address</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={newAddress.name}
                            onChange={handleAddressChange}
                            required
                        />
                        <input
                            type="text"
                            name="mobileNumber"
                            placeholder="Mobile Number"
                            value={newAddress.mobileNumber}
                            onChange={handleAddressChange}
                            required
                        />
                        <input
                            type="text"
                            name="addressLine1"
                            placeholder="Address Line 1"
                            value={newAddress.addressLine1}
                            onChange={handleAddressChange}
                            required
                        />
                        <input
                            type="text"
                            name="addressLine2"
                            placeholder="Address Line 2"
                            value={newAddress.addressLine2}
                            onChange={handleAddressChange}
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={newAddress.city}
                            onChange={handleAddressChange}
                            required
                        />
                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            value={newAddress.state}
                            onChange={handleAddressChange}
                            required
                        />
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal Code"
                            value={newAddress.postalCode}
                            onChange={handleAddressChange}
                            required
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Displaying validation message */}
                        <button onClick={addOrUpdateAddress}>
                            {addresses.length === 0 ? 'Add' : 'Update'} Address
                        </button>
                        <button onClick={() => setShowForm(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}
