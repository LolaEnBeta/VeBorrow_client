import axios from "axios";

class Vehicle {
  constructor() {
    this.vehicles = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/vehicles`,
      withCredentials: true
    });
  }

  getAllUserVehicles() {
    return this.vehicles
      .get()
      .then(({ data }) => data);
  }

  getAllAvailableVehicles() {
    return this.vehicles
      .get('/available')
      .then(({ data }) => data);
  }

  createVehicle(type) {
    return this.vehicles
      .post('/', {type})
      .then(({data}) => data);
  }

  deleteOneVehicle(vehicleId) {
    return this.vehicles
      .delete(`/${vehicleId}`)
      .then(({data}) => data);
  }

  updateVehicle(vehicleId, available, latitude, longitude) {
    return this.vehicles
      .put(`/${vehicleId}`, {available, latitude, longitude})
      .then(({data}) => data);
  }

  getOne(vehicleId) {
    return this.vehicles
      .get(`/${vehicleId}`)
      .then(({data}) => data);
  }
}

const vehicleService = new Vehicle();
// `vehicleService` is the object with the above axios request methods

export default vehicleService;
