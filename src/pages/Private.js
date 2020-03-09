import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";

class Private extends Component {
  render() {
    return (
      <div>
        <h1>Private Route</h1>
        <h1>Welcome {this.props.user.firstName}</h1>

        <p>{this.props.user.secondName}</p>
        <p>{this.props.user.phoneNumber}</p>
        <p>{this.props.user.email}</p>
        <p>{this.props.user.owner}</p>

        <p>{this.props.user.borrow}</p>

        <Link to="my-profile">PROFILE</Link>
      </div>
    );
  }
}

export default withAuth(Private);
