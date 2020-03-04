import React, { Component } from 'react';
import { withAuth } from "./../lib/Auth";

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>PROFILE</h1>
        <h1>USER {this.props.user.firstName} {this.props.user.secondName}</h1>
        <p>PhoneNumber {this.props.user.phoneNumber}</p>
        <p>Email {this.props.user.email}</p>
        {this.props.user.owner && <p>Is owner</p>}
        {this.props.user.vehicles.map((item) => {
          return <p>ItemsId {item}</p>
        })}
        <p>{this.props.user.borrow}</p>
      </div>
    )
  }
}

export default withAuth(Profile);
