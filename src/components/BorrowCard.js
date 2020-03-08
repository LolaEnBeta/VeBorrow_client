import React, { Component } from 'react';
import { withAuth } from '../lib/Auth';
import borrowService from './../lib/borrow-service';

class BorrowCard extends Component {
  state = {
    isOwner: false,
    accepted: false,
    rejected: false,
    completed: false
  }

  componentDidMount() {
    this.checkIfIsOwner();
    this.checkIfIsAccepted();
    this.checkIfIsRejected();
    this.checkIfIsCompleted();
  }

  checkIfIsOwner = () => {
    if (this.props.borrow.ownerId["_id"] === this.props.user._id) {
      this.setState({isOwner: true})
    }
  }

  checkIfIsAccepted = () => {
    if (this.props.borrow.accepted) {
      this.setState({accepted: true})
    }
  }

  checkIfIsRejected = () => {
    if (this.props.borrow.rejected) {
      this.setState({rejected: true})
    }
  }

  checkIfIsCompleted = () => {
    if (this.props.borrow.completed) {
      this.setState({completed: true})
    }
  }

  acceptBorrow = (e) => {
    e.preventDefault();

    const borrowId = this.props.borrow._id;
    borrowService.acceptBorrow(borrowId)
      .then( () => this.props.refreshPage())
      .catch( (err) => console.log(err));
  }

  rejectBorrow = (e) => {
    e.preventDefault();

    const borrowId = this.props.borrow._id;
    borrowService.rejectBorrow(borrowId)
      .then( () => this.props.refreshPage())
      .catch( (err) => console.log(err));
  }

  completeBorrow = (e) => {
    e.preventDefault();

    const borrowId = this.props.borrow._id;
    borrowService.returnVehicle(borrowId)
      .then( () => this.props.refreshPage())
      .catch( (err) => console.log(err));
  }

  render() {
    return (
      <div>
        {
          this.state.isOwner &&
          <div>
            <h3>Type: {this.props.borrow.vehicleId['type']}</h3>
            <p>Renter name: {this.props.borrow.renterId["firstName"]}</p>
            <p>Message: {this.props.borrow.message}</p>
            {
              <div>
                {
                  !this.state.accepted &&
                  <div>
                    {
                      this.state.rejected &&
                      <p>Rejected</p>
                    }
                    {
                      !this.state.rejected &&
                      <div>
                        <button onClick={this.acceptBorrow}>Accept</button>
                        <button onClick={this.rejectBorrow}>Reject</button>
                      </div>
                    }
                  </div>
                }
                {
                  this.state.accepted &&
                  <div>
                    {
                      !this.state.completed &&
                      <p>In use...</p>
                    }
                    {
                      this.state.completed &&
                      <p>Finished!!</p>
                    }
                  </div>
                }
              </div>
            }
          </div>
        }

        {
          !this.state.isOwner &&
          <div>
            <h3>Type: {this.props.borrow.vehicleId['type']}</h3>
            <p>Owner name: {this.props.borrow.ownerId["firstName"]}</p>
            <p>Your message: {this.props.borrow.message}</p>
            {
              <div>
                {
                  !this.state.accepted &&
                  <div>
                    {
                      this.state.rejected &&
                      <p>Rejected</p>
                    }
                    {
                      !this.state.rejected &&
                      <div>
                        <p>Pending...</p>
                      </div>
                    }
                  </div>
                }
                {
                  this.state.accepted &&
                  <div>
                    {
                      !this.state.completed &&
                      <button onClick={this.completeBorrow}>Return</button>
                    }
                    {
                      this.state.completed &&
                      <p>Finished!!</p>
                    }
                  </div>
                }
              </div>
            }
          </div>
        }
      </div>
    )
  }
}

export default withAuth(BorrowCard);
