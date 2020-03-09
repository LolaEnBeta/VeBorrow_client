import React, { Component } from 'react';
import { withAuth } from '../lib/Auth';
import borrowService from './../lib/borrow-service';
import IsOwnerNotification from './IsOwnerNotification';
import IsRenterNotification from './IsRenterNotification';

class BorrowCard extends Component {
  acceptBorrow = () => {
    const borrowId = this.props.borrow._id;
    const vehicleId = this.props.borrow.vehicleId["_id"];

    borrowService.acceptBorrow(borrowId, vehicleId)
      .then( () => this.props.refreshPage())
      .catch( (err) => console.log(err));
  }

  rejectBorrow = () => {
    const borrowId = this.props.borrow._id;
    borrowService.rejectBorrow(borrowId)
      .then( () => this.props.refreshPage())
      .catch( (err) => console.log(err));
  }

  completeBorrow = () => {
    const borrowId = this.props.borrow._id;
    const vehicleId = this.props.borrow.vehicleId["_id"];

    let latitude = "";
    let longitude = "";

    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      borrowService.returnVehicle(borrowId, vehicleId, latitude, longitude)
      .then( () => this.props.refreshPage())
      .catch( (err) => console.log(err));
     });
  }

  render() {
    return (
      <div>
        {
          this.props.borrow.ownerId["_id"] === this.props.user._id ?
          (
            <IsOwnerNotification borrow={this.props.borrow} accepted={this.acceptBorrow} rejected={this.rejectBorrow}/>
          ) : (
            <IsRenterNotification borrow={this.props.borrow} completed={this.completeBorrow} />
          )
        }
      </div>
    )
  }
}

export default withAuth(BorrowCard);
