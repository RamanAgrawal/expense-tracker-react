// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUuPalf5nw7_SQpXroEg8IoQ460xQLfKw",
  authDomain: "expense-tracker-b240a.firebaseapp.com",
  projectId: "expense-tracker-b240a",
  storageBucket: "expense-tracker-b240a.appspot.com",
  messagingSenderId: "632801722918",
  appId: "1:632801722918:web:1ed67845f9e24b75165ce7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
