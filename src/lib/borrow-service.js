import axios from "axios";

class Borrow {
  constructor() {
    this.borrows = axios.create({
      baseURL: "http://localhost:5000/borrow",
      withCredentials: true
    });
  }

  create(ownerId, vehicleId, message) {
    return this.borrows
      .post('/', {ownerId, vehicleId, message})
      .then(({ data }) => data);
  }

  get() {
    return this.borrows
      .get()
      .then(({data}) => data);
  }

  returnVehicle(borrowId) {
    return this.borrows
      .put(`/completed/${borrowId}`)
      .then(({data}) => data)
  }

  acceptBorrow(borrowId) {
    return this.borrows
      .put(`/accepted/${borrowId}`)
      .then(({data}) => data);
  }
}

const borrowService = new Borrow();
// `borrowService` is the object with the above axios request methods

export default borrowService;
