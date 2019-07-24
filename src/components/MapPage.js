import React from 'react';
import { connect } from 'react-redux';
import L from 'leaflet';

class MapPage extends React.Component {
  componentDidMount() {
    this.map = L.map('map', {
      center: [-33.8500, 151.2000],
      zoom: 13,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
		this.FerryIcon = L.Icon.extend({
			options: {
	      iconSize:     [40, 40],
	      iconAnchor:   [20, 20],
	      popupAnchor:  [0, -12] 
			}
		});
		this.layerGroup = L.layerGroup().addTo(this.map)
		this.props.ferries.map((ferry) => {
			const icon = new this.FerryIcon({iconUrl: `/images/${ferry.heading.split(" ")[1]}-${ferry.route}.png`})
			const popup = 
	    `
	      <div class="map__popup">
	        <h2>${ferry.ferry}</h2>
	        <h3>${ferry.class}</h3>
	        <div class="map__details">
	          <div class="map__route map__route-${ferry.route}">${ferry.route}</div>
	          <span>${ferry.destination}</span>
	          <span>${ferry.speed}</span>
	          <span>${ferry.heading}</span>
	        </div>
	      </div>
	    `
			L.marker(ferry.coordinates, { icon }).addTo(this.layerGroup).bindPopup(popup);
		})
  }
  componentDidUpdate() {
  	this.layerGroup.clearLayers();
		this.props.ferries.map((ferry) => {
			const icon = new this.FerryIcon({iconUrl: `/images/${ferry.heading.split(" ")[1]}-${ferry.route}.png`})
			const popup = 
	    `
	      <div class="map__popup">
	        <h2>${ferry.ferry}</h2>
	        <h3>${ferry.class}</h3>
	        <div class="map__details">
	          <div class="map__route map__route-${ferry.route}">${ferry.route}</div>
	          <span>${ferry.destination}</span>
	          <span>${ferry.speed}</span>
	          <span>${ferry.heading}</span>
	        </div>
	      </div>
	    `
			L.marker(ferry.coordinates, { icon }).addTo(this.layerGroup).bindPopup(popup);
		})
  }
  render() {
  	console.log(this.props.ferries)
  	return(
      <div className="map__container">
        <div className="map__map" id="map"></div>
      </div>
  	)
	}
};

const mapStateToProps = (state) => ({
  ferries: state.ferries
});

export default connect(mapStateToProps)(MapPage);
