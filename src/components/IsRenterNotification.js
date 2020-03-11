import React, { Component } from 'react'
import { withAuth } from '../lib/Auth'

class IsRenterNotification extends Component {
  completeBorrow = (e) => {
    e.preventDefault();

    this.props.completed()
  }
  render() {
    return (

      <div className="row borrow-info">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content brown-text">
              <span className="card-title">{this.props.borrow.vehicleId['type']}</span>
              <p className="brown-text">Owner name: {this.props.borrow.ownerId["firstName"]}</p>
              <p className="brown-text">Your message: {this.props.borrow.message}</p>
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
                      <button className="waves-effect waves-light btn-small" onClick={this.completeBorrow}>Return <i className="far fa-hand-point-right"></i></button>
                    )
                  }
                </div>
              ): (
                <div>
                  {
                    this.props.borrow.rejected ?
                    (
                      <p className="brown-text">Rejected</p>
                    ) :(
                      <p className="brown-text">Pending...</p>
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

export default withAuth(IsRenterNotification);
