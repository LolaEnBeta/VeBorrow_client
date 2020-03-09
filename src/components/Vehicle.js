import React, { Component } from 'react';
import vehicleService from './../lib/vehicle-service';

export default class Vehicle extends Component {
  state = {
    available: "",
    inUse: "",
    longitude: "",
    latitude: ""
  }

  componentDidMount() {
    this.setState({
      available: this.props.vehicle.available,
      inUse: this.props.vehicle.inUse,
      longitude: this.props.vehicle.longitude,
      latitude: this.props.vehicle.latitude
    })
  }

  deleteVehicle = () => {
    this.props.delete(this.props.vehicle._id);
  }

  turnOff = (vehicleId, newAvailableState) => {
    let latitude = null;
    let longitude = null;
    vehicleService.updateVehicle(vehicleId, newAvailableState, latitude, longitude)
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
    let latitude = "";
    let longitude = "";

    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      vehicleService.updateVehicle(vehicleId, newAvailableState, latitude, longitude)
          .then((vehicle) => {
            this.setState({
              available: vehicle.available,
              longitude: vehicle.longitude,
              latitude: vehicle.latitude
            });
          })
          .catch((error) => console.log(error))
     });

  }

  updateState = (e) => {
    e.preventDefault();

    const vehicleId = this.props.vehicle._id;
    const isAvailable = this.state.available;
    const newAvailableState = !this.state.available;

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
            {
              this.state.inUse ?
              (
                <p>Is in use...</p>
              ): (
                <div>
                  {
                    this.state.available ?
                    (
                      <button className="btn btn-primary" onClick={this.updateState}>Turn off</button>
                    ) : (
                      <button className="btn btn-primary" onClick={this.updateState}>Set available</button>
                    )
                  }
                  <button className="btn btn-danger" onClick={this.deleteVehicle}>Delete</button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
