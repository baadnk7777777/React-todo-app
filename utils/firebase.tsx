// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbEa9SZM6s0RYL8Rj8YbXqwD1INojgmfY",
    authDomain: "react-todo-app-32f6b.firebaseapp.com",
    projectId: "react-todo-app-32f6b",
    storageBucket: "react-todo-app-32f6b.appspot.com",
    messagingSenderId: "231295927363",
    appId: "1:231295927363:web:24d40c61fc99bf3b28c0f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;