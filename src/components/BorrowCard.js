import React, { Component } from 'react';
import { withAuth } from '../lib/Auth';
import borrowService from './../lib/borrow-service';

class BorrowCard extends Component {
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
          this.props.borrow.ownerId["_id"] === this.props.user._id &&
          <div>
            <h3>Type: {this.props.borrow.vehicleId['type']}</h3>
            <p>Renter name: {this.props.borrow.renterId["firstName"]}</p>
            <p>Message: {this.props.borrow.message}</p>
            {
              <div>
                {
                  !this.props.borrow.accepted &&
                  <div>
                    {
                      this.props.borrow.rejected &&
                      <p>Rejected</p>
                    }
                    {
                      !this.props.borrow.rejected &&
                      <div>
                        <button onClick={this.acceptBorrow}>Accept</button>
                        <button onClick={this.rejectBorrow}>Reject</button>
                      </div>
                    }
                  </div>
                }
                {
                  this.props.borrow.accepted &&
                  <div>
                    {
                      !this.props.borrow.completed &&
                      <p>In use...</p>
                    }
                    {
                      this.props.borrow.completed &&
                      <p>Finished!!</p>
                    }
                  </div>
                }
              </div>
            }
          </div>
        }

        {
          !this.props.borrow.ownerId["_id"] === this.props.user._id &&
          <div>
            <h3>Type: {this.props.borrow.vehicleId['type']}</h3>
            <p>Owner name: {this.props.borrow.ownerId["firstName"]}</p>
            <p>Your message: {this.props.borrow.message}</p>
            {
              <div>
                {
                  !this.props.borrow.accepted &&
                  <div>
                    {
                      this.props.borrow.rejected &&
                      <p>Rejected</p>
                    }
                    {
                      !this.props.borrow.rejected &&
                      <div>
                        <p>Pending...</p>
                      </div>
                    }
                  </div>
                }
                {
                  this.props.borrow.accepted &&
                  <div>
                    {
                      !this.props.borrow.completed &&
                      <button onClick={this.completeBorrow}>Return</button>
                    }
                    {
                      this.props.borrow.completed &&
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
