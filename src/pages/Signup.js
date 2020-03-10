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
      <div className="row signup-page">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="images/veborrow.png"/>
            </div>
            <div className="card-content">
              <form onSubmit={this.handleFormSubmit}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Firs name"
                  value={firstName}
                  onChange={this.handleChange}
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={lastName}
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleChange}
                />

                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={this.handleChange}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />

                <button className="btn waves-effect waves-light" type="submit" name="action">SIGNUP</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);
