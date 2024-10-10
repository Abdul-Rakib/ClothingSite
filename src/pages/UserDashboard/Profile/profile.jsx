import React from 'react';
import Order from '../Orders/orders';
import { FaUserCircle } from 'react-icons/fa'; // Import the profile icon
import './Profile.css';

const Profile = ({ user, orders }) => {
    return (
        <div className="profile">
            {/* User Profile Section */}
            <div className="user-profile">
                <div className='userImage'>
                    {/* Render FaUserCircle icon instead of profile image */}
                    <FaUserCircle className="profile-icon" />
                </div>
                <div className='userDetails'>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            </div>

            {/* Order History Section */}
            <div className="order-history">
                <h3>Your Orders</h3>
                <Order orders={orders} />
            </div>
        </div>
    );
};

export default Profile;
