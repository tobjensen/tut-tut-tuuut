import React from 'react';
import Card from './Card';

const DashboardPage = (props) => (
  <div className="container top-padding">
    <h1>Dashboard Page</h1>
    <Card ferry={{ id: 1002, label: 'Alexander' }}/>
    <Card ferry={{ id: 1004, label: 'Friendship' }}/>
    <Card ferry={{ id: 1007, label: 'Supply' }}/>
  </div>
)

export default DashboardPage;