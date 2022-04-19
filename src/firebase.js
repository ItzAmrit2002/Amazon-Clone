import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCO0pQrKKvrR7haQZ8rDZVumm2mWSpz1kE",
    authDomain: "clone-eae83.firebaseapp.com",
    projectId: "clone-eae83",
    storageBucket: "clone-eae83.appspot.com",
    messagingSenderId: "1005381543366",
    appId: "1:1005381543366:web:2659bc40774a840abfbec7",
    measurementId: "G-30B58C8Z6M"
  };

  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };