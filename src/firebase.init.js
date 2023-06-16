// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGwyH_LDRIDgClNo1RFZJ8kCbCCxQUhuw",
    authDomain: "assignment-011-d547b.firebaseapp.com",
    projectId: "assignment-011-d547b",
    storageBucket: "assignment-011-d547b.appspot.com",
    messagingSenderId: "329487306167",
    appId: "1:329487306167:web:2430c8bcb9434f1ee4ec32",
    measurementId: "G-R4C9BBP9HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
export default auth