// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwqL59BDbkYk5Yls2yQctzv3bbkUNJuQ0",
  authDomain: "guia-ejercicios-firebase.firebaseapp.com",
  projectId: "guia-ejercicios-firebase",
  storageBucket: "guia-ejercicios-firebase.appspot.com",
  messagingSenderId: "137595950031",
  appId: "1:137595950031:web:42e606a72bb1b0cd1bf8ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;