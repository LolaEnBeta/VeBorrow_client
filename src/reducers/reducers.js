import { SHOW_ALL_VEHICLES, DELETE_VEHICLE, ADD_VEHICLE, TURN_VEHICLE_ON, TURN_VEHICLE_OFF } from '../actions/actions';

const initialVehiclesState = {
  userVehicles: []
}

function reducer(state = initialVehiclesState, action) {
  switch(action.type) {
    case SHOW_ALL_VEHICLES:
      const allVehicles = action.payload.vehicles;
      return { userVehicles: [...allVehicles]};

    case ADD_VEHICLE:
      let newVehicle = action.payload.vehicle;
      return { userVehicles: [...state.userVehicles, newVehicle]};

    case DELETE_VEHICLE:
      const vehicleToDelete = action.payload.vehicle;
      let newList = state.userVehicles.filter((vehicle) => vehicle._id !== vehicleToDelete._id);
      return { userVehicles: newList};

    case TURN_VEHICLE_ON:
      const vehicleOn = action.payload.vehicle;
      let withOnList = state.userVehicles.filter((vehicle) => vehicle._id !== vehicleOn._id);
      return {userVehicles: [...withOnList, vehicleOn]};

    case TURN_VEHICLE_OFF:
        const vehicleOff = action.payload.vehicle;
        let withOffList = state.userVehicles.filter((vehicle) => vehicle._id !== vehicleOff._id);
        return {userVehicles: [...withOffList, vehicleOff]};

    default:
      return state;
  }
}

export default reducer;