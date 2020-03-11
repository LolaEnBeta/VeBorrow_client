import axios from "axios";
import SubscribeNotifications from "../SubscribeNotifications";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  signup({ firstName, lastName, email, phoneNumber, password }) {
    return this.auth
      .post("/auth/signup", { firstName, lastName, email, phoneNumber, password })
      .then(({ data }) => {
        let subscribeNotifications = new SubscribeNotifications();
        subscribeNotifications.initialize(data._id);
        return data
      });
  }

  login({ email, password }) {
    return this.auth
      .post("/auth/login", { email, password })
      .then(({ data }) => {
        let subscribeNotifications = new SubscribeNotifications();
        subscribeNotifications.initialize(data._id);
        return data;
      })
  }

  logout() {
    return this.auth
      .post("/auth/logout", {})
      .then(({ data }) => data);
  }

  me() {
    return this.auth
      .get("/auth/me")
      .then(({ data }) => data);
  }
}

const authService = new Auth();
// `authService` is the object with the above axios request methods

export default authService;
