import React, { Component } from 'react'
import { withAuth } from '../lib/Auth'

class VehicleInfo extends Component {
  state = {
    type: "",
    ownerName: ""
  }

  componentDidMount() {
    this.setState({
      type: this.props.vehicle.type,
      ownerName: this.props.vehicle.ownerName
    })
  }

  render() {
    return (
      <div>
        <h3>INFO HERE!!!</h3>
          <p>Type of vehicle: {this.state.type}</p>
          <p>Owner: {this.state.ownerName}</p>
          <button onClick={this.borrowIt}>Borrow</button>
          <button onClick={this.hideInfo}>Close info</button>
      </div>
    )
  }
}

export default withAuth(VehicleInfo);
