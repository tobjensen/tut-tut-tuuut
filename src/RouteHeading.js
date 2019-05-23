import React from 'react';
import './RouteHeading.css';

function RouteHeading() {
  return (
    <div className="route-heading">
      <div className="route-icon">
        <h2>F2</h2>
      </div>
      <h2 className="destination">Destination</h2>
        <div className="current-location">
          <i className="fas fa-chevron-circle-right current-location-icon"></i>
          <h3>Current Location</h3>
        </div>
    </div>
    );
}

export default RouteHeading;
