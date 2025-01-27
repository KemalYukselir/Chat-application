// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNtczdmnPls2ekZTUU840pn8WxA5Dpa-E",
  authDomain: "chat-app-61711.firebaseapp.com",
  databaseURL: "https://chat-app-61711-default-rtdb.firebaseio.com",
  projectId: "chat-app-61711",
  storageBucket: "chat-app-61711.firebasestorage.app",
  messagingSenderId: "355283628819",
  appId: "1:355283628819:web:69d0368beb7217208160e6",
  measurementId: "G-L3STSTJ973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);