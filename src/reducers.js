import { ADD_VEHICLE } from './actions';

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
      return { userVehicles: [...state.userVehicles, { vType: action.vType, id: state.userVehicles.length +1 }]};
    default:
      return state;

  }
}

export default reducer;