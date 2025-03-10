// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-BQk2Sfi82_vuwjXK3JSiVBsATi-X8NQ",
  authDomain: "cerro-metro.firebaseapp.com",
  projectId: "cerro-metro",
  storageBucket: "cerro-metro.firebasestorage.app",
  messagingSenderId: "1002888207329",
  appId: "1:1002888207329:web:7ef24f68bc862fac2890a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export const signInWithGoogle = async (navigate) => {
  const provider = new GoogleAuthProvider();
  try{
    const result=await signInWithPopup(auth,provider)
    navigate('/')
    return result.user;
    }catch(error){
      console.error('Error al autenticar con Google',error)
      return null;
    }
}