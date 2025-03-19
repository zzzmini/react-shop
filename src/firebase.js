// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-DOBcr3HI4TwzA5ZwxlX_uPrZfNTJuP0",
  authDomain: "react-shopping-app-4048b.firebaseapp.com",
  projectId: "react-shopping-app-4048b",
  storageBucket: "react-shopping-app-4048b.firebasestorage.app",
  messagingSenderId: "712855035368",
  appId: "1:712855035368:web:a8bb3f58e8746837be585d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;