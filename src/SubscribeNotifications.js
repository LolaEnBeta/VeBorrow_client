export default class SubscribeNotifications {

  initialize(userId) {
    const publicVapidKey = process.env.REACT_APP_PUBLIC_VAPED_KEY;

    //Check for service worker
    if ("serviceWorker" in navigator) {
      registerPushNotification().catch(err => console.error(err));
    }

    //Register serviceWorker, register Push, send Push (notification)
    async function registerPushNotification() {
      // Register serviceWorker
      console.log("Registering serviceWorker...");
      const register = await navigator.serviceWorker.register("/worker.js", {
        scope: "/"
      });

      console.log("SeviceWorker registered...");

      // Register Push
      console.log("Registering Push...");
      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
      });

      console.log(subscription);

      console.log("Push registered...");

      // Send Push notification
      console.log("Sending Push...");
      await fetch(`http://localhost:5000/subscribe/${userId}`, {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
          "content-type": "application/json"
        }
      });
      console.log("Push sent...");
    }

    function urlBase64ToUint8Array(base64String) {
      const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding)
        .replace(/-/g, "+")
        .replace(/_/g, "/");

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    }
  }
}
