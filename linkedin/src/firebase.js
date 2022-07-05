

import firebase from 'firebase/compat';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6xvaurOFd07k6pu4a9_2BKkr_-0S0tl4",
    authDomain: "linkedin-clone-c2e52.firebaseapp.com",
    projectId: "linkedin-clone-c2e52",
    storageBucket: "linkedin-clone-c2e52.appspot.com",
    messagingSenderId: "604437805245",
    appId: "1:604437805245:web:d161262f457f4a8af0dfd4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;