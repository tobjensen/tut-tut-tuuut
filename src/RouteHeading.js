import React from 'react';
import './RouteHeading.css';

class RouteHeading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="route-heading">
        <div className={`route-icon ${this.props.route}`}>
          <h2>{this.props.route}</h2>
        </div>
        <h2 className="destination">{this.props.destination}</h2>
          <div className="current-location">
            <i className="fas fa-chevron-circle-right current-location-icon"></i>
            <h3>{this.props.location}</h3>
          </div>
      </div>
      );
  }
}

export default RouteHeading;
