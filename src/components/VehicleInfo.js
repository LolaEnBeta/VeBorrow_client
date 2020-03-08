import React, { Component } from 'react'
import { withAuth } from '../lib/Auth'

class VehicleInfo extends Component {
  state = {
    type: "",
    ownerName: "",
    showMessageForm: false,
    message: ""
  }

  componentDidMount() {
    this.setState({
      type: this.props.vehicle.type,
      ownerName: this.props.vehicle.ownerName
    })
  }

  hideInfo = (e) => {
    e.preventDefault();

    this.props.hide();
  }

  borrowIt = (e) => {
    e.preventDefault();

    const message = this.state.message;

    this.props.borrow(message);
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  }

  completeForm = (e) => {
    e.preventDefault();
    this.setState({showMessageForm: true})
  }

  render() {
    return (
      <div>
        <h3>INFO HERE!!!</h3>
          <p>Type of vehicle: {this.state.type}</p>
          <p>Owner: {this.state.ownerName}</p>
          {
            this.state.showMessageForm &&
            <div>
              <label>How many time you need it mor or less?</label>
              <input type="text" name="message" value={this.state.message} onChange={this.handleChange}></input>
            </div>
          }

          {
            !this.state.showMessageForm &&
            <button onClick={this.completeForm}>Borrow</button>
          }

          {
            this.state.showMessageForm &&
            <button onClick={this.borrowIt}>Accept</button>
          }
          <button onClick={this.hideInfo}>Close info</button>
      </div>
    )
  }
}

export default withAuth(VehicleInfo);
