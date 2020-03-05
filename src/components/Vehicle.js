import React, { Component } from 'react';
import vehicleService from './../lib/vehicle-service';

export default class Vehicle extends Component {

  deleteVehicle = () => {
    this.props.delete(this.props.vehicle._id);
  }

  render() {
    return (
      <div>
        <h1>{this.props.vehicle.type}</h1>
        <button onClick={this.deleteVehicle}>Delete</button>
      </div>
    )
  }
}
