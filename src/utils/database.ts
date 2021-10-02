import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDaP02sPfJMxqgreJpdIeZ1-0bh5z_XR54",
  authDomain: "joogie.firebaseapp.com",
  projectId: "joogie",
  storageBucket: "joogie.appspot.com",
  messagingSenderId: "911056525926",
  appId: "1:911056525926:web:290dfa68878a828bae6ba7",
  measurementId: "G-2KE47098HV",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const GithubProvider = new firebase.auth.GithubAuthProvider();

export { firebase, db, auth, storage, GoogleProvider, GithubProvider };
