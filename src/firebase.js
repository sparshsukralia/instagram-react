import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAJ5WbaIr8mU-toqRp6JjJo8TygWt6_w3c",
  authDomain: "instagram-react-35dfe.firebaseapp.com",
  databaseURL: "https://instagram-react-35dfe.firebaseio.com",
  projectId: "instagram-react-35dfe",
  storageBucket: "instagram-react-35dfe.appspot.com",
  messagingSenderId: "949310135791",
  appId: "1:949310135791:web:a5d2cb597c7d6046fa6a1a",
  measurementId: "G-4GW8KVTQKX",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
