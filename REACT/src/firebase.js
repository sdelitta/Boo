// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoYnKSm1jzMJpk_5NSjz3-9u36lbQeLzo",
  authDomain: "boo-cursor.firebaseapp.com",
  projectId: "boo-cursor",
  storageBucket: "boo-cursor.appspot.com",
  messagingSenderId: "1017861606305",
  appId: "1:1017861606305:web:0273ad7a1736089c2119e0",
  measurementId: "G-4Q4QK4NRRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);