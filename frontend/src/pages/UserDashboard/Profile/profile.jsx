import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import the profile icon
import './Profile.css'; // Ensure this file exists
import { useVariableContext } from '../../../context/VariableContext';

const Profile = () => {
  const { user } = useVariableContext();

  return (
    <div className='profile-container'>
      <div className='profile-header'>
        <FaUserCircle size={40} />
        <h2>User Profile</h2>
      </div>
      <div className='profile-info'>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Mobile:</strong> {user.mobile}</p>
      </div>
    </div>
  );
};

export default Profile;
