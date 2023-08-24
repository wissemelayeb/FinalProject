import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCo5eOg6ufhdfSsg5IlXJW2OoCPW--O7BU",
  authDomain: "react-netflix-clone-ae024.firebaseapp.com",
  projectId: "react-netflix-clone-ae024",
  storageBucket: "react-netflix-clone-ae024.appspot.com",
  messagingSenderId: "920548255462",
  appId: "1:920548255462:web:0dbb996bf86124515dfd27",
  measurementId: "G-CMP468W89Y"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);





