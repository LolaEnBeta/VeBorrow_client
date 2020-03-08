import React, { Component } from 'react';
import { withAuth } from '../lib/Auth';
import borrowService from './../lib/borrow-service';

class Notifications extends Component {
  state = {
    borrows: []
  }

  componentDidMount() {
    borrowService.get()
      .then( (borrowList) => {
        this.setState({ borrows: borrowList })
      })
      .catch( (err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Notifications</h1>
          {this.state.borrows.map((borrow, i) => {
            console.log(borrow)
            return(
              <div key={borrow._id}>
                <h3>Type: {borrow.vehicleId['type']}</h3>
                <p>Message: {borrow.message}</p>
                <p>Owner name: {borrow.ownerId["firstName"]}</p>
                {!borrow.completed && <button>Return it</button>}
                {borrow.completed && <p>Finished!</p>}
              </div>
            )
          })}
      </div>
    )
  }
}

export default withAuth(Notifications);
