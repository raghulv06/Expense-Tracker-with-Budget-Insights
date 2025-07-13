// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc9oVdMdtEOBf5h8CASbUN2cXuv19oEjU",
  authDomain: "expense-tracker-838c8.firebaseapp.com",
  projectId: "expense-tracker-838c8",
  storageBucket: "expense-tracker-838c8.firebasestorage.app",
  messagingSenderId: "1030134859564",
  appId: "1:1030134859564:web:b254ecead64250bc554e89",
  measurementId: "G-YF642KXJ3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
