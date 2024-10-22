// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDUO24EoV8X65OiwYyMFn7iKivlpnNPo64",
  authDomain: "message-f654c.firebaseapp.com",
  projectId: "message-f654c",
  storageBucket: "message-f654c.appspot.com",
  messagingSenderId: "908253393279",
  appId: "1:908253393279:web:72aaa4f1aff8761814aa4a",
  measurementId: "G-8QJK033GLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;