import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSlAm6EHtwotMtBoCpOmTj2pCPXlP6ktM",
  authDomain: "entregafinal-iannone.firebaseapp.com",
  projectId: "entregafinal-iannone",
  storageBucket: "entregafinal-iannone.appspot.com",
  messagingSenderId: "750827603890",
  appId: "1:750827603890:web:1b32f616031d30931146ab",
  measurementId: "G-8XEK7CNYC4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
