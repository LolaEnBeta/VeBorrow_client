import React, { Component } from 'react';
import vehicleService from './../lib/vehicle-service';

export default class Vehicle extends Component {

  deleteVehicle = () => {
    vehicleService.deleteOneVehicle(this.props.vehicle._id)
      .then((data) => console.log(data))
      .catch( (err) => console.log(err))
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
