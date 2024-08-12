//firebase components
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCaMUMe7uggZi9lSx6AJN9MkRhEP9VUve8",
  authDomain: "lyeana-blog-b4b7b.firebaseapp.com",
  projectId: "lyeana-blog-b4b7b",
  storageBucket: "lyeana-blog-b4b7b.appspot.com",
  messagingSenderId: "315041950170",
  appId: "1:315041950170:web:0a396ffc6cfd11214c78e3",
  measurementId: "G-7L0R8YTDLF"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  
export const auth = getAuth(app);     
