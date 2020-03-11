import axios from "axios";

class User {
  constructor() {
    this.user = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/user`,
      withCredentials: true
    });
  }

  getUser(userId) {
    return this.user
      .get(`/${userId}`)
      .then(({data}) => data)
  }

  deleteUser(userId) {
    return this.user
      .delete(`/${userId}`, {})
      .then(({data}) => data);
  }

  updateUser(userId, firstName, lastName, phoneNumber) {
    return this.user
      .put(`/${userId}`, {firstName, lastName, phoneNumber})
      .then(({data}) => data)
  }
}
const userService = new User();
// `userService` is the object with the above axios request methods

export default userService;
