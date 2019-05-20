import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Ferry.css';
import FerryHeading from './FerryHeading'
import RouteHeading from './RouteHeading'
import Favourite from './Favourite'
import SpeedDirection from './SpeedDirection'
import Expand from './Expand'

class Ferry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FerryHeading />
        <RouteHeading />
        <div>
          <Favourite />
          <SpeedDirection />
        </div>
        <Link to='/ferry1'>
          <Expand />
        </Link>
      </div>
    )
  }
}

export default Ferry;
