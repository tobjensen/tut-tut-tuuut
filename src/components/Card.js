import React from 'react';

const Card = (props) => (
  <div className='card container'>
    <div>
      <h2>{props.ferry}</h2>
      <span className="card__class">{props.class}</span>
    </div>
    <div className="card__route-destination-container">
      <div className="card__route">
        <span>{props.route}</span>
      </div>
      <span className="card__destination">{props.destination}</span>
      <div className="card__location">
        <i className="fas fa-chevron-circle-right"></i>
        <span>{props.location}</span>
      </div>
    </div>
    <div className="card__fav-speed-heading">
      <i className="far fa-heart"></i>
      <span>{props.speed}</span>
      <span>{props.heading}</span>
    </div>
    <div className="card__coordinates">
      <span>Lat/long: </span>
      <span>{props.coordinates.lat.substr(0,8)},</span>
      <span>{props.coordinates.lon.substr(0,8)}</span>
    </div>
  </div>
);

export default Card;
