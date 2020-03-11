import React, { Component } from 'react'
import { withAuth } from '../lib/Auth'

class VehicleInfo extends Component {
  state = {
    type: "",
    ownerName: "",
    showMessageForm: false,
    message: ""
  }

  componentDidMount() {
    this.setState({
      type: this.props.vehicle.type,
      ownerName: this.props.vehicle.ownerName
    });
  }

  hideInfo = (e) => {
    e.preventDefault();

    this.props.hide();
  }

  borrowIt = (e) => {
    e.preventDefault();

    const message = this.state.message;

    this.props.borrow(message);
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  }

  completeForm = (e) => {
    e.preventDefault();
    this.setState({showMessageForm: true})
  }

  render() {
    return (
      <div>
        {
          this.props.vehicle.ownerId === this.props.user._id ?
          (
            <div>
              <h3>Your vehicle</h3>
              <p>Type of vehicle: {this.state.type}</p>
              <button className="waves-effect waves-light btn" onClick={this.hideInfo}><i className="fas fa-times"></i></button>
            </div>
          ) : (
            <div>
              <h5>{this.state.type}</h5>
              <p>Owner: {this.state.ownerName}</p>
              {
                this.state.showMessageForm ?
                (
                  <div>
                    <label>How many time you need it more or less?</label>
                    <input type="text" name="message" value={this.state.message} onChange={this.handleChange}></input>
                    <br></br>
                    <div className="borrow">
                      <button className="waves-effect waves-light btn" onClick={this.hideInfo}><i className="fas fa-times"></i></button>
                      <button className="waves-effect waves-light btn" onClick={this.borrowIt}>Accept</button>
                    </div>
                  </div>
                ) : (
                  <div className="borrow">
                    <button className="waves-effect waves-light btn" onClick={this.hideInfo}><i className="fas fa-times"></i></button>
                    <button className="waves-effect waves-light btn" onClick={this.completeForm}>Borrow</button>
                  </div>

                )
              }
            </div>
          )
        }
      </div>
    )
  }
}

export default withAuth(VehicleInfo);
