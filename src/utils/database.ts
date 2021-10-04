/* eslint-disable import/no-duplicates */
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBHrU13VwTxttMxPl8siBAfkAMd5NpB9o",
  authDomain: "ground-work-ph.firebaseapp.com",
  projectId: "ground-work-ph",
  storageBucket: "ground-work-ph.appspot.com",
  messagingSenderId: "222261590833",
  appId: "1:222261590833:web:b601647a7079b024160e10",
  measurementId: "G-SSPPQ6J5MZ",
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
const FacebookProvider = new firebase.auth.FacebookAuthProvider();
const YahooProvider = new firebase.auth.OAuthProvider("yahoo.com");

export {
  FacebookProvider,
  GoogleProvider,
  YahooProvider,
  auth,
  db,
  firebase,
  storage,
};
