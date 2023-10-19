// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgvVrCPDflrse1psQ8oz1eK6FxwYYX0zs",
    authDomain: "simple-firebase-17e01.firebaseapp.com",
    projectId: "simple-firebase-17e01",
    storageBucket: "simple-firebase-17e01.appspot.com",
    messagingSenderId: "539576277549",
    appId: "1:539576277549:web:f4ba33fb44996c6c32f6a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);