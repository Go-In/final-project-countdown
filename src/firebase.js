import firebase from 'firebase/app';
import '@firebase/messaging';
import '@firebase/database';
import config from './config'


firebase.initializeApp(config.firebase);

function initializePush() {
   try {
      const messaging = firebase.messaging();
      messaging
         .requestPermission()
         .then(() => {
            console.log("Have Permission");
            return messaging.getToken();
         })
         .then(token => {
            const currentToken = localStorage.getItem('token')
            console.log(token)
            if (!currentToken) {
               firebase.database().ref('tokens').push({
                  token
               })
               localStorage.setItem('token', token)
            }
         })
         .catch(error => {
            if (error.code === "messaging/permission-blocked") {
               console.log("Please Unblock Notification Request Manually");
            } else {
               console.log("Error Occurred", error);
            }
         });
   } catch(err) {
      console.log(err)
   }
}

export {
  firebase,
  initializePush
}
