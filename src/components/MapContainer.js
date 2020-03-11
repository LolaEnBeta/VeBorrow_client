import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import vehicleService from './../lib/vehicle-service';

const mapStyles = {
  width: '90vw',
  height: '65vh'
};

export class MapContainer extends Component {
  state = {
    latitude:  41.397618,
    longitude: 2.190161,
    availableVehicles: []
  }

  componentDidMount() {
    this.showAllAvailableVehicles();
  }

  showAllAvailableVehicles = () => {
    vehicleService.getAllAvailableVehicles()
      .then( (vehiclesArr) => {
        this.setState({availableVehicles: vehiclesArr});
      })
      .catch( (err) => console.log(err));
  }

  showVehicleInfo = (vehicleId) => {
    this.props.info(vehicleId);
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={{
         lat: this.state.latitude,
         lng: this.state.longitude
        }}
      >
        {this.state.availableVehicles.map((vehicle) => {
          return <Marker  key={vehicle._id}
                          position={{lat: Number(vehicle.latitude), lng: Number(vehicle.longitude)}}
                          onClick={() => this.showVehicleInfo(vehicle._id)} />
        })}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY_MAPS
})(MapContainer);
