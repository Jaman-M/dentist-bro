// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDExRWtus5l0L2PVA7gsl_8mZABSnkPWDA",
  authDomain: "dentist-bro.firebaseapp.com",
  projectId: "dentist-bro",
  storageBucket: "dentist-bro.appspot.com",
  messagingSenderId: "898879778831",
  appId: "1:898879778831:web:246b910cc99ef6f1b2737a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;