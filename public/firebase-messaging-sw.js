/* eslint-disable */
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')
firebase.initializeApp({
  messagingSenderId: '1088426032173'
})
const messaging = firebase.messaging()