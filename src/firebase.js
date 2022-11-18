// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBywevKonQxdzeNo5r48Y1VUdtSkesBCto",
  authDomain: "artskyv2-9030f.firebaseapp.com",
  projectId: "artskyv2-9030f",
  storageBucket: "artskyv2-9030f.appspot.com",
  messagingSenderId: "426118048332",
  appId: "1:426118048332:web:19c767299edff32a6522e9"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

 export const db = getFirestore()