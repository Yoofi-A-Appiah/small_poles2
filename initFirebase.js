import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
// firebase setup
const firebaseConfig = {
  apiKey: "AIzaSyAmklfoDzq54rEU8sG4q4N96b1P2k4hCZM",
  authDomain: "gffapp-small-poles.firebaseapp.com",
  databaseURL: "https://gffapp-small-poles-default-rtdb.firebaseio.com",
  projectId: "gffapp-small-poles",
  storageBucket: "gffapp-small-poles.appspot.com",
  messagingSenderId: "985010216267",
  appId: "1:985010216267:web:35ef0970fd7355fcab5cce",
  measurementId: "G-PNLMWZ0WVG",
};

const initializedBase = firebase.initializeApp(firebaseConfig);
//var db = firebase.firestore();

const db = getFirestore();

export { initializedBase, firebase, db };
