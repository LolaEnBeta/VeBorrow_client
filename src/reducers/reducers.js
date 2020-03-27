import { SHOW_ALL_VEHICLES, DELETE_VEHICLE, ADD_VEHICLE } from '../actions/actions';

let counterId = 2;

const initialVehiclesState = {
  userVehicles: []
}

function reducer(state = initialVehiclesState, action) {
  switch(action.type) {
    case ADD_VEHICLE:
      let newVehicles = action.payload.vehicles;
      return { userVehicles: [...state.userVehicles, ...newVehicles]};
    case DELETE_VEHICLE:
      let newList = state.userVehicles.filter((vehicle) => vehicle.id !== action.id);
      return { userVehicles: newList};
    default:
      return state;

  }
}

export default reducer;