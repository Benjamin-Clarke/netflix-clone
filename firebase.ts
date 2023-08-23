// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAjw1ZGnev6cLZgqnczEVM8KgK29bpPpM",
    authDomain: "netflix-clone-a819d.firebaseapp.com",
    projectId: "netflix-clone-a819d",
    storageBucket: "netflix-clone-a819d.appspot.com",
    messagingSenderId: "607818637764",
    appId: "1:607818637764:web:4436b38f3f229603548491"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAjw1ZGnev6cLZgqnczEVM8KgK29bpPpM",
  authDomain: "netflix-clone-a819d.firebaseapp.com",
  projectId: "netflix-clone-a819d",
  storageBucket: "netflix-clone-a819d.appspot.com",
  messagingSenderId: "607818637764",
  appId: "1:607818637764:web:4436b38f3f229603548491"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */