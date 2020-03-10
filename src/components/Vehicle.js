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

      <div className="row">
        <div className="col s12 m5">
          <div className="card-panel ">
            <h5 className="brown-text">{this.props.vehicle.type}</h5>
          {
              this.state.inUse ?
              (
                <p className="brown-text">Is in use...</p>
              ): (
                <div className="vehicle-buttons">
                  {
                    this.state.available ?
                    (
                      <button className="waves-effect waves-light btn-small" onClick={this.updateState}>Turn OFF <i class="fas fa-toggle-off"></i></button>
                    ) : (
                      <button className="waves-effect waves-light btn-small" onClick={this.updateState}>Turn ON <i class="fas fa-toggle-on"></i></button>
                    )
                  }
                  <button className="waves-effect waves-light btn-small" onClick={this.deleteVehicle}>Delete</button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
