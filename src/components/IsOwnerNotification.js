import React, { Component } from 'react'
import { withAuth } from '../lib/Auth'

class IsOwnerNotification extends Component {
  acceptBorrow = (e) => {
    e.preventDefault();

    this.props.accepted();
  }

  rejectBorrow = (e) => {
    e.preventDefault();

    this.props.rejected();
  }

  render() {
    return (
      <div>
        <h3>Type: {this.props.borrow.vehicleId['type']}</h3>
        <p>Renter name: {this.props.borrow.renterId["firstName"]}</p>
        <p>Message: {this.props.borrow.message}</p>
        {
          this.props.borrow.accepted ?
          (
          <div>
            {
              this.props.borrow.completed ?
              (
                <p>Finished!!</p>
              ) : (
                <p>In use...</p>
              )
            }
          </div>
          ) : (
            <div>
              {
                this.props.borrow.rejected ?
                (
                  <p>Rejected</p>
                ) : (
                <div>
                  <button onClick={this.acceptBorrow}>Accept</button>
                  <button onClick={this.rejectBorrow}>Reject</button>
                </div>
                )
              }
            </div>
          )
        }
      </div>
    )
  }
}

export default withAuth(IsOwnerNotification);
