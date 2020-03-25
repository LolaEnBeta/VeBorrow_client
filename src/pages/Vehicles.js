import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from '../lib/Auth';
import Vehicle from '../components/Vehicle';
import VehicleForm from '../components/VehicleForm';
import vehicleService from './../lib/vehicle-service';


class Vehicles extends Component {
  state = {
    vehicles: [],
    showForm: false,
  }

  componentDidMount() {
    this.getAllVehicles();
  }

  getAllVehicles = () => {
    vehicleService.getAllUserVehicles()
    .then(res => {
      const vehiclesList = res;

      this.setState({vehicles: vehiclesList});
    })
  }

  deleteVehicle = (vehicleId) => {
    vehicleService.deleteOneVehicle(vehicleId)
      .then(() => {
        vehicleService.getAllUserVehicles()
          .then(res => {
            const vehiclesList = res;

            this.setState({vehicles: vehiclesList});
          })
      })
      .catch( (err) => console.log(err))
  }

  renderComponent = () => {
    this.setState({showForm: false})
    this.getAllVehicles();
  }

  render() {
    return (
      <div className="row vehicles-card">
        <div className="col s12 m6">
          <div className="card">
            {
              this.state.showForm ?
              (
                <button className="btn waves-effect waves-light create-vehicle" onClick={() => {this.setState({showForm: !this.state.showForm})}}>Hide form <i className="fas fa-arrow-up"></i></button>
              ): (
                <button className="btn waves-effect waves-light create-vehicle" onClick={() => {this.setState({showForm: !this.state.showForm})}}> Create vehicle <i className="far fa-plus-square"></i></button>
              )
            }
              {
                this.state.showForm &&
                <VehicleForm reRender={this.renderComponent}/>
            }
            <h4 className="brown-text select-radio">Your vehicles</h4>
            {this.state.vehicles.map((vehicle) => {
              return <Vehicle key={vehicle._id} vehicle={vehicle} delete={this.deleteVehicle}/>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(Vehicles);
