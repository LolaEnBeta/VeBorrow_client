import React, { Component } from 'react';
import { withAuth } from "./../lib/Auth";
import userService from './../lib/user-service';
import authService from './../lib/auth-service';


class EditProfileForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {firstName, lastName, phoneNumber} = this.state
    const userId = this.props.user._id

    userService.updateUser(userId, firstName, lastName, phoneNumber)
      .then( () => this.props.history.push('my-profile'))
      .catch( (err) => console.log(err));
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>First name</label>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />

        <label>Last name</label>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />

        <label>Phone number</label>
        <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />

        <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default withAuth(EditProfileForm);
