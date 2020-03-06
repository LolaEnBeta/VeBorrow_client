import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const BASE_URL = process.env.API_KEY_MAPS;

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={{
         lat: 41.390356499999996,
         lng: 2.1941694
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: BASE_URL
})(MapContainer);
