import React, { Component } from 'react'
import { withAuth } from '../lib/Auth';
import MapContainer from '../components/MapContainer';

class Search extends Component {
  render() {
    return (
      <div>
        <h1>SEARCH</h1>
        <MapContainer />
      </div>
    )
  }
}

export default withAuth(Search);
