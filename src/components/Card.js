import React from 'react';

const Card = (props) => (
  <div>
    <div>
      <h2>{props.ferry}</h2>
      <span>{props.class}</span>
    </div>
    <div>
      <div>
        <span>{props.route}</span>
      </div>
      <span>{props.destination}</span>
      <span>{props.location}</span>
    </div>
    <div>
      <i>♥</i>
      <span>{props.speed}</span>
      <span>{props.heading}</span>
      <span>{props.coordinates.lat}</span>
      <span>{props.coordinates.lon}</span>
    </div>
  </div>
);

export default Card;
