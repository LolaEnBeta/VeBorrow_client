export const ADD_VEHICLE = 'ADD_VEHICLE';

export function addVehicle(vType) {
  return {type: ADD_VEHICLE, vType: vType}
}
