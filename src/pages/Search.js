import React, { Component } from 'react'
import { withAuth } from '../lib/Auth';
import MapContainer from '../components/MapContainer';
import vehicleService from './../lib/vehicle-service';
import borrowService from './../lib/borrow-service';
import VehicleInfo from '../components/VehicleInfo';

class Search extends Component {
  state = {
    showInfo: false,
    type: "",
    vehicleId: "",
    ownerName: "",
    ownerId: ""

  }

  showInfo = (vehicleId) => {
    vehicleService.getOne(vehicleId)
      .then( (vehicle) => {
        this.setState({
          showInfo: true,
          type: vehicle.type,
          vehicleId: vehicle._id,
          ownerName: vehicle.ownerId["firstName"],
          ownerId: vehicle.ownerId["_id"]
        });
      })
      .catch( (err) => console.log(err));
  }

  hideInfo = () => {
    this.setState({showInfo: false});
  }

  borrowTheVehicle = (message) => {
    const ownerId = this.state.ownerId;
    const vehicleId = this.state.vehicleId;

    borrowService.create(ownerId, vehicleId, message)
      .then( () => {
        this.props.history.push('/notifications');
      })
      .catch( (err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row profile-card">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content brown-text">
                <span className="card-title">Search a vehicle</span>
                {
                  this.state.showInfo
                  &&
                  <div>
                    <VehicleInfo  vehicle={{type: this.state.type, ownerName: this.state.ownerName, ownerId: this.state.ownerId}}
                                  hide={this.hideInfo}
                                  borrow={this.borrowTheVehicle} />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <MapContainer info={this.showInfo}/>
        </div>
      </div>
    )
  }
}

export default withAuth(Search);
