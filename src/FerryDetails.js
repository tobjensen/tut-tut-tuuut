import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import './FerryDetails.css';
import './Ferry.css';
import Back from './Back'
import FerryHeading from './FerryHeading'
import RouteHeading from './RouteHeading'
import Favourite from './Favourite'
import SpeedDirection from './SpeedDirection'
import FerryMap from './FerryMap'
import CurrentRoute from './CurrentRoute'
import DetailsText from './DetailsText'
import Images from './Images'

class FerryDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ferry-details-wrapper">
        <div className="back">
          <Link to='./'>
            <Back />
          </Link>
        </div>
        <div className="ferry-details">
          <FerryHeading />
          <RouteHeading />
          <div className="fav-speed-direction">
            <Favourite />
            <SpeedDirection />
          </div>
          <FerryMap />
          <CurrentRoute />
          <DetailsText heading="Ferry name" className="details-text-ferry" />
          <DetailsText heading="Class name" className="details-text-class" />
          <Images />
        </div>
      </div>
    )
  }
}

export default FerryDetails;