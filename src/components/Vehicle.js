import React, { Component } from 'react'

export default class Vehicle extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.vehicle.type}</h1>
      </div>
    )
  }
}
