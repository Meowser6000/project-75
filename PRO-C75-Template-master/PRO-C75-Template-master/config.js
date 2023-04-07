import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB9rh3xMfwWxxW9iIQix9neEuMY4MFb_1w",
  authDomain: "pro-c71-96323.firebaseapp.com",
  projectId: "pro-c71-96323",
  storageBucket: "pro-c71-96323.appspot.com",
  messagingSenderId: "1026438451856",
  appId: "1:1026438451856:web:c0b69fd4366a5ebd3a7e15"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
