// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
https://www.gstatic.com/firebasejs/8.3.2/firebase.js
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apiKey: "AIzaSyA7PBwUn6X-UunDw1ojwD_3R6Cj81VBEsU",
    authDomain: "sample-f274e.firebaseapp.com",
    projectId: "sample-f274e",
    storageBucket: "sample-f274e.appspot.com",
    messagingSenderId: "335223432166",
    appId: "1:335223432166:web:1aa09935d60feb904cac27",
    databaseURL: 'https://project-id.firebaseio.com',
    measurementId: 'G-measurement-id',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);
    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };
    return self.registration.showNotification(
        title,
        options,
    );
});