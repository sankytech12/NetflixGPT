// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-cadd3.firebaseapp.com",
  projectId: "netflixgpt-cadd3",
  storageBucket: "netflixgpt-cadd3.appspot.com",
  messagingSenderId: "952183118139",
  appId: "1:952183118139:web:70fddc75a8d2a6d4093f1e",
  measurementId: "G-B3LTWNLV60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();