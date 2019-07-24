import React from 'react';
import { Link } from 'react-router-dom';
import L from 'leaflet';

class MapSmall extends React.Component {
  componentDidMount() {
    this.map = L.map('map', {
      center: [this.props.coordinates.lat, this.props.coordinates.lon],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
    this.ferryIcon = L.icon ({
      iconUrl: `/images/${this.props.heading.split(" ")[1]}-${this.props.route}.png`,
      iconSize:     [40, 40],
      iconAnchor:   [20, 20],
      popupAnchor:  [0, -12] 
    })
    this.popup = 
    `
      <div class="map__popup">
        <h2>${this.props.ferry}</h2>
        <h3>${this.props.class}</h3>
        <div class="map__details">
          <div class="map__route map__route-${this.props.route}">${this.props.route}</div>
          <span>${this.props.destination}</span>
          <span>${this.props.speed}</span>
          <span>${this.props.heading}</span>
        </div>
      </div>
    `
    this.marker = L.marker(this.props.coordinates, {icon: this.ferryIcon}).addTo(this.map).bindPopup(this.popup);
  }
  componentDidUpdate() {
    this.marker.setLatLng(this.props.coordinates);
  }

  render() {
    return (
      <div className="card__map">
        <div className="map-small" id="map"></div>
      </div>
    )
  }
}

export default MapSmall;