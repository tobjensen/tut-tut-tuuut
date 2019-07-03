import React from 'react';
import './FerryMap.css';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class FerryMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Map
        style={{width: '600px', height: '200px'}}
        google={this.props.google}
        zoom={14}
        initialCenter={{
         lat: this.props.coordinates.lat,
         lng: this.props.coordinates.lon
        }}
      >
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDuP8YoIHov28EuoFSzL1GPINDMqBO-dZk'
})(FerryMap);