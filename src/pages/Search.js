import React, { Component } from 'react'
import { withAuth } from '../lib/Auth';
import MapContainer from '../components/MapContainer';
import vehicleService from './../lib/vehicle-service';

class Search extends Component {
  state = {
    showInfo: false,
    type: "",
    ownerName: "",

  }

  render() {
    return (
      <div>
        <h1>SEARCH</h1>

        {
          this.state.showInfo
          &&
          <div>
            <h3>INFO HERE!!!</h3>
            <p>{this.state.type}</p>
            <p>{this.state.ownerName}</p>
            <p>FIN</p>
          </div>
        }

        <MapContainer info={this.showInfo}/>
      </div>
    )
  }
}

export default withAuth(Search);
