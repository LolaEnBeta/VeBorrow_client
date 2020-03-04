import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, phoneNumber, password } = this.state;

    this.props.signup(firstName, lastName, email, phoneNumber, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, email, phoneNumber, password } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <label>email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label>phoneNumber:</label>
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
