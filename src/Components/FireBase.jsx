// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAln7aO0l97E-0QAqWITC08gLcWuj1zyfQ",
  authDomain: "reactlibrery.firebaseapp.com",
  projectId: "reactlibrery",
  storageBucket: "reactlibrery.appspot.com",
  messagingSenderId: "314362782624",
  appId: "1:314362782624:web:ab43cc3f148f1ab0243ac5",
  measurementId: "G-1SKPCSTT1C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);