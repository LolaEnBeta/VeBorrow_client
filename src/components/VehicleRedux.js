import React, { Component } from 'react';

export default class VehicleRedux extends Component {
  render() {
    return (
      <div className="row vehicle-info">
        <div className="col s12 m5">
          <div className="card-panel ">
            <h5 className="brown-text">{this.props.vehicle.vType}</h5>
            <h5 className="brown-text">{this.props.vehicle.id}</h5>
            <button className="waves-effect waves-light btn-small">Delete <i className="far fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
    )
  }
}
