import React, { Component } from 'react'
import { withAuth } from '../lib/Auth'

class Notifications extends Component {
  render() {
    return (
      <div>
        <h1>Notifications</h1>
      </div>
    )
  }
}

export default withAuth(Notifications);
