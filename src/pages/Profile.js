import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import userService from './../lib/user-service';
import authService from '../lib/auth-service';

class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: ""
  }

  componentDidMount() {
    authService.me()
      .then((user) => {
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
        })
      })
  }

  deleteAccount = () => {
    userService.deleteUser(this.props.user._id)
      .then( () => this.props.history.push('/home'))
      .catch( (err) => console.log(err));
  }

  render() {
    const { logout } = this.props;
    return (
      <div className="row profile-card">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content brown-text">
              <span className="card-title">Your Profile</span>
              <h6> Name: <span>{this.state.firstName} {this.state.secondName}</span></h6> 
              <h6> Email: <span>{this.props.user.email}</span></h6> 
              <h6> Phone number: <span>{this.state.phoneNumber}</span></h6> 
            </div>
            <div className="card-action">
            <button className="waves-effect waves-light btn"><Link className="color-white" to="/edit-profile" >Edit</Link></button>
              <button className="waves-effect waves-light btn" onClick={logout}>Logout</button>
              <button className="waves-effect waves-light btn" onClick={this.deleteAccount}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(Profile);
