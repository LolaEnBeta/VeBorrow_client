import React, { Component } from 'react'
import { withAuth } from '../lib/Auth'

class Notifications extends Component {
  state = {
    borrows: []
  }

  render() {
    return (
      <div>
        <h1>Notifications</h1>
        <ul>
          {this.state.borrows.map((borrow, i) => {
            return <li>{i+1} - {borrow}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default withAuth(Notifications);
