import React, { Component } from 'react';
import { withAuth } from "./../lib/Auth";
import userService from './../lib/user-service';

class EditProfileForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: ""
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
        <input type="text" name="firstName" value={this.statse.firstName} onChange={this.handleChange} />

        <label>Last name</label>
        <input type="text" name="firstName" value={this.statse.lastName} onChange={this.handleChange} />

        <label>Phone number</label>
        <input type="text" name="firstName" value={this.statse.phoneNumber} onChange={this.handleChange} />

        <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default withAuth(EditProfileForm);
