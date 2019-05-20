import React from 'react';
import './RouteHeading.css';

function RouteHeading() {
  return (
    <div>
      <img src='https://via.placeholder.com/40' />
      <div>
        <h2>Destination</h2>
        <div>
          <i>▶️</i>
          <h3>Current Location</h3>
        </div>
      </div>
    </div>
    );
}

export default RouteHeading;
