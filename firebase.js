
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLZ58BBeXDkI98a_dug5U1IZ4bL1GxzIU",
  authDomain: "react-firebase-auth-5fa93.firebaseapp.com",
  projectId: "react-firebase-auth-5fa93",
  storageBucket: "react-firebase-auth-5fa93.appspot.com", 
  messagingSenderId: "983499286086",
  appId: "1:983499286086:web:aba4467a140b3570270c47"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
