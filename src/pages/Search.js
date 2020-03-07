import React, { Component } from 'react'
import { withAuth } from '../lib/Auth';
import MapContainer from '../components/MapContainer';
import vehicleService from './../lib/vehicle-service';
import VehicleInfo from '../components/VehicleInfo';

class Search extends Component {
  state = {
    showInfo: false,
    type: "",
    ownerName: "",

  }

  showInfo = (vehicleId) => {
    vehicleService.getOne(vehicleId)
      .then( (vehicle) => {
        this.setState({
          showInfo: true,
          type: vehicle.type,
          ownerName: vehicle.ownerId["firstName"]
        });
      })
      .catch( (err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>SEARCH</h1>

        {
          this.state.showInfo
          &&
          <div>
            <VehicleInfo  vehicle={{type: this.state.type, ownerName: this.state.ownerName}}
                          hide={this.hideInfo}
                          borrow={this.borrowTheVehicle} />
          </div>
        }

        <MapContainer info={this.showInfo}/>
      </div>
    )
  }
}

export default withAuth(Search);
