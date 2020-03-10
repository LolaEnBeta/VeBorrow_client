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
      <div>
        <h1>PROFILE</h1>
        <h1>USER {this.state.firstName} {this.state.secondName}</h1>
        <p>PhoneNumber {this.state.phoneNumber}</p>
        <p>ID {this.props.user._id}</p>
        <p>Email {this.props.user.email}</p>
        {this.props.user.owner && <p>Is owner</p>}
        {!this.props.user.owner && <p>Is not owner</p>}

        <Link to="/edit-profile" >Edit</Link>
        <button onClick={logout}>Logout</button>
        <br></br>
        <button onClick={this.deleteAccount}>Delete</button>
      </div>
    )
  }
}

export default withAuth(Profile);
