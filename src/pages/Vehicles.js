import React, { Component } from 'react'
import { withAuth } from '../lib/Auth'

class Vehicles extends Component {
  render() {
    return (
      <div>
        {this.props.user.vehicles.map((vehicle) => {
          return <p>{vehicle}</p>
        })}
      </div>
    )
  }
}

export default withAuth(Vehicles);
