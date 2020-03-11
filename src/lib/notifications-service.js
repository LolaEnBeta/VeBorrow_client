import axios from "axios";

class Notification {
  constructor() {
    this.notifications = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/subscribe`,
      withCredentials: true
    });
  }

  generate(userId) {
    return this.notifications
      .post(`/${userId}`)
      .then(() => console.log("Notification generated."))
  }
}

const notificationService = new Notification();
// `borrowService` is the object with the above axios request methods

export default notificationService;
