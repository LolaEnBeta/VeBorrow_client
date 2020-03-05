import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from '../lib/Auth';
import Vehicle from '../components/Vehicle';
import axios from 'axios';
import vehicleService from './../lib/vehicle-service';


class Vehicles extends Component {
  state = {
    vehicles: [],
  }

  componentDidMount() {
    vehicleService.getAllVehicles()
      .then(res => {
        const vehiclesList = res;

        this.setState({vehicles: vehiclesList});
      })
  }

  render() {
    return (
      <div>
        {this.state.vehicles.map((vehicle) => {
          return <Vehicle vehicle={vehicle} />
        })}

        <Link to="/create-vehicle" > Create one </Link>
      </div>
    )
  }
}

export default withAuth(Vehicles);
