// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsXqtHUW9aekJMWYwQTWB7FlSUaH0u6tg",
  authDomain: "webrtc-b7c5f.firebaseapp.com",
  projectId: "webrtc-b7c5f",
  storageBucket: "webrtc-b7c5f.appspot.com",
  messagingSenderId: "542102352353",
  appId: "1:542102352353:web:8d6a53286a0b85bd6022a0",
  measurementId: "G-Q9JD0YY73E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);