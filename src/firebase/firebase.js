// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqPahdZbnIDGQivq6Nc-qNOysRB-KT2pk",
    authDomain: "lolobelo-page.firebaseapp.com",
    projectId: "lolobelo-page",
    storageBucket: "lolobelo-page.appspot.com",
    messagingSenderId: "125280205865",
    appId: "1:125280205865:web:e0f4037f952efea93c7038",
    measurementId: "G-G5XMSRHY7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);