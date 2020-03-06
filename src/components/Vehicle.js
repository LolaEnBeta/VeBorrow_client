import React, { Component } from 'react';
import vehicleService from './../lib/vehicle-service';

export default class Vehicle extends Component {
  state = {
    available: "",
    longitude: "",
    latitude: ""
  }

  componentDidMount() {
    this.setState({
      available: this.props.vehicle.available,
      longitude: this.props.vehicle.longitude,
      latitude: this.props.vehicle.latitude
    })
  }

  deleteVehicle = () => {
    this.props.delete(this.props.vehicle._id);
  }

  turnOff = (vehicleId, newAvailableState) => {
    vehicleService.updateVehicle(vehicleId, newAvailableState)
      .then((vehicle) => {
        this.setState({
          available: vehicle.available,
          longitude: vehicle.longitude,
          latitude: vehicle.latitude
        });
      })
      .catch((error) => console.log(error))
  }

  turnAvailable = (vehicleId, newAvailableState) => {
    vehicleService.updateVehicle(vehicleId, newAvailableState)
        .then((vehicle) => {
          this.setState({
            available: vehicle.available,
            longitude: vehicle.longitude,
            latitude: vehicle.latitude
          });
        })
        .catch((error) => console.log(error))
  }

  updateState = (e) => {
    e.preventDefault();

    const vehicleId = this.props.vehicle._id;
    const isAvailable = this.props.vehicle.available;
    const newAvailableState = !this.props.vehicle.available;

    if (isAvailable) { this.turnOff(vehicleId, newAvailableState) }
    else { this.turnAvailable(vehicleId, newAvailableState) }
  }

  render() {
    return (
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.vehicle.type}</h5>
            <p className="card-text">...</p>
            {!this.props.vehicle.available && <button className="btn btn-primary" onClick={this.updateState}>Set available</button>}

            {this.props.vehicle.available && <button className="btn btn-primary" onClick={this.updateState}>Turn off</button>}

            <button className="btn btn-danger" onClick={this.deleteVehicle}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}
