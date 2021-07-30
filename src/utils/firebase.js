import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVQs9OUozzMvSxQq19V5r9I88ecNGP2EY",
    authDomain: "vue-manager-4d1a5.firebaseapp.com",
    projectId: "vue-manager-4d1a5",
    storageBucket: "vue-manager-4d1a5.appspot.com",
    messagingSenderId: "200924743885",
    appId: "1:200924743885:web:5aa9deebcf78128818c184"
  };

firebase.initializeApp(firebaseConfig);

// Utils 
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

// Exports 
export { auth, storage, db };
