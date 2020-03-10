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

  componentDidMount() {
    authService.me()
      .then((user) => {
        const {firstName, lastName, phoneNumber} = user;
        this.setState({firstName, lastName, phoneNumber});
      })
      .catch((error) => console.log(error));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {firstName, lastName, phoneNumber} = this.state
    const userId = this.props.user._id

    userService.updateUser(userId, firstName, lastName, phoneNumber)
      .then( () => this.props.history.push('/my-profile'))
      .catch( (err) => console.log(err));
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    return (

      <div className="row signup-page">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="images/veborrow.png"/>
            </div>
            <div className="card-content">
              <form onSubmit={this.handleFormSubmit}>
                <label>First name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Firs name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />

                <label>Last name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />

                <label>Phone number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone number"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />

                <button className="btn waves-effect waves-light" type="submit" name="action">SAVE <i className="far fa-share-square"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>


      // <div>
      //   <form onSubmit={this.handleSubmit}>
      //   <label>First name</label>
      //   <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />

      //   <label>Last name</label>
      //   <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />

      //   <label>Phone number</label>
      //   <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />

      //   <button type="submit">Save</button>
      //   </form>
      // </div>
    )
  }
}

export default withAuth(EditProfileForm);
