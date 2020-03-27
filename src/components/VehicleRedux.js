import React, { Component } from 'react';
import { deleteVehicle } from '../actions/actions';
import { connect } from 'react-redux';

class VehicleRedux extends Component {
  render() {
    return (
      <div className="row vehicle-info">
        <div className="col s12 m5">
          <div className="card-panel ">
            <h5 className="brown-text">{this.props.vehicle.type}</h5>
          {
              this.props.vehicle.inUse ?
              (
                <p className="brown-text">Is in use...</p>
              ): (
                <div className="vehicle-buttons">
                  {
                    this.props.vehicle.available ?
                    (
                      <button className="waves-effect waves-light btn-small" onClick={this.updateState}>Turn OFF <i className="fas fa-toggle-off"></i></button>
                    ) : (
                      <button className="waves-effect waves-light btn-small" onClick={this.updateState}>Turn ON <i className="fas fa-toggle-on"></i></button>
                    )
                  }
                  <button className="waves-effect waves-light btn-small" onClick={this.deleteVehicle}>Delete <i className="far fa-trash-alt"></i></button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, {deleteVehicle: deleteVehicle})(VehicleRedux);
