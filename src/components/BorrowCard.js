import React, { Component } from 'react'
import { withAuth } from '../lib/Auth'

class BorrowCard extends Component {
  render() {
    return (
      <div>
        <h3>Type: {this.props.borrow.vehicleId['type']}</h3>
        <p>Message: {this.props.borrow.message}</p>
        <p>Owner name: {this.props.borrow.ownerId["firstName"]}</p>
        {!this.props.borrow.completed && <button>Return it</button>}
        {this.props.borrow.completed && <p>Finished!</p>}
      </div>
    )
  }
}

export default withAuth(BorrowCard);
