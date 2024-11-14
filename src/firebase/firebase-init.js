// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRGWaMcT7wagrSHo1Tpo2IcE4mdVfHuEg",
  authDomain: "t-shirt-auth.firebaseapp.com",
  projectId: "t-shirt-auth",
  storageBucket: "t-shirt-auth.firebasestorage.app",
  messagingSenderId: "618863498371",
  appId: "1:618863498371:web:2c911b0fbcd69d895977b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);