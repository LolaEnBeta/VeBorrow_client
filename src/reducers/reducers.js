import { SHOW_ALL_VEHICLES, DELETE_VEHICLE, ADD_VEHICLE } from '../actions/actions';

const initialVehiclesState = {
  userVehicles: []
}

function reducer(state = initialVehiclesState, action) {
  switch(action.type) {
    case SHOW_ALL_VEHICLES:
      const allVehicles = action.payload.vehicles;
      return { userVehicles: [...state.userVehicles, ...allVehicles]};

    case ADD_VEHICLE:
      let newVehicle = action.payload.vehicle;
      return { userVehicles: [...state.userVehicles, newVehicle]};

    case DELETE_VEHICLE:
      const vehicleToDelete = action.payload.vehicle;
      let newList = state.userVehicles.filter((vehicle) => vehicle._id !== vehicleToDelete._id);
      return { userVehicles: newList};

    default:
      return state;
  }
}

export default reducer;