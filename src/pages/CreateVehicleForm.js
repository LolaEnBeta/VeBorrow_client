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
        console.log(res);
        this.setState({type: ""})
      })
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createNewVehicle}>
          <label>Type</label>
          <input type="text" name="type" value={this.state.type} onChange={this.handleChange}/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default withAuth(CreateVehicleForm);
