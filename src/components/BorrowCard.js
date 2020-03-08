import React, { Component } from 'react';
import { withAuth } from '../lib/Auth';
import borrowService from './../lib/borrow-service';

class BorrowCard extends Component {
  state = {
    owner: false,
    accepted: false,
    rejected: false,
    completed: false
  }

  completeBorrow = (e) => {
    e.preventDefault();

    const borrowId = this.props.borrow._id;
    borrowService.returnVehicle(borrowId)
      .then( () => {this.props.refreshPage()})
      .catch( (err) => console.log(err));
  }

  render() {
    return (
      <div>
        {
          this.state.owner &&
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
                        <button>Accept</button>
                        <button>Reject</button>
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
          !this.state.owner &&
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
                      <button>Return</button>
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
