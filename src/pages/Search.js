import React, { Component } from 'react'
import { withAuth } from '../lib/Auth';

class Search extends Component {
  render() {
    return (
      <div>
        <h1>SEARCH</h1>
      </div>
    )
  }
}

export default withAuth(Search);
