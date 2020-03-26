export const ADD_VEHICLE = 'ADD_VEHICLE';
export const DELETE_VEHICLE = 'DELETE_VEHICLE';

export function addVehicle(vType) {
  return {type: ADD_VEHICLE, vType: vType}
}

export function deleteVehicle(id) {
  return {type: DELETE_VEHICLE, id: id}
}
