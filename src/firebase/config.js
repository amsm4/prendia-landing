// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAou1ucZdBJcYuj7fP-u3Ftklr0UF8_LZc",
    authDomain: "prendia-32a26.firebaseapp.com",
    projectId: "prendia-32a26",
    storageBucket: "prendia-32a26.firebasestorage.app",
    messagingSenderId: "601866105951",
    appId: "1:601866105951:web:7f1948180b6decf99c17ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);