import React, { Component } from 'react';
import { withAuth } from '../lib/Auth';
import borrowService from './../lib/borrow-service';
import BorrowCard from '../components/BorrowCard';

class Notifications extends Component {
  state = {
    borrows: []
  }

  componentDidMount() {
    borrowService.get()
      .then( (borrows) => {
        this.setState({ borrows })
      })
      .catch( (err) => console.log(err));
  }

  refresh = () => {
    borrowService.get()
      .then( (borrows) => {
        this.setState({ borrows })
      })
      .catch( (err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Notifications</h1>
          {this.state.borrows.map((borrow) => {
            return <BorrowCard key={borrow._id} borrow={borrow} refreshPage= {this.refresh}/>
          })}
      </div>
    )
  }
}

export default withAuth(Notifications);
