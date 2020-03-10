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
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content brown-text">
              <span className="card-title">{this.props.borrow.vehicleId['type']}</span>
              <p className="brown-text">Renter name: {this.props.borrow.renterId["firstName"]}</p>
              <p className="brown-text">Message: {this.props.borrow.message}</p>
            </div>
            <div className="card-action">
              {
                this.props.borrow.accepted ?
                (
                <div>
                  {
                    this.props.borrow.completed ?
                    (
                      <p className="brown-text">Finished!!</p>
                    ) : (
                      <p className="brown-text">In use...</p>
                    )
                  }
                </div>
                ) : (
                  <div>
                    {
                      this.props.borrow.rejected ?
                      (
                        <p className="brown-text">Rejected</p>
                      ) : (
                      <div>
                        <button className="waves-effect waves-light btn-small" onClick={this.acceptBorrow}>Accept <i className="far fa-check-square"></i></button>
                        <button className="waves-effect waves-light btn-small" onClick={this.rejectBorrow}>Reject <i className="fas fa-ban"></i></button>
                      </div>
                      )
                    }
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(IsOwnerNotification);
