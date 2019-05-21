import React from 'react';
import './Ferries.css';
import Search from './Search'
import Ferry from './Ferry'

function Ferries() {
  return (
    <div className="ferries">
      <Search />
      <Ferry />
      <Ferry />
      <Ferry />
      <Ferry />
      <Ferry />
      <Ferry />
    </div>
    );
}

export default Ferries;
