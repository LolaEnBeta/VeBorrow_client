import React, { Component } from 'react';
import { withAuth } from "./../lib/Auth";
import axios from 'axios';
import userService from './../lib/user-service';

class Profile extends Component {
  deleteAccount = () => {
    userService.deleteUser(this.props.user._id)
      .then( () => this.props.history.push('/home'))
      .catch( (err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>PROFILE</h1>
        <h1>USER {this.props.user.firstName} {this.props.user.secondName}</h1>
        <p>PhoneNumber {this.props.user.phoneNumber}</p>
        <p>ID {this.props.user._id}</p>
        <p>Email {this.props.user.email}</p>
        {this.props.user.owner && <p>Is owner</p>}
        {this.props.user.vehicles.map((item) => {
          console.log(item)
          return <p>ItemsId {item.type}</p>
        })}
        <p>{this.props.user.borrow}</p>

        <button onClick={this.editAccount}>Edit</button>
        <button onClick={this.deleteAccount}>Delete</button>
      </div>
    )
  }
}

export default withAuth(Profile);
