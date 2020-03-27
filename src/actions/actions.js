import vehicleService from './../lib/vehicle-service';

export const ADD_VEHICLE = 'ADD_VEHICLE';
export const DELETE_VEHICLE = 'DELETE_VEHICLE';
export const SHOW_ALL_VEHICLES = 'SHOW_ALL_VEHICLES';

export const REQUEST = 'REQUEST';
export const FAILURE = 'FAILURE';

function receiveAllVehicles(vehicles) {
  return {
    type: SHOW_ALL_VEHICLES,
    payload: {
      vehicles
    }
  }
}

function request() {
  return { type: REQUEST }
}

function addNewVehicle(vehicle) {
  return {
    type: ADD_VEHICLE,
    payload: {
      vehicle
    }
  }
}

function deleteVehicle(vehicle) {
  return {
    type: DELETE_VEHICLE,
    payload: {
      vehicle
    }
  }
}

function errorHasOccurred(message) {
  return {
    type: FAILURE,
    payload: {
      message
    }
  }
}

export function getAllVehicles() {
  return function(dispatch) {
    //dispatch(request())
    return vehicleService.getAllUserVehicles()
      .then(response => {
        if (response >= 400) {
          return dispatch(errorHasOccurred("Bad response from server"));
        }
        return dispatch(receiveAllVehicles(response));
      })

  }
}

export function addVehicle(vType) {
  return function (dispatch) {
    dispatch(request())
    return vehicleService.createVehicle(vType)
      .then(response => {
        if (response >= 400) {
          dispatch(errorHasOccurred("Bad response from server"));
        }
        return response;
      })
      .then((vehicle) => dispatch(addNewVehicle(vehicle)));
  }
}

export function deleteVehicleById(id) {
  return function(dispatch) {
    //dispatch(request())
    return vehicleService.deleteOneVehicle(id)
      .then(response => {
        if (response >= 400) {
          dispatch(errorHasOccurred());
        }
        return response;
      })
      .then((vehicleToDelete) => dispatch(deleteVehicle(vehicleToDelete)));
  }
}
