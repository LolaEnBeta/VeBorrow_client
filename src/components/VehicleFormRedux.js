import React, { Component } from 'react';
import { addVehicle } from '../actions/actions';
import { connect } from 'react-redux';

class VehicleFormRedux extends Component {
  state = {
    type: ""
  }

  createNewVehicle = (e) => {
    e.preventDefault();

    const {type} = this.state;

    this.props.addVehicle(type);
    this.props.hide();
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
export default connect(null, {addVehicle: addVehicle})(VehicleFormRedux);
