import React, { Component } from 'react';
import { withAuth } from '../lib/Auth';
import borrowService from './../lib/borrow-service';

class BorrowCard extends Component {
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
        <h3>Type: {this.props.borrow.vehicleId['type']}</h3>
        <p>Message: {this.props.borrow.message}</p>
        <p>Owner name: {this.props.borrow.ownerId["firstName"]}</p>
        {!this.props.borrow.completed && <button onClick={this.completeBorrow}>Return it</button>}
        {this.props.borrow.completed && <p>Finished!</p>}
      </div>
    )
  }
}

export default withAuth(BorrowCard);
