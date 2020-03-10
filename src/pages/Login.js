import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.login(email, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (

      <div className="row login-page">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="images/veborrow.png"/>
            </div>
            <div className="card-content">
              <form onSubmit={this.handleFormSubmit}>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleChange}
                  />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />

                <button class="btn waves-effect waves-light" type="submit" name="action">LOGIN</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
