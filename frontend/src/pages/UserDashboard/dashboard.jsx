import React from 'react';
import Profile from './Profile/profile';
import Order from './Orders/orders';
import './dashboard.css'; // Import the dashboard styles

const Dashboard = () => {
  return (
    <div className='user-dashboard'>
      {/* <h1>User Dashboard</h1> */}
      <div className='dashboard-content'>
        <Profile/>
        <Order/>
      </div>
    </div>
  );
};

export default Dashboard;
