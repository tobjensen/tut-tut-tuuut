import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
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
      <div className="ferry">
        <FerryHeading {...this.props}/>
        <RouteHeading {...this.props}/>
        <div className="fav-speed-direction">
          <Favourite />
          <SpeedDirection {...this.props}/>
        </div>
        <div className="expand">
          <Link to={ {pathname: `/${this.props.ferry}`, data:{...this.props}} }>
            <Expand />
          </Link>
        </div>
      </div>
    )
  }
}

export default Ferry;
