import React from 'react';
import Profile from './Profile/profile';

const Dashboard = () => {
  const user = {
    profilePic: 'https://example.com/profile.jpg',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  };

  const orders = [
    {
      id: 1,
      productImage: 'https://example.com/product1.jpg',
      title: 'Product 1',
      price: 500,
      orderDate: '2024-10-01',
      status: 'delivered',
    },
    {
      id: 2,
      productImage: 'https://example.com/product2.jpg',
      title: 'Product 2',
      price: 1500,
      orderDate: '2024-09-29',
      status: 'shipped',
    },
    {
      id: 3,
      productImage: 'https://example.com/product3.jpg',
      title: 'Product 3',
      price: 1200,
      orderDate: '2024-09-25',
      status: 'cancelled',
    },
  ];

  return (
    <div>
      <Profile user={user} orders={orders} />
    </div>
  );
};

export default Dashboard;
