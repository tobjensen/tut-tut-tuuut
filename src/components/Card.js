import React from 'react';
import MapSmall from './MapSmall';
import Details from './Details';
import Images from './Images';

const Card = (props) => (
  <div className={props.details ? 'card card__details' : 'card'}>
    <div>
      <h2>{props.ferry}</h2>
      <span className="card__class">{props.class}</span>
    </div>
    <div className="card__route-destination-container">
      <div className={`card__route card__route__${props.route}`}>
        <span>{props.route}</span>
      </div>
      <span className="card__destination">{props.destination}</span>
      <div className="card__location">
        <i className="fas fa-chevron-circle-right"></i>
        <span>{props.location}</span>
      </div>
    </div>
    <div className="card__fav-speed-heading">
      <i className={props.favourite ? "fas fa-heart card__fav" : "far fa-heart"}></i>
      <span>{props.speed}</span>
      <span>{props.heading}</span>
    </div>
    <div className="card__coordinates">
      <span>Lat/long: </span>
      <span>{props.coordinates.lat.toFixed(4)},</span>
      <span>{props.coordinates.lon.toFixed(4)}</span>
    </div>
    {props.details && <MapSmall {...props}/>}
    {props.details && <Details className="card__ferry-details" heading={props.ferry} text={props.ferry_info}/>}
    {props.details && <Details className="card__class-details" heading={props.class} text={props.class_info}/>}
    {props.details && <Images className="card__images" images={props.images} />}
  </div>
);

export default Card;
