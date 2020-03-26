import { ADD_VEHICLE, DELETE_VEHICLE } from './actions';

let counterId = 2;

const initialVehiclesState = {
  userVehicles: [
    {
      vType: "Bike",
      id: 1
    },
    {
      vType: "Car",
      id: 2
    },
  ]
}

function reducer(state = initialVehiclesState, action) {
  switch(action.type) {
    case ADD_VEHICLE:
      counterId += 1;
      return { userVehicles: [...state.userVehicles, { vType: action.vType, id: counterId }]};
    case DELETE_VEHICLE:
      let newList = state.userVehicles.filter((vehicle) => vehicle.id !== action.id);
      return { userVehicles: newList};
    default:
      return state;

  }
}

export default reducer;