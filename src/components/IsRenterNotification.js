import React, { Component } from 'react'
import { withAuth } from '../lib/Auth'

class IsRenterNotification extends Component {
  completeBorrow = (e) => {
    e.preventDefault();

    this.props.completed()
  }
  render() {
    return (
      <div>
        <h3>Type: {this.props.borrow.vehicleId['type']}</h3>
        <p>Owner name: {this.props.borrow.ownerId["firstName"]}</p>
        <p>Your message: {this.props.borrow.message}</p>
        {
          <div>
            {
              this.props.borrow.accepted ?
              (
                <div>
                  {
                    this.props.borrow.completed ?
                    (
                      <p>Finished!!</p>
                    ) : (
                      <button onClick={this.completeBorrow}>Return</button>
                    )
                  }
                </div>
              ): (
                <div>
                  {
                    this.props.borrow.rejected ?
                    (
                      <p>Rejected</p>
                    ) :(
                      <p>Pending...</p>
                    )
                  }

                </div>
              )
            }
          </div>
        }
      </div>
    )
  }
}

export default withAuth(IsRenterNotification);
