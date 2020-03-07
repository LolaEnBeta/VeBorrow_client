import React, { Component } from 'react'
import { withAuth } from '../lib/Auth'

class VehicleInfo extends Component {
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
