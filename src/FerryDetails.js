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
    this.ferry = this.props.match.params.ferry;
    this.state = {details: this.props.location.data};
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
          <FerryHeading {...this.state.details}/>
          <RouteHeading {...this.state.details}/>
          <div className="fav-speed-direction">
            <Favourite />
            <SpeedDirection {...this.state.details}/>
          </div>
          <div className="ferry-map">
           <FerryMap {...this.state.details}/>
          </div>
          <CurrentRoute {...this.state.details}/>
          <DetailsText heading={this.state.details.ferry} text={this.state.details.ferry_info} className="details-text-ferry" />
          <DetailsText heading={this.state.details.class} text={this.state.details.class_info} className="details-text-class" />
          <Images {...this.state.details}/>
        </div>
      </div>
    )
  }
}

export default FerryDetails;