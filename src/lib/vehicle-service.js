import axios from "axios";

class Vehicle {
  constructor() {
    this.vehicles = axios.create({
      baseURL: "http://localhost:5000/vehicles",
      withCredentials: true
    });
  }

  getAllVehicles() {
    return this.vehicles
      .get()
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

  updateVehicle(vehicleId, available) {
    return this.vehicles
      .put(`/${vehicleId}`, {available, latitude: "a", longitude: "b"})
      .then(({data}) => data);
  }
}

const vehicleService = new Vehicle();
// `vehicleService` is the object with the above axios request methods

export default vehicleService;
