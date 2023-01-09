import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBielDqMcwa8rZ5xYqXTtQ5g2cUrUayTck",
  authDomain: "react-chat-7a30d.firebaseapp.com",
  projectId: "react-chat-7a30d",
  storageBucket: "react-chat-7a30d.appspot.com",
  messagingSenderId: "452135236640",
  appId: "1:452135236640:web:492d5fb55748a22addb845",
  measurementId: "G-X43SCV4WMY",
});

const db = firebaseConfig.firestore();

const auth = firebase.auth();

export { db, auth };
