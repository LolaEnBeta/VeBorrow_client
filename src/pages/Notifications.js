import React, { Component } from 'react';
import { withAuth } from '../lib/Auth';
import borrowService from './../lib/borrow-service';
import BorrowCard from '../components/BorrowCard';

class Notifications extends Component {
  state = {
    borrows: []
  }

  componentDidMount() {
    this.refresh();
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
      <div className="row vehicles-card">
        <div className="col s12 m6">
          <div>
            {
              this.state.borrows.length === 0 ?
              (
                <div className="card-content brown-text">
                  <span className="card-title">You don't have notifications yet...</span>
                </div>
              ): (
                <div>
                  {this.state.borrows.map((borrow) => {
                    return <BorrowCard key={borrow._id} borrow={borrow} refreshPage={this.refresh}/>
                  })}
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(Notifications);
