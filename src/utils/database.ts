import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  // TODO: #11 fill in with config
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
