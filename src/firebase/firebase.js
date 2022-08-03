// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyC0bD2mZBfnoQ4QoJvUa5r9S93yphChBv0",

    authDomain: "lolobelo-1cf00.firebaseapp.com",

    projectId: "lolobelo-1cf00",

    storageBucket: "lolobelo-1cf00.appspot.com",

    messagingSenderId: "441440385308",

    appId: "1:441440385308:web:d7082816d28c25102f22d9",

    measurementId: "G-MR5KX09XWL"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);