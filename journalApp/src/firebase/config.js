// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7jhXiAygV6pO0Z8knmXK8qmvv4cquoC0",
  authDomain: "react-cursos-e8315.firebaseapp.com",
  projectId: "react-cursos-e8315",
  storageBucket: "react-cursos-e8315.appspot.com",
  messagingSenderId: "1091187131667",
  appId: "1:1091187131667:web:dd42a07e5d7cc8a83406e6"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );