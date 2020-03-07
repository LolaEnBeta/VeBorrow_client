import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from '../lib/Auth';
import Vehicle from '../components/Vehicle';
import vehicleService from './../lib/vehicle-service';


class Vehicles extends Component {
  state = {
    vehicles: [],
  }

  componentDidMount() {
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

  render() {
    return (
      <div>
        {this.state.vehicles.map((vehicle) => {
          return <Vehicle key={vehicle._id} vehicle={vehicle} delete={this.deleteVehicle}/>
        })}

        <Link to="/create-vehicle" > Create one </Link>
      </div>
    )
  }
}

export default withAuth(Vehicles);
