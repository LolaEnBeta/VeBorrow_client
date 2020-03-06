import React, { Component } from 'react'
import { withAuth } from '../lib/Auth'
import vehicleService from './../lib/vehicle-service';
import axios from 'axios';

class CreateVehicleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
    }
  }

  createNewVehicle = (e) => {
    e.preventDefault();

    vehicleService.createVehicle(this.state.type)
      .then(res => {
        this.setState({type: ""})
        this.props.history.push('my-vehicles');
      })
  }

  handleChange = (e) => {
    const {value} = e.target;

    this.setState({type: value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createNewVehicle}>
          <label>Type</label>
          <select name="type" value={this.state.type} onChange={this.handleChange}>
            <option selected value="">Select</option>
            <option value="bike">Bike</option>
            <option value="motorcycle">motorcycle</option>
            <option value="car">car</option>
            <option value="electric scooter">electric scooter</option>
            <option value="scooter">scooter</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default withAuth(CreateVehicleForm);
