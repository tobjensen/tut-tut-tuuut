import React from 'react';
import './CurrentRoute.css';
import CurrentRouteList from './CurrentRouteList'

function CurrentRoute() {
  return (
      <div className="current-route">
        <h2>Current Route</h2>
        <div className="destination-small">
          <div className="route-icon-small">
            <h3>F2</h3>
          </div>
          <h3>Destination</h3>
        </div>
        <CurrentRouteList className="current-route-list"/>
      </div>
    );
}

export default CurrentRoute;
