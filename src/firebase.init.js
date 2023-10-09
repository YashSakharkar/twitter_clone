// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7wNBFxtrgUjSqm8YXeoieis4OnF5fDTA",
  authDomain: "twitter-c737a.firebaseapp.com",
  projectId: "twitter-c737a",
  storageBucket: "twitter-c737a.appspot.com",
  messagingSenderId: "1039362453891",
  appId: "1:1039362453891:web:ed66f8d788b15d0babc6b6",
  measurementId: "G-4CR4WCL1GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;