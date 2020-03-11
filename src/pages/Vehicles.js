import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from '../lib/Auth';
import Vehicle from '../components/Vehicle';
import vehicleService from './../lib/vehicle-service';


class Vehicles extends Component {
  state = {
    vehicles: [],
    showForm: false,
    type: ""
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

  createNewVehicle = (e) => {
    e.preventDefault();

    vehicleService.createVehicle(this.state.type)
      .then(res => {
        this.setState({type: "", showForm: false})
        this.getAllVehicles();
      })
  }

  handleChange = (e) => {
    let value = document.querySelector('input[name="type"]:checked').value;

    this.setState({type: value});
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
