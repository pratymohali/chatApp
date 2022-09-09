import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA1GIWVnitGOBciDbE8dhtir1XZJSSzjIE",
    authDomain: "chat-application-76096.firebaseapp.com",
    projectId: "chat-application-76096",
    storageBucket: "chat-application-76096.appspot.com",
    messagingSenderId: "577769999800",
    appId: "1:577769999800:web:643ceb36b2aa80dba7534d",
    measurementId: "G-247RFVT41W"

})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db , auth }