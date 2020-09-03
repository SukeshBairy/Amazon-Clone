import React from 'react';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC4AhxrKhnm8Cubs9DF5hyOlNX9G33KoW4",
        authDomain: "clone-9575a.firebaseapp.com",
        databaseURL: "https://clone-9575a.firebaseio.com",
        projectId: "clone-9575a",
        storageBucket: "clone-9575a.appspot.com",
        messagingSenderId: "1077343350118",
        appId: "1:1077343350118:web:0c82a52d1a935b58afeca7",
        measurementId: "G-MN5VF2F4YK",
});         

const db = firebase.firestore();
const auth = firebase.auth();


export { auth };