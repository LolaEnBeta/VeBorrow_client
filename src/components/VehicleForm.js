import React, { Component } from 'react';
import vehicleService from './../lib/vehicle-service';

export default class VehicleForm extends Component {
  state = {
    type: ""
  }

  createNewVehicle = (e) => {
    e.preventDefault();

    vehicleService.createVehicle(this.state.type)
      .then(res => {
        this.setState({type: "", showForm: false})
        this.props.reRender();
      })
  }

  handleChange = (e) => {
    let value = document.querySelector('input[name="type"]:checked').value;

    this.setState({type: value});
  }

  render() {
    return (
      <div className="create-vehicle-form">
                <form onSubmit={this.createNewVehicle}>
                  <p>
                    <label className="select-radio">
                      <input onChange={this.handleChange} name="type" value="Bike" type="radio" />
                      <span>Bike</span>
                    </label>
                  </p>
                  <p>
                    <label className="select-radio">
                      <input onChange={this.handleChange} name="type" value="Motorcycle" type="radio"  />
                      <span>Motorcycle</span>
                    </label>
                  </p>
                  <p>
                    <label className="select-radio">
                      <input onChange={this.handleChange} name="type" value="Scooter" type="radio"  />
                      <span>Scooter</span>
                    </label>
                  </p>
                  <p>
                    <label className="select-radio">
                      <input onChange={this.handleChange} name="type" value="Electric scooter" type="radio"  />
                      <span>Electric Scooter</span>
                    </label>
                  </p>
                  <p>
                    <label className="select-radio">
                      <input onChange={this.handleChange} name="type" value="Car" type="radio"  />
                      <span>Car</span>
                    </label>
                  </p>
                  <button className="btn waves-effect waves-light create-vehicle add-btn" type="submit">Add</button>
                </form>
              </div>
    )
  }
}
