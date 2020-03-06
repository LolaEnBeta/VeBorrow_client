import React, { Component } from 'react';
import vehicleService from './../lib/vehicle-service';

export default class Vehicle extends Component {

  deleteVehicle = () => {
    this.props.delete(this.props.vehicle._id);
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
