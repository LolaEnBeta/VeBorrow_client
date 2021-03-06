import React, { Component } from 'react'
import { connect } from 'react-redux'
import VehicleFormRedux from '../components/VehicleFormRedux';
import VehicleRedux from '../components/VehicleRedux';
import { getAllVehicles } from '../actions/actions';


class VehiclesRedux extends Component {
  state = {
    showForm: false
  }

  componentDidMount() {
    this.props.getAllVehicles();
  }

  hideForm = () => {
    this.setState({showForm: false})
  }

  render() {
    return (
      <div className="row vehicles-card">
        <div className="col s12 m6">
          <div className="card">
            {
              this.state.showForm ?
              (
                <button className="btn waves-effect waves-light create-vehicle" onClick={() => {this.setState({showForm: !this.state.showForm})}}>Hide form <i className="fas fa-arrow-up"></i></button>
              ): (
                <button className="btn waves-effect waves-light create-vehicle" onClick={() => {this.setState({showForm: !this.state.showForm})}}> Create vehicle <i className="far fa-plus-square"></i></button>
              )
            }
              {
                this.state.showForm &&
                <VehicleFormRedux hide={this.hideForm}/>
            }
            <h4 className="brown-text select-radio">Your vehicles</h4>
            {this.props.vehicles.map((vehicle) => {
              return <VehicleRedux key={vehicle._id} vehicle={vehicle} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {vehicles: state.userVehicles}
}

export default connect(mapStateToProps, { getAllVehicles })(VehiclesRedux);
